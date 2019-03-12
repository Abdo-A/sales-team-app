const Validator = require('validator');

const isEmpty = require('./assets/isEmpty');

module.exports = (data) => {
  const errors = {};

  // For required fields
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.surname = !isEmpty(data.surname) ? data.surname : '';
  data.type = !isEmpty(data.type) ? data.type : '';
  data.password = !isEmpty(data.password) ? data.password : '';

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
  if ((data.DCs.length === 0) && (data.type === 'salesrep' || data.type === 'dcowner')) {
    errors.DCs = 'DC is required';
  }

  // password
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(data.password, { min: 4, max: 4 })) {
    errors.password = 'Password must be 4 numbers';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
