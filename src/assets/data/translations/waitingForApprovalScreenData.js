import { selectedLanguage } from '.';

const waitingForApprovalScreenData = {
  title: {
    english: 'Waiting for approval...',
    thai: '',
  },
  body: {
    english:
      'Thank you. Please wait until your account is approved from Betagen supervisor.',
    thai: '',
  },
  footer: {
    english: 'Our Team',
    thai: '',
  },
};

const appDataKeys = Object.keys(waitingForApprovalScreenData);
const appDataValues = Object.values(waitingForApprovalScreenData);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
