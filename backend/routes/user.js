const { Router } = require('express')
const { generateToken, authenticate } = require('../middlewares')
const { User } = require('../models')
const { getDetailsFromAadhaar } = require('../utils/dummy')
const { sendOTP } = require('../utils/otp')

const routes = Router()

routes.post('/otp', async (req, res) => {
  const { aadhaar, type } = req.body;
  const userDetails = getDetailsFromAadhaar(aadhaar)

  if(!userDetails) {
    return res.status(404).json()
  }

  let user
  user = await User.findOne({ aadhaar: aadhaar })
  //No user found
  if (!user) {
    const name = userDetails.name
    user = await User.create({ name, aadhaar, type })
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
    return res.status(401).send({
      message: "Could not find the user."
    })
  }

  if (user.otp == otp) {
    const token = generateToken(user._id)
    res.cookie("access_token", token, {
      httpOnly: true,
    })
    return res.status(200).send({
      message: "Verified"
    })

  } else {
    return res.status(402).send({
      message: "Unauthorized"
    })
  }
})

routes.get("/logout",authenticate,(req,res)=>{
  return res.clearCookie("access_token").status(200).json("Successfuly Logged out")
})

module.exports = routes
