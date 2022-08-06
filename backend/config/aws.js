const AWS = require("aws-sdk")

const { AWS } = require('./config')

const SESConfig = {
  apiVersion: "2010-03-31",
  accessKeyId: AWS.ACCESS_KEY_ID,
  accessSecretKey: AWS.SECRET_ACCESS_KEY,
  region: "ap-south-1"
}

AWS.config.update(SESConfig)

module.exports = AWS
