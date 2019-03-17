import { selectedLanguage } from '.';

const superadminRelatedData = {
  actions: {
    english: 'Actions',
    thai: 'การปฏิบัติ',
  },
  resetDCsIndication: {
    english: 'Reset all DCs sales to 0',
    thai: 'กลับสู่ค่าเริ่มต้น',
  },
  resetDCsWarning: {
    english:
      'All the sales for all the DCs will be 0 again. This means this is the beginning of the month.',
    thai: 'เริ่มต้นเดือนใหม่',
  },
};

const appDataKeys = Object.keys(superadminRelatedData);
const appDataValues = Object.values(superadminRelatedData);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
