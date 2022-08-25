const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");

const config = require('./config/config')
const routes = require('./routes')
const { startCronTasks } = require('./config/cron-tasks')

const { PORT, DB_URI, CORS_ORIGINS } = config

const app = express()
console.log(CORS_ORIGINS);
/**
 * Middlewares
 */
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: CORS_ORIGINS,
  credentials: true,
  allowedHeaders: [
    'Origin', 'X-Requested-With', 'Content-Type',
    'Accept', 'X-Access-Token'
  ]
}))

/**
 * Routes
 */
app.use('/auth', routes.auth)
app.use('/storage', routes.storage)
app.use('/application', routes.application)
app.use('/admin', routes.admin)

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

  /* Don't start cron tasks */
  if (false) {
    startCronTasks()
  }

  /**
   * Main server
   */
  app.listen(PORT, () => {
    console.log(
      `server listenning on ${PORT}`
    )
  })
})()
