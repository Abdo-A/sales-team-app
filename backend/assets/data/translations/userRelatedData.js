const { selectedLanguage } = require('.');

const userRelatedData = {
  noFirstNameError: {
    english: 'First Name is required',
    thai: 'กรุณาใส่ชื่อ',
  },
  noSurnameError: {
    english: 'Surname is required',
    thai: 'กรุณาใส่นามสกุล',
  },
  noUserTypeError: {
    english: 'User type is required',
    thai: 'กรุณาเลือกประเภทผู้ใช้',
  },
  noDCError: {
    english: 'DC name is required',
    thai: 'ชื่อศูนย์กระจายสินค้าที่คุณประจำอยู่',
  },
  noPasswordError: {
    english: 'Password is required',
    thai: 'กรุณาใส่รหัสผ่าน',
  },
  wrongLengthPasswordError: {
    english: 'Password must be a 4 digits number',
    thai: 'กรุณาใส่รหัสผ่านเป็นตัวเลข 4 ตัว',
  },
  existingUserError: {
    english: 'This user already exists',
    thai: 'ชื่อผู้ใช้นี้มีในระบบอยู่แล้ว',
  },
  incorrectInfoError: {
    english: 'Incorrect info',
    thai: 'ข้อมูลไม่ถูกต้อง',
  },
  incorrectPasswordError: {
    english: 'Incorrect password',
    thai: 'รหัสผ่านไม่ถูกต้อง',
  },
};

const appDataKeys = Object.keys(userRelatedData);
const appDataValues = Object.values(userRelatedData);
module.exports = appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
