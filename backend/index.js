const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");

const config = require('./config/config')
const routes = require('./routes')

const { PORT, DB_URI } = config

const app = express()

/**
 * Middlewares
 */
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: config.CORS_ORIGINS
}))

/**
 * Routes
 */
app.use(routes.user)
app.use(routes.storage)


;(async () => {
  await mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  ).then(() => console.log(
    'Connection established to dB'
  ))

  /**
   * Main server
   */
  app.listen(PORT, () => {
    console.log(
      `server listenning on ${PORT}`
    )
  })
})()
