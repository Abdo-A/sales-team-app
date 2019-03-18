const { selectedLanguage } = require('.');

const notificationsData = {
  forUserApprovalTitle: {
    english: 'registered',
    thai: 'ลงทะเบียน',
  },
  forUserApprovalBody: {
    english: 'A new user has registered',
    thai: 'ผู้ใช้ใหม่ลงทะเบียนเรียบร้อย',
  },
  from: {
    english: 'from',
    thai: 'จาก',
  },
  onDCUpdateTitle: {
    english: 'DC Update',
    thai: 'ดีซีอัพเดท',
  },
  onDCUpdateBody: {
    english: 'The rank of your DC',
    thai: 'อันดับดีซีของคุณ',
  },
  onDailyUpdateTitle: {
    english: 'sales are made this month',
    thai: 'ยอดขายเดือนนี้',
  },
  onDailyUpdateBody: {
    english: 'Daily Update',
    thai: 'อัพเดทรายวัน',
  },
};

const appDataKeys = Object.keys(notificationsData);
const appDataValues = Object.values(notificationsData);
module.exports = appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
