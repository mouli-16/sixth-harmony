require('dotenv').config()

const convict = require('convict')

convict.addFormat({
    name:'cors_format',
    validate: function(val) {
        if(!Array.isArray(val) && !(typeof val === 'string'))
            throw new Error('must be list of string or string')
    }
})

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
        format:'cors_format',
        default:'*',
        env:'CORS_ORIGINS',
        arg:'cors',
    }
})

config.validate({allowed:'strict'})

module.exports = config.getProperties()