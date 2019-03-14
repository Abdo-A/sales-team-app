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
    thai: 'ชื่อ',
  },
  surname: {
    english: 'Surname',
    thai: 'นามสกุล',
  },
  password: {
    english: 'Password',
    thai: 'รหัสผ่าน',
  },
  noAccountStatement: {
    english: 'Still have no account? Register here',
    thai: 'ถ้ายังไม่มีบัญชี กดตรงนี้',
  },
};


const appDataKeys = Object.keys(loginScreenData);
const appDataValues = Object.values(loginScreenData);
export default appDataKeys.reduce((acc, item, i) => { acc[item] = appDataValues[i][selectedLanguage]; return acc; }, {});
