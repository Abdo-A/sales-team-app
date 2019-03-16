const { selectedLanguage } = require('.');

const userRelatedData = {
  noFirstNameError: {
    english: 'First Name is required',
    thai: '',
  },
  noSurnameError: {
    english: 'Surname is required',
    thai: '',
  },
  noUserTypeError: {
    english: 'User type is required',
    thai: '',
  },
  noDCError: {
    english: 'DC name is required',
    thai: '',
  },
  noPasswordError: {
    english: 'Password is required',
    thai: '',
  },
  wrongLengthPasswordError: {
    english: 'Password must be a 4 digits number',
    thai: '',
  },
  existingUserError: {
    english: 'This user already exists',
    thai: '',
  },
  incorrectInfoError: {
    english: 'Incorrect info',
    thai: '',
  },
  incorrectPasswordError: {
    english: 'Incorrect password',
    thai: '',
  },
};

const appDataKeys = Object.keys(userRelatedData);
const appDataValues = Object.values(userRelatedData);
module.exports = appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
