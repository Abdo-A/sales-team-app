import { selectedLanguage } from '.';

const waitingForApprovalScreenData = {
  title: {
    english: 'Waiting for approval...',
    thai: 'รอการอนุมัติจากผู้ดูแล',
  },
  body: {
    english:
      'Thank you. Please wait until your account is approved from Betagen supervisor.',
    thai: 'ขอบคุณ กรุณารอการอนุมัติจากผู้ดูแล',
  },
  footer: {
    english: 'Our Team',
    thai: 'ทีมของพวกเรา',
  },
};

const appDataKeys = Object.keys(waitingForApprovalScreenData);
const appDataValues = Object.values(waitingForApprovalScreenData);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
