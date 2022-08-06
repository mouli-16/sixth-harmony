const web3 = require('web3.storage')
const { WEB3_TOKEN } = require('./config')

const storage = new web3.Web3Storage({ token: WEB3_TOKEN })

module.exports = storage
