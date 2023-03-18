const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  label: {
    required: true,
    type: String
  },
  url: {
    required: true,
    unique: true,
    type: String
  },
  user: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
})

imageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Image', imageSchema)