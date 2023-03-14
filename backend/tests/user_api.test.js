const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcryptjs')
const User = require('../models/user')

beforeEach(async () => {
  await User.deleteMany({})
}, 20000)

describe('there are no users in the database', () => {
  test('users can successfully create an account with valid information', async () => {
    const usersAtStart = await User.find({})

    const newUser = {
      name: 'Saad',
      username: 'saadheema',
      password: 'doraemon'
    }
  
    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await User.find({})

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
  })

  test('creation fails if username or password is missing', async () => {
    const usersAtStart = await User.find({})

    const newUser_1 = {
      name: 'Superuser',
      password: 'salainen',
    }

    const newUser_2 = {
      username: 'root',
      name: 'Superuser'
    }

    const result_1 = await api
      .post('/api/users')
      .send(newUser_1)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const result_2 = await api
      .post('/api/users')
      .send(newUser_2)
      .expect(400)
      .expect('Content-Type', /application\/json/)
      
    expect(result_1.body.error).toContain('username and password are required')
    expect(result_2.body.error).toContain('username and password are required')

    const usersAtEnd = await User.find({})
    expect(usersAtEnd).toEqual(usersAtStart)
  }, 15000)
})

describe('there are some users in the database', () => {
  beforeEach(async () => { 
    const passwordHash = await bcrypt.hash('doraemon', 10)
    const user = new User({ name: 'Saad Atif', username: 'saadcheema', passwordHash })

    await user.save()
  })

  test('users can log in with valid credentials', async () => {
    const loggingUser = {
      username: 'saadcheema',
      password: 'doraemon'
    }

    await api
      .post('/api/login')
      .send(loggingUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await User.find({})

    const newUser = {
      username: 'saadcheema',
      name: 'Husnain Zahid',
      password: 'husnain123'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('username must be unique')

    const usersAtEnd = await User.find({})
    expect(usersAtEnd).toEqual(usersAtStart)
  })

  test('creation succeeds with a fresh username', async () => {  
    const usersAtStart = await User.find({})
  
    const newUser = {
      username: 'husnaindbs',
      name: 'Husnain Zahid',
      password: 'boom',
    }
  
    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
    const usersAtEnd = await User.find({})
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
  
    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})