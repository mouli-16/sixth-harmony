const express = require('express')
const cors = require('cors')

const config = require('./config/config')
const userRoutes = require('./routes/user')
const storageRoutes = require('./routes/storage')

const mongoose = require('mongoose');
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
 mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true})
 .then((result)=>app.listen(PORT, () => {
    console.log(`server listenning on ${PORT}`)
})).catch((err)=>console.log(err));

/**
 * Routes
 */
 app.use(userRoutes)
 app.use(storageRoutes)
