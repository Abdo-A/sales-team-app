const { selectedLanguage } = require('.');

const notificationsData = {
  noFirstNameError: {
    english: 'First Name is required',
    thai: 'กรุณาใส่ชื่อ',
  },
  forUserApprovalTitle: {
    english: 'registered',
    thai: '',
  },
  forUserApprovalBody: {
    english: 'A new user has registered',
    thai: '',
  },
  from: {
    english: 'from',
    thai: 'แฅ่',
  },
  onDCUpdateTitle: {
    english: 'DC Update',
    thai: '',
  },
  onDCUpdateBody: {
    english: 'The rank of your DC',
    thai: '',
  },
  onDailyUpdateTitle: {
    english: 'sales are made this month',
    thai: '',
  },
  onDailyUpdateBody: {
    english: 'Daily Update',
    thai: '',
  },
};

const appDataKeys = Object.keys(notificationsData);
const appDataValues = Object.values(notificationsData);
module.exports = appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
