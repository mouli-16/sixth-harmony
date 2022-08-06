const jwt = require('jsonwebtoken')
const config = require('../config/config')

function generateToken(id) {
  return jwt.sign({ 'sub': id }, config.SECRET_KEY, { expiresIn: '1800s' })
}

function authenticate(req, res, next) {
  const token = req.cookies.access_token
  if (!token)
    return res.status(403).send({
      message: "Unauthorized"
    })
  try {
    const data = jwt.verify(token, config.SECRET_KEY)
    console.log(data.sub)
    res.locals.sub = data.sub
    return next()
  } catch {
    return res.status(403).send({
      message: "Unauthorized"
    })
  }
}


module.exports = { generateToken, authenticate }