const mongoose = require('mongoose')

const uri =
  'mongodb+srv://silviaphungky7:Silviasf16@cluster0.ruvtcc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose
  .connect(uri, {})
  .then(() => console.log('connected to db'))
  .catch((error) => console.log('error connect to db', error))
