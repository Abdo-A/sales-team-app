const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  type: {
    // salesrep, dcowner, supervisor, superadmin
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  actualPassword: {
    type: String,
  },
  DCs: [
    {
      type: String,
    },
  ],
  province: String,
  subProvince: String,
  avatar: String,
  approved: {
    type: Boolean,
    default: false,
  },
  pushNotificationToken: String,
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);
