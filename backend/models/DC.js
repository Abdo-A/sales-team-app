const mongoose = require('mongoose');

const { Schema } = mongoose;

const DCSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    // L or M or S
    type: String,
    default: 'M',
  },
  salesThisMonth: {
    type: Number,
    default: 0,
  },
  grassJellySalesThisMonth: {
    type: Number,
    default: 0,
  },
  totalMonthlyTarget: {
    type: Number,
    default: 6000,
  },
  grassJellyMonthlyTarget: {
    type: Number,
    default: 1500,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('dc', DCSchema);
