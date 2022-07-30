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
      throw new Error("Path must exist")
  }
})

const config = convict({
  ENV: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
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
  }
})

config.validate({ allowed: 'strict' })

let configProperties = config.getProperties()
configProperties.CORS_ORIGINS = convertCors(configProperties.CORS_ORIGINS)
configProperties.AADHAAR_PRIVATE_FILE = path.join(require.main.path, configProperties.AADHAAR_PRIVATE_FILE)

module.exports = configProperties
