const express=require('express');
const routes=express.Router();
require('dotenv').config()

function generateOTP(length) {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)]
    }
    return OTP;
}

routes.post('/otp', async(req,res)=>{
     const otp = generateOTP(6)
     const message = `Your OTP for verification is ${otp}`
     const {phoneNumber} = req.body
     const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    await client.messages.create({
      body: message,
      messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
      to: phoneNumber,
    });
    res.status(200).send({
        "message":`"OTP Sent to ${phoneNumber}"`
    })
})

module.exports=routes