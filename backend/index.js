const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 8000

const app = express()

/**
 * Middlewares
 */
app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGINS || '*'
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
