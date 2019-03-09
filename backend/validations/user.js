const Validator = require('validator');

const isEmpty = require('./assets/isEmpty');

module.exports = (data) => {
  const errors = {};

  // For required fields
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.surname = !isEmpty(data.surname) ? data.surname : '';
  data.type = !isEmpty(data.type) ? data.type : '';
  data.dc = !isEmpty(data.dc) ? data.dc : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // firstName
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First Name is required';
  }

  // surname
  if (Validator.isEmpty(data.surname)) {
    errors.surname = 'Surname is required';
  }

  // type
  if (Validator.isEmpty(data.type)) {
    errors.type = 'Type is required';
  }

  // DC
  if (Validator.isEmpty(data.DC) && data.type==='salesrep' || data.type==='dcowner') {
    errors.DC = 'DC is required';
  }

  // password
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 6 })) {
    errors.password = 'Password must be 6 numbers';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Please confirm your password';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
