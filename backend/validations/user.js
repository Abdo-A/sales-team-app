const Validator = require('validator');

const isEmpty = require('./assets/isEmpty');

module.exports = (incomingData) => {
  const data = incomingData;
  const errors = {};

  // For required fields
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.surname = !isEmpty(data.surname) ? data.surname : '';
  data.type = !isEmpty(data.type) ? data.type : '';
  data.province = !isEmpty(data.province) ? data.province : '';
  data.subProvince = !isEmpty(data.subProvince) ? data.subProvince : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // firstName
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First Name field is required';
  }

  // surname
  if (Validator.isEmpty(data.surname)) {
    errors.surname = 'Surname field is required';
  }

  // type
  if (Validator.isEmpty(data.type)) {
    errors.type = 'Type field is required';
  }

  // province
  if (Validator.isEmpty(data.province)) {
    errors.province = 'Province field is required';
  }

  // subProvince
  if (Validator.isEmpty(data.subProvince)) {
    errors.subProvince = 'Sub-Province field is required';
  }

  // password
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 6 })) {
    errors.password = 'Password must be 6 numbers';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
