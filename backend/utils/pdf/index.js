const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path')

const consts = {
  dummyProfile: path.join(__dirname, 'assets/dummyProfile.png'),
  dummyText: path.join(__dirname, 'assets/dummyText.png'),
  dummySign: path.join(__dirname, 'assets/dummySign.png'),
}

function genPDF({
  licenseno,
  title,
  name,
  dob,
  address,
  city,
  zipcode,
  stream,
}) {
  // Create a document
  const doc = new PDFDocument();

  doc
    .font('Helvetica-Bold')
    .fontSize(40)
    .text(title, 50, 75, {
      align: 'center',
      underline: true,
    });

  doc.image(consts.dummyProfile, 420, 200, {
    width: 100
  });

  doc
    .font('Times-Roman')
    .fontSize(18)
    .text(
      `\
License No.: ${licenseno}
Name: ${name}
D.O.B: ${dob}
Address: ${address}
City: ${city}
Zip Code: ${zipcode}
`, 50, 200, {
      width: 350,
      align: 'left',
      lineGap: 15,
    });

  doc.image(consts.dummyText, 45, 430, {
    width: 475
  });

  doc.image(consts.dummySign, 50, 680, {
    width: 175
  });

  doc.end();
  doc.pipe(stream);
}

module.exports = {
  genPDF
}

// Example
if (require.main == module) {
  genPDF({
    licenseno: '123AD67T90',
    title: 'Seafarers License',
    name: 'Srijan Majumdar',
    dob: new Date().toLocaleDateString(),
    address: 'Hall 2, NIT Durgapur',
    city: 'Durgapur',
    zipcode: '713209',
    stream: fs.createWriteStream('output.pdf')
  })
}
