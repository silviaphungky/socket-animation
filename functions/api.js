const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const serverles = require('serverless-http')

// import
require('../db/connection')
const Animation = require('../models/Animation')

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
})
const router = express.Router()

// routes
router.get('/', (req, res) => {
  res.json({
    data: 'success',
  })
})

router.post('/animation', (req, res) => {
  try {
    const { json } = req.body
    const animation = new Animation({ json })
    animation.save()

    return res.status(201).json({ message: 'Successfully create animation' })
  } catch (error) {
    console.log(error, 'Failed create animation')
  }
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverles(app)