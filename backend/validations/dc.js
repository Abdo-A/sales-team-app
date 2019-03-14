const Validator = require('validator');

const isEmpty = require('./assets/isEmpty');

module.exports = (data) => {
  const errors = {};

  // For required fields
  data.name = !isEmpty(data.name) ? data.name : '';

  // name
  if (Validator.isEmpty(data.name)) {
    errors.name = 'DC name is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
