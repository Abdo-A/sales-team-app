const Validator = require('validator');

const isEmpty = require('./assets/isEmpty');
const userRelatedData = require('../assets/data/translations/userRelatedData');

module.exports = (data) => {
  const errors = {};

  // For required fields
  data.name = !isEmpty(data.name) ? data.name : '';

  // name
  if (Validator.isEmpty(data.name)) {
    errors.name = userRelatedData.noDCError;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
