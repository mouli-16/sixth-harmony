const { Schema, model } = require('mongoose')
const User = require('./user')

const applicationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: [true, '*User is required']
  },
  dob: {
    type: Date,
    required: [true, '*D.O.B is required']
  },
  address: {
    type: String,
    required: [true, '*Address is required']
  },
  type: {
    type: String,
    required: [true, '*Type is required']
  },
  status: {
    type: String,
    default: "pending"
  },
  city:{
    type:String
  },
  state:{
    type:String
  },
  zip:{
    type:String
  },
  pan:{
    type:String
  }
})

module.exports = model('applications', applicationSchema)
