const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const Image = require('../models/image')

let token = ''

const initialImages = [
  {
    url: 'https://images.pexels.com/photos/12151398/pexels-photo-12151398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,
    label: 'man reading newpaper' 
  },
  {
    url: 'https://images.pexels.com/photos/15656945/pexels-photo-15656945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'a car'
  },
]

beforeEach(async () => {
  await User.deleteMany({})
  
  const passwordHash = await bcrypt.hash('husnain123', 10)
  const user = new User({ name: 'husnain', email: 'husnaindbs@gmail.com', passwordHash })

  const savedUser = await user.save()

  const loggedUser = await api
    .post('/api/login')
    .send({
      email: 'husnaindbs@gmail.com', 
      password: 'husnain123'
    })

  token = 'Bearer ' + JSON.parse(loggedUser.text).token

  await Image.deleteMany({})

  initialImages.forEach(image => image['user'] = savedUser._id.toHexString())

  await Image.insertMany(initialImages)
}, 20000)

describe('tests for when there is some data stored in database', () => {
  test('number of images is correct', async () => {
    const response = await api.get('/api/images').set('Authorization', token)
  
    expect(response.body).toHaveLength(initialImages.length)
  })
  
  test('the default _id in mongoose is changed to just id', async () => {
    const response = await api.get('/api/images').set('Authorization', token)
  
    expect(response.body[0].id).toBeDefined()
  }, 100000)
  
  test('label or url are not missing from request data', async () => {
    const newImage_1 = {
      url: 'https://images.pexels.com/photos/15846193/pexels-photo-15846193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  
    await api.post('/api/images')
      .set('Authorization', token)
      .send(newImage_1)
      .expect(400)
    
    const newImage_2 = {
      label: 'man reading magazine'
    }

    await api.post('/api/images')
      .set('Authorization', token)
      .send(newImage_2)
      .expect(400)
  })
})

describe('testing all REST API requests', () => {
  test('testing POST request', async () => {  
    const newImage = {
      label: 'a road',
      url: 'lol'
    }
  
    await api.post('/api/images')
      .set('Authorization', token)
      .send(newImage)
      .expect(201)
  
    const allImages = await Image.find({})
  
    expect(allImages.length).toBe(initialImages.length + 1)
  }, 20000)

  test('testing DELETE request', async () => {
    let allImages = await Image.find({})
    const id = allImages[0]._id.toHexString()

    await api.delete(`/api/images/${id}`)
      .set('Authorization', token)
      .expect(204)

    allImages = await Image.find({})

    expect(allImages).toHaveLength(initialImages.length - 1)
  })
})


afterAll(() => {
  mongoose.connection.close()
})