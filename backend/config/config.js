const fs = require('fs')
const path = require('path')
require('dotenv').config()

const convict = require('convict')

function convertCors(val) {

  if (val[0] !== '[')
    return val

  val = val.replace(' ', '')
  if (val[val.length - 1] !== ']')
    throw new Error('Invalid Cors Origins')

  val = val.substring(1, val.length - 1)
  val = val.split(',')
  return val
}

convict.addFormat({
  name: 'path-exists',
  validate: function (path) {
    if (!fs.existsSync(path))
      // throw new Error("Path must exist")
      console.log(`${path} not exist`)
      return
  }
})

const config = convict({
  ENV: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },

  DB_URI: {
    doc:'hello',
    format:'*',
    default: '',
    env:'DB_URI',
  },

  PORT: {
    doc: 'port to bind',
    format: 'port',
    default: 8000,
    env: 'PORT',
    arg: 'port',
  },

  CORS_ORIGINS: {
    doc: 'CORS origins',
    default: '*',
    env: 'CORS_ORIGINS',
    arg: 'cors',
  },
  AADHAAR_PRIVATE_FILE: {
    doc: "File that contains sensitive aadhaar data",
    format: 'path-exists',
    default: './aadhaarPrivate.json',
    env: 'AADHAAR_PRIVATE_FILE',
    arg: 'aadhaarp',
    sensitive: true,
  },
  OTP_PROVIDER: {
    doc: 'OTP Provider',
    format: (val) => {
      if(val && ( val==='twilio' || val==='aws.sns' )){
        return
      }
      throw Error('Wrong value for OTP_PROVIDER')
    },
    default: 'twilio',
    env: 'OTP_PROVIDER',
    arg: 'otp.provider'
  },
  TWILIO: {
    ACCOUNT_SID: {
      doc: 'Twilio Account SID',
      env: 'TWILIO_ACCOUNT_SID',
      default: '',
      sensitive: true
    },
    AUTH_TOKEN: {
      doc: 'Twilio Account Token',
      env: 'TWILIO_AUTH_TOKEN',
      default: '',
      sensitive: true
    },
    MESSAGING_SERVICE_SID: {
      doc: 'Twilio Messaging Service SID',
      env: 'TWILIO_MESSAGING_SERVICE_SID',
      default: '',
      sensitive: true
    }
  },
  AWS: {
    ACCESS_KEY_ID: {
      doc: 'AWS Access key ID',
      env: 'AWS_ACCESS_KEY_ID',
      default: '',
      sensitive: true
    },
    SECRET_ACCESS_KEY: {
      doc: 'AWS Secret Access key',
      env: 'AWS_SECRET_ACCESS_KEY',
      default: '',
      sensitive: true
    }
  },
  WEB3_TOKEN: {
    doc: 'Web3 Token for web3.storage',
    env: 'WEB3_TOKEN',
    default: '',
    sensitive: true
  }
})

config.validate({ allowed: 'strict' })

let configProperties = config.getProperties()
configProperties.CORS_ORIGINS = convertCors(configProperties.CORS_ORIGINS)
configProperties.AADHAAR_PRIVATE_FILE = path.join(require.main.path, configProperties.AADHAAR_PRIVATE_FILE)

module.exports = configProperties
