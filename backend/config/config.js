require('dotenv').config()

const convict = require('convict')

function convertCors(val) {
    
    if(val[0] !== '[') 
        return val

    val = val.replace(' ','')
    if(val[val.length - 1] !== ']')
        throw new Error('Invalid Cors Origins')

    val = val.substring(1,val.length-1)
    val = val.split(',')
    return val
}

const config = convict({
    ENV: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
      },

    PORT:{
        doc:'port to bind',
        format:'port',
        default:8000,
        env:'PORT',
        arg:'port',
    },

    CORS_ORIGINS : {
        doc:'CORS origins',
        default:'*',
        env:'CORS_ORIGINS',
        arg:'cors',
    }
})

config.validate({allowed:'strict'})

var configProperties = config.getProperties()
configProperties.CORS_ORIGINS = convertCors(configProperties.CORS_ORIGINS)

module.exports = configProperties