const express = require('express')
require('dotenv').config()
const cors = require('cors')
const io = require('socket.io')(8080)

io.on('connection', (socket) => {
  console.log('connected')
  socket.on('sendTest', (params) => {
    socket.params = params
  })
  socket.emit('getTest', socket.params)
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
