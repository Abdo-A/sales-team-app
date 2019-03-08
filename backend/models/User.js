const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create User model
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  type: { // salesrep, dcowner, supervisor, superadmin
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  province: String,
  avatar: String,
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);
