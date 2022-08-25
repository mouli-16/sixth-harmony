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

function getDetailsFromAadhaar(aadhaar,isChecked) {
  for (const obj of aadhaarPrivate) {
    if (!isChecked && aadhaar === obj.aadhaar)
      return obj

    if(isChecked && aadhaar===obj.indos)
    return obj
  }
  for (const obj of aadhaarDummy) {
    if (!isChecked && aadhaar === obj.aadhaar)
      return obj

    if(isChecked && aadhaar===obj.indos)
    return obj
  }
  return undefined
}

module.exports = {
  getDetailsFromAadhaar,
  aadhaarDummy,
  aadhaarPrivate
}
