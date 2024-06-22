const express = require('express')
require('dotenv').config()

const app = express()

// import
require('./db/connection')
const Animation = require('./models/Animation')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
})

// routes
app.get('/', (req, res) => {
  res.send('test')
})
app.post('/api/animation', (req, res) => {
  try {
    const { json } = req.body

    const animation = new Animation({ json })
    animation.save()

    return res.status(201).send('Successfully create animation')
  } catch (error) {
    console.log(error)
  }
})

const port = process.env.PORT || 8000

console.log('18236193', process.env.PORT)

app.listen(port, () => {
  console.log('listening on port', port)
})
