const Validator = require('validator');

const isEmpty = require('./assets/isEmpty');

const userRelatedData = require('../assets/data/translations/userRelatedData');

module.exports = (data) => {
  const errors = {};

  // For required fields
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.surname = !isEmpty(data.surname) ? data.surname : '';
  data.type = !isEmpty(data.type) ? data.type : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // firstName
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = userRelatedData.noFirstNameError;
  }

  // surname
  if (Validator.isEmpty(data.surname)) {
    errors.surname = userRelatedData.noSurnameError;
  }

  // type
  if (Validator.isEmpty(data.type)) {
    errors.type = userRelatedData.noUserTypeError;
  }

  // DC
  if (
    (!data.DCs || data.DCs.length === 0)
    && (data.type === 'salesrep' || data.type === 'dcowner')
  ) {
    errors.DCs = userRelatedData.noDCError;
  }

  // password
  if (Validator.isEmpty(data.password)) {
    errors.password = userRelatedData.noPasswordError;
  }

  if (!Validator.isLength(data.password, { min: 4, max: 4 })) {
    errors.password = userRelatedData.wrongLengthPasswordError;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
