const {
  OTP_PROVIDER,
  TWILIO: {
    MESSAGING_SERVICE_SID
  }
} = require('../config/config')

function generateOTP(length) {
  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP;
}

function sendMsgTwilio() {
  const twilio = require('../config/twilio')
  return async (number, message) => (
    await twilio.messages.create({
      to: number,
      body: message,
      messagingServiceSid: MESSAGING_SERVICE_SID,
    })
  )
}

function sendMsgAWSSNS() {
  const AWS = require('../config/aws')
  return async () => (
    await new AWS.SNS({ apiVersion: '2010-03-31' })
      .publish({
        Message: message,
        PhoneNumber: number
      })
      .promise()
  )
}

let sendMsgFn
switch (OTP_PROVIDER) {
  case 'twilio':
    sendMsgFn = sendMsgTwilio()
    break;
  case 'aws.sns':
    sendMsgFn = sendMsgAWSSNS()
    break;
}

async function sendOTP(number, len = 6) {
  // const otp = generateOTP(len)
  const otp = "317051"
  const message = `Your SIH OTP is ${otp}`
  return {
    res: await sendMsgFn(number, message),
    otp
  }
}

module.exports = {
  generateOTP,
  sendOTP,
  sendMsgFn
}
