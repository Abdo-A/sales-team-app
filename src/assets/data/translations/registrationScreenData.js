import { selectedLanguage } from '.';


const registrationScreenData = {
  register: {
    english: 'Register',
    thai: 'ลงทะเบียน',
  },
  positionStatement: {
    english: 'Choose your position',
    thai: 'เลือกตำแหน่งของคุณ',
  },
  firstName: {
    english: 'First Name',
    thai: 'ชื่อ',
  },
  surname: {
    english: 'Surname',
    thai: 'นามสกุล',
  },
  positionPlaceholder: {
    english: 'For example: Sales Rep',
    thai: 'เช่น พนักงานขาย',
  },
  DCstatement: {
    english: 'Choose your DC',
    thai: 'เลือกชื่อศูนย์',
  },
  DCexample: {
    english: 'For example: เพชรบูรณ์',
    thai: 'เช่น ศูนย์เพชรบูรณ์',
  },
  DCsearch: {
    english: 'Search DCs...',
    thai: 'ค้นหาศูนย์',
  },
  registrationSuccessHint: {
    english: 'Registration Successful, you can login',
    thai: 'ลงทะเบียนสำเร็จ สามารถเข้าสู่ระบบได้',
  },
  yourPasswordIs: {
    english: 'Your password is',
    thai: 'รหัสผ่านของคุณ',
  },
  youCanLogin: {
    english: 'You can now login at any time',
    thai: 'คุณสามารถเข้าระบบได้ทุกเวลา',
  },
  thankYou: {
    english: 'Thank you',
    thai: 'ขอบคุณค่ะ',
  },
};


const appDataKeys = Object.keys(registrationScreenData);
const appDataValues = Object.values(registrationScreenData);
export default appDataKeys.reduce((acc, item, i) => { acc[item] = appDataValues[i][selectedLanguage]; return acc; }, {});
