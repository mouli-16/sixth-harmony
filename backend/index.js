const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./config/config')
const routes = require('./routes')

const PORT = config.PORT

const app = express()

/**
 * Middlewares
 */
app.use(express.json())
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
    process.env.DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  )
  /**
   * Main server
   */
  app.listen(PORT, () => {
    console.log(`server listenning on ${PORT}`)
  })
})()
