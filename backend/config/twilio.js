const { TWILIO } = require('./config')

const client = require("twilio")(
  TWILIO.ACCOUNT_SID,
  TWILIO.AUTH_TOKEN
)

module.exports = client
