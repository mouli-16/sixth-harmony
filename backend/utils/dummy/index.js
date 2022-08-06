const config = require('../../config/config')
const aadhaarDummy = require("./aadhaarDummy.json")
let aadhaarPrivate = []
try {
  console.log(config.AADHAAR_PRIVATE_FILE)
  aadhaarPrivate = require(config.AADHAAR_PRIVATE_FILE)
} catch (e) {
  // If error found importing module
  console.log("Aadhaar Private File not found")
  aadhaarPrivate = []
}

function getDetailsFromAadhaar(aadhaar) {
  for (const obj of aadhaarPrivate) {
    if (aadhaar === obj.aadhaar)
      return obj
  }
  for (const obj of aadhaarDummy) {
    if (aadhaar === obj.aadhaar)
      return obj
  }
  return undefined
}

module.exports = {
  getDetailsFromAadhaar,
  aadhaarDummy,
  aadhaarPrivate
}
