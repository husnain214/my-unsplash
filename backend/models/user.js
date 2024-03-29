const { isEmail } = require('validator')

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    unique: true,
    type: String,
    validate: { 
      validator: isEmail,
      message: 'Please provide a valid email' 
    }
  },
  passwordHash: {
    required: true,
    unique: true,
    type: String
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    }
  ]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)