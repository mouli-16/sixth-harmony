const jwt = require('jsonwebtoken')
const config = require('../config/config')

function generateToken(id, admin = false) {
  return jwt.sign({ 'sub': id, 'admin': admin }, config.SECRET_KEY, { expiresIn: '18000s' })
}

function adminOnly(req, res, next) {
  if (res.locals.admin)
    return next()
  return res.status(403).send({
    message: "Only Admins can access this resource"
  })
}

function authenticate(req, res, next) {
  const token = req.cookies.access_token
  if (!token)
    return res.status(401).send({
      message: "Unauthorized"
    })
  try {
    const data = jwt.verify(token, config.SECRET_KEY)
    res.locals.sub = data.sub
    res.locals.admin = data.admin
    return next()
  } catch {
    return res.status(403).send({
      message: "Unauthorized"
    })
  }
}


module.exports = { generateToken, authenticate, adminOnly }