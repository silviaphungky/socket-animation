const mongoose = require('mongoose')

const uri = process.env.DB_URL

mongoose
  .connect(uri, {})
  .then(() => console.log('connected to db'))
  .catch((error) => console.log('error connect to db', error))
