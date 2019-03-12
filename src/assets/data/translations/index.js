export const selectedLanguage = 'english';

const appData = {
  appTitle: {
    english: 'Sales System',
    thai: 'ยอดขาย',
  },
  login: {
    english: 'Login',
    thai: 'เข้าสู่ระบบ',
  },
  register: {
    english: 'Register',
    thai: 'ลงทะเบียน',
  },
};


const appDataKeys = Object.keys(appData);
const appDataValues = Object.values(appData);
export default appDataKeys.reduce((acc, item, i) => { acc[item] = appDataValues[i][selectedLanguage]; return acc; }, {});
