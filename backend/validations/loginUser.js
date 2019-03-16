const Validator = require('validator');

const isEmpty = require('./assets/isEmpty');

const userRelatedData = require('../assets/data/translations/userRelatedData');

module.exports = function validateLoginInput(data) {
  const errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.surname = !isEmpty(data.surname) ? data.surname : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = userRelatedData.noFirstNameError;
  }

  if (Validator.isEmpty(data.surname)) {
    errors.surname = userRelatedData.noSurnameError;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = userRelatedData.noPasswordError;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
