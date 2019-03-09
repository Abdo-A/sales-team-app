const Validator = require('validator');

const isEmpty = require('./assets/isEmpty');

module.exports = function validateLoginInput(data) {
  const errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.surname = !isEmpty(data.surname) ? data.surname : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name is required';
  }

  if (Validator.isEmpty(data.surname)) {
    errors.surname = 'Surname is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
