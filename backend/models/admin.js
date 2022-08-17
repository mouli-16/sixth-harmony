const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;
SALT_WORK_FACTOR = 10;

const AdminSchema = new Schema({
  username: {
    type: String,
    required: [true, '*Username is required'],
    unique:true
  },
  password: {
    type: String,
    required: [true, '*Password is required'],
  },
});

AdminSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          user.password = hash;
          next();
      });
  });
});

AdminSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

const Admin = mongoose.model('admins', AdminSchema);
module.exports = Admin;
