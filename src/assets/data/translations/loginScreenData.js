import { selectedLanguage } from '.';


const loginScreenData = {
  appTitle: {
    english: 'Sales System',
    thai: 'ยอดขาย',
  },
  login: {
    english: 'Login',
    thai: 'เข้าสู่ระบบ',
  },
  firstName: {
    english: 'First Name',
    thai: '',
  },
  surnmame: {
    english: 'Surname',
    thai: '',
  },
  password: {
    english: 'Password',
    thai: '',
  },
  noAccountStatement: {
    english: 'Still have no account? Register here',
    thai: '',
  },
};


const appDataKeys = Object.keys(loginScreenData);
const appDataValues = Object.values(loginScreenData);
export default appDataKeys.reduce((acc, item, i) => { acc[item] = appDataValues[i][selectedLanguage]; return acc; }, {});
