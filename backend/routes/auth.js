const { Router } = require('express')
const { generateToken, authenticate } = require('../middlewares')
const { User, Admin } = require('../models')
const { getDetailsFromAadhaar } = require('../utils/dummy')
const { sendOTP } = require('../utils/otp')
// import { createClient } from 'redis';
const redis = require('redis')

const client = redis.createClient({
  url: 'redis://default:eDAAzdVEkhuwVrSgydmhJLeXQLdCkxEs@redis-10590.c8.us-east-1-3.ec2.cloud.redislabs.com:10590'
});
client.on('error', (err) => console.log('Redis Client Error', err));



const routes = Router()

routes.post('/otp', async (req, res) => {
  const { aadhaar, isChecked } = req.body;
  const userDetails = getDetailsFromAadhaar(aadhaar,isChecked)

  if (!userDetails) {
    return res.status(404).json()
  }

  let user
  user = await User.findOne({ aadhaar: aadhaar })
  //No user found
  if (!user) {
    const name = userDetails.name
    user = await User.create({ name, aadhaar })
  }

  let otp
  if (!userDetails.otp) {
    const { otp: _otp } = await sendOTP(userDetails.phone)
    otp = _otp
  } else {
    otp = userDetails.otp
  }

  user.otp = otp
  await user.save()

  res.status(200).send(user);
})

//Verify User via OTP
routes.post('/verify', async (req, res) => {
  const { otp, aadhaar } = req.body
  const user = await User.findOne({ aadhaar: aadhaar })

  //No user found
  if (!user) {
    return res.status(401).json({
      message: "Could not find the user."
    })
  }

  if (user.otp == otp) {
    console.log("Setting Cookie")
    const token = generateToken(user._id)
    res.cookie("access_token", token)
    
    return res.status(200).json({
      message: "Verified",
      token: token
    })

  } else {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }
})

// admin login
routes.post("/admin", async (req, res) => {
  const { username, password } = req.body
  let admin = await Admin.findOne({ 'username': username })

  if (!admin) {
    return res.status(403).send({
      message: "Only Admins can access this resource"
    })
  }
  await admin.comparePassword(password, (err, isMatch = false) => {
    if (err || !isMatch) return res.status(401).send({ message: "Unauthorized" })
    const token = generateToken(admin._id, true)
    res.cookie("access_token", token, {
      httpOnly: true,
    })
    return res.status(200).send({
      message: "Successful Login",
      token: token
    })
  })

})

routes.get("/logout", authenticate, (req, res) => {
  return res.status(200).json("Successfuly Logged out")
})

routes.post('/postredis',async(req,res)=>{
  const {body} = req.body
  await client.connect();
  console.log("Connected");
  await client.lPush('rafi',body);
  console.log("Set");
const value = await client.lRange('rafi',0,-1);
   return res.send(value)
})

module.exports = routes
