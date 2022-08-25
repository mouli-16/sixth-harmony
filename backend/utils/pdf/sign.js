const qpdf = require('node-qpdf');
const fs = require('fs')

async function signWithPswd(pt, pswd, outpt) {
  let options = {
      keyLength: 128,
      password: pswd,
      outputFile: !!outpt ? outpt :`$${pt}`
  }
  
  return await qpdf.encrypt(pt, options)
}

module.exports = { signWithPswd }

if(module == require.main) {
  signWithPswd('output.pdf', "25.08.2002")
}
