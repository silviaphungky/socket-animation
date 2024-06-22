const mongoose = require('mongoose')

const animationSchema = mongoose.Schema({
  json: {
    type: String,
    required: true,
  },
})

const Animation = mongoose.model('Animation', animationSchema)

module.exports = Animation
