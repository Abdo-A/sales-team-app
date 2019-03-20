import { selectedLanguage } from '.';

const usersListData = {
  users: {
    english: 'Users',
    thai: 'ผู้ใช้',
  },
  myTeam: {
    english: 'My Team',
    thai: 'ทีมของฉัน',
  },
  toBeApprovedUsersHeader: {
    english: 'Approvals',
    thai: 'การอนุมัติ',
  },
  dcOwners: {
    english: 'DC owners',
    thai: 'เจ้าของศูนย์',
  },
  salesReps: {
    english: 'Sales Reps',
    thai: 'พนักงานขาย',
  },
  supervisors: {
    english: 'Supervisors',
    thai: 'หัวหน้าเขตการขาย',
  },
  superadmins: {
    english: 'Superadmins',
    thai: 'ผู้ดูแลระบบ',
  },
  approve: {
    english: 'Approve',
    thai: 'อนุมัติ',
  },
  approveWarning: {
    english: 'You will approve this user',
    thai: 'คุณจะอนุมัติรับผู้ใช้นี้เข้าสู่ระบบ',
  },
  noToBeApprovedUsersIndication: {
    english: 'No New Users To Be Approved',
    thai: 'ไม่มีผู้ใช้ใหม่ให้คุณอนุมัติ',
  },
  noUsersIndication: {
    english: 'No Users Yet',
    thai: 'ไม่มีผู้ใช้',
  },
};

const appDataKeys = Object.keys(usersListData);
const appDataValues = Object.values(usersListData);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
