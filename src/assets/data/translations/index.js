export const selectedLanguage = 'english';

const appData = {
  appTitle: {
    english: 'Sales System',
    thai: 'ยอดขาย',
  },
  okIndication: {
    english: 'Ok',
    thai: 'ตกลง',
  },
  cancelIndication: {
    english: 'Cancel',
    thai: 'ยกเลิก',
  },
  saveIndication: {
    english: 'Save',
    thai: 'ไว้',
  },
};

const appDataKeys = Object.keys(appData);
const appDataValues = Object.values(appData);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
