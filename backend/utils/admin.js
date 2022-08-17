var readline = require('readline');
const mongoose = require('mongoose')
var { Admin } = require('../models')
const { DB_URI } = require('../config/config')

let user = {
  username: '',
  password: ''
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

const usernameQ = () => {
  return new Promise((resolve, reject) => {
    rl.question('Username: ', (username) => {
      if (username.length <= 4) {
        reject('username too short')
      }
      resolve(username)
    })
  })
}

const passwordQ = () => {
  return new Promise((resolve, reject) => {

    rl.question('Password: ', (password) => {
      if (password.length <= 4) {
        reject('password too short')
      }
      resolve(password)
    })
  })
}

const main = async () => {
  await mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  ).then(() => console.log(
    'Connection established to dB'
  )).catch(()=>{
    'Connection could not be made to db'
    process.exit()
  })
  user.username = await usernameQ().catch((reason) => { console.log(reason); process.exit() })
  user.password = await passwordQ().catch((reason) => { console.log(reason); process.exit() })
  var adminUser = new Admin(user)
  console.log("Creating Admin User")
  adminUser.save((err) => {
    if (err) {
      throw err
    }
    console.log(`Admin ${user.username} created Successfuly`)
    rl.close()
    process.exit()
  })
}

main()  
