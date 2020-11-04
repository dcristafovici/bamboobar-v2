const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const cors = require('cors')

const app = express()
const PORT = config.get('port') || 5000
app.use(express.json({extended: true}))
app.use(cors())

async function start() {
  try{
    await mongoose.connect(
      config.get('mongoURI'),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    )
    app.listen(PORT, ()=> console.log(`Start with port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}


start()
