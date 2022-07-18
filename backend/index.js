const express = require('express')
const cors = require('cors')

const config = require('./config/config')

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
app.get('/ping', (_req, res) => {
    res.send('pong')
})

/**
 * Main server
 */
app.listen(PORT, () => {
    console.log(`server listenning on ${PORT}`)
})
