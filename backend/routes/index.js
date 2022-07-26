const express=require('express');
const getDetailsFromAadhaar = require('../utils/index');
const routes=express.Router();
require('dotenv').config()
const db = require('../utils/index');
const User = require('../models/user')

// Configure AWS
const AWS = require("aws-sdk");
const SESConfig = {
  apiVersion: "2010-03-31",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  accessSecretKey: process.env.AWS_SECRET_ACCESS_KEYAWS_SECRET_KEY,
  region: "ap-south-1"
}
AWS.config.update(SESConfig);


function generateOTP(length) {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)]
    }
    return OTP;
}

routes.post('/otp', async(req,res)=>{
  const {aadhaar,type} = req.body;
  const user = getDetailsFromAadhaar(aadhaar);
     const otp = generateOTP(6)
     const message = `Your SIH OTP is ${otp}`
     const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    // Register User
    const name = user.name
    const blocked = false
    var userObject
    try{
      userObject = await User.create({name,aadhaar,type,blocked,otp});
        
    }catch(err){
        console.log(err)
      }

    const provider = "twilio";  var result;

    //Twilio
    if(provider=='twilio'){
       result= await client.messages.create({
      body: message,
      messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
      to: user.phone,
    });

  }
  //AWS SNS
  if(provider=="sns"){
    result = await new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish({
      Message: message,
      PhoneNumber: user.phone,
    })
    .promise();
  }
    res.status(200).send(userObject);

})

//Verify User via OTP
routes.post('/verify',(req,res)=>{
   const {otp,aadhaar} = req.body
   
   User.findOne({ aadhaar: aadhaar }).then(user => {
    //No user found
    if (!user) {
        return res.status(401).send({
            success: false,
            message: "Could not find the user."
        })
    }

   if(user.otp==otp){
     return res.status(200).send({
       message:"Verified"
     })

   } else{
    return res.status(401).send({
      message:"Unauthorized"
    })
   }
})

})

module.exports=routes