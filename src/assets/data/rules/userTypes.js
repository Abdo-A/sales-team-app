import { selectedLanguage } from '../translations';

const userTypes = {
  salesRep: {
    english: {
      label: 'Sales Representative',
      value: 'salesrep',
    },
    thai: {
      label: 'พนักงานขาย',
      value: 'salesrep',
    },
  },
  dcOwner: {
    english: {
      label: 'DC owner',
      value: 'dcowner',
    },
    thai: {
      label: 'เจ้าของศูนย์',
      value: 'dcowner',
    },
  },
  supervisor: {
    english: {
      label: 'Supervisor',
      value: 'supervisor',
    },
    thai: {
      label: 'ซุปเปอร์ไวเซอร์',
      value: 'supervisor',
    },
  },
  superadmin: {
    english: {
      label: 'Others',
      value: 'superadmin',
    },
    thai: {
      label: 'อื่นๆ',
      value: 'superadmin',
    },
  },
};

const appDataKeys = Object.keys(userTypes);
const appDataValues = Object.values(userTypes);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
