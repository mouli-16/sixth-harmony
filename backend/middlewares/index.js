const jwt = require('jsonwebtoken')
const config = require('../config/config')

function generateToken(id) {
  return jwt.sign({ 'sub': id }, config.SECRET_KEY, { expiresIn: '18000s' })
}

function authenticate(req, res, next) {
  const token = req.cookies.access_token
  if (!token)
    return res.status(403).send({
      message: "Unauthorized"
    })
  try {
    const data = jwt.verify(token, config.SECRET_KEY)
    res.locals.sub = data.sub
    return next()
  } catch {
    return res.status(403).send({
      message: "Unauthorized"
    })
  }
}

function authenticateAdmin(req,res,next){
  const token  = req.cookies.access_token
  if (!token)
  return res.status(403).send({
    message: "Unauthorized"
  })
  try{
    const data = jwt.verify(token, config.SECRET_KEY)
    if(data.type=="user"){
      return res.status(403).send({
        message: "Unauthorized"
      })
    }
    if(data.type=="admin")
    return next()
  }
  catch(err){
    return res.status(403).send({
      message: "Unauthorized"
    })
  }

}


module.exports = { generateToken, authenticate }