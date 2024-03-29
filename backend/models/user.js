const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, '*Name is required'],
  },
  aadhaar: {
    type: String,
    required: [true, '*Aadhaar is required'],
    unique: true,
    length: [12]
  },
  blocked: {
    type: Boolean,
    default: false
  },
  otp: {
    type: String
  },
  files:[
    { 
        name:{
            type:String,
            
        },
        cid:{
            type:String,
            
        },
    }
]
});

const User = mongoose.model('users', userSchema);
module.exports = User;
