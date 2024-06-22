const mongoose = require('mongoose')

console.log(process.env.DB_URL, 'asdassdasdas')

const uri = process.env.DB_URL

mongoose
  .connect(uri, {})
  .then(() => console.log('connected to db'))
  .catch((error) => console.log('error connect to db', error))
