const imagesRouter = require('express').Router()
const Image = require('../models/image')
const { userExtractor } = require('../utils/middleware')

imagesRouter.post('/', userExtractor, async (request, response) => {   
  const { body, user } = request

  if(!body.url || !body.label) {
    return response.status(400).json({ 
      error: 'url or label is missing' 
    })
  }

  const image = new Image({
    label: body.label,
    url: body.url,
    user: user._id
  })

  const savedImage = await image.save()
  user.images = user.images.concat(savedImage._id)
  await user.save()

  response.status(201).json(savedImage)
})

imagesRouter.delete('/:id', userExtractor, async (request, response) => {
  const id = request.params.id
  const user = request.user
  const image = await Image.findById(id)

  if(image.user.toString() !== user.id) {
    return response.status(401).json({ 
      error: 'token is missing or invalid' 
    })
  }

  await Image.findByIdAndRemove(id)
  response.status(204).end()
})

imagesRouter.get('/', userExtractor, async (request, response) => {
  const user = request.user

  const images = await Image.find({ user }).populate('user', {username: 1, name: 1})
  response.json(images)
})

imagesRouter.put('/:id', async (request, response) => {
  const id = request.params.id

  const image = await Image.findById(id)
  
  const updatedImage = await Image.findByIdAndUpdate(id, image, { updated: true })
  response.json(updatedImage)
})

module.exports = imagesRouter