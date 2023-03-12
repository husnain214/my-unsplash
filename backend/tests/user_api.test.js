const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcryptjs')

const User = require('../models/user')

beforeEach(async () => {
  await User.deleteMany({})
}, 10000)

describe('there are no users in the database', () => {
  test('users can successfully create an account with valid information', async () => {
    const newUser = {
      name: 'Saad',
      username: 'doraemon',
      password: 'saadcheema'
    }
  
    await api.post('/api/users').send(newUser).expect(201)
  })
  
  test('users cannot create an account with invalid or incomplete information', async () => {
    let newUser = {
      name: 'Saad',
      password: 'saadcheema'
    }
  
    await api.post('/api/users').send(newUser).expect(400)
  
    newUser = {
      name: 'Saad',
      password: '12'
    }
  
    await api.post('/api/users').send(newUser).expect(400)
  })
})

describe('there are some users in the database', () => {
  beforeEach(async () => { 
    const passwordHash = await bcrypt.hash('doraemon', 10)
    const user = new User({ name: 'Saad Atif', username: 'saadcheema', passwordHash })
  
    await user.save()
  })

  test.only('users can log in with valid credentials', async () => {
    const loggingUser = {
      username: 'saadcheema',
      password: 'doraemon'
    }

    await api.post('/api/login').send(loggingUser).expect(200)
  })
})

afterAll(() => {
  mongoose.connection.close()
})