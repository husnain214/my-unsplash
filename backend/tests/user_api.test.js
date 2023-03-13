const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcryptjs')

const User = require('../models/user')

describe('there are no users in the database', () => {
  beforeEach(async () => {
    await User.deleteMany({})
  }, 10000)

  test('users can successfully create an account with valid information', async () => {
    const usersAtStart = await User.find({})

    const newUser = {
      name: 'Saad',
      username: 'doraemon',
      password: 'saadcheema'
    }
  
    await api
          .post('/api/users')
          .send(newUser)
          .expect(201)
          .expect('Content-Type', /application\/json/)

    const usersAtEnd = await User.find({})

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
  })

  // test('users cannot create an account with invalid or incomplete information', async () => {
  //   const usersAtStart = await User.find({})
  //   const newUser = {
  //     name: 'Saad',
  //     password: 'saadcheema'
  //   }
  
  //   const result_1 = await api.post('/api/users')
  //     .send(newUser)
  //     .expect(400)
  //     .expect('Content-Type', /application\/json/)
  
  //   if(result_1.body.error) return;
  
  //   const newUser2 = {
  //     name: 'Saad',
  //     password: '12'
  //   }
  
  //   const result_2 = await api.post('/api/users')
  //     .send(newUser2)
  //     .expect(400)
  //     .expect('Content-Type', /application\/json/)
  
  //   if(result_2.body.error) return;
  
  //   expect(result_1.body.error).toContain('username and password are required')
  //   expect(result_2.body.error).toContain('username and password are required')

  //   const usersAtEnd = await User.find({})
  
  //   expect(usersAtEnd).toEqual(usersAtStart)
  // }, 20000)  
})

describe('there are some users in the database', () => {
  beforeEach(async () => { 
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('doraemon', 10)
    const user = new User({ name: 'Saad Atif', username: 'saadcheema', passwordHash })

    await user.save()
  }, 20000)

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
})

afterAll(() => {
  mongoose.connection.close()
})