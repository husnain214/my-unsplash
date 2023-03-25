const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')

usersRouter.post('/', async (request, response) => {
  const { email, name, password } = request.body

  if(!email || !password) {
    return response.status(400).json({
      error: 'email and password are required'
    })
  }

  const existingUser = await User.findOne({ email })

  if(existingUser) {
    return response.status(400).json({
      error: 'email must be unique'
    })
  }

  if(password.length < 3) {
    return response.status(400).json({
      error: 'password must be atleast 3 characters'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    name,
    email,
    passwordHash
  })

  const savedUser = await user.save()

  response.status(201).send(savedUser)
})

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('images', { url: 1, label: 1 })
  response.json(users)
})

module.exports = usersRouter