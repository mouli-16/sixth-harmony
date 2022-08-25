const qr = require('qr-image');
const fs = require('fs')
const path = require('path')

const gens = path.join(__dirname, '.gens')

function genQR(id) {
  const qrsvg = qr.image(id, { type: 'png' });
  const pt = path.join(gens, `${id}.png`)
  return [qrsvg.pipe(fs.createWriteStream(pt)), pt];
}

module.exports = { genQR }

if(module == require.main) {
  console.log(genQR('12355'))
}
