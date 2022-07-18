const express = require('express')
const cors = require('cors')

const config = require('./config/config')
const routes = require('./routes/index')
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
 * Main server
 */
app.listen(PORT, () => {
    console.log(`server listenning on ${PORT}`)
})
/**
 * Routes
 */
 app.use(routes)
