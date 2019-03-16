import { selectedLanguage } from '.';

const usersListData = {
  users: {
    english: 'Users',
    thai: '',
  },
  myTeam: {
    english: 'My Team',
    thai: '',
  },
  toBeApprovedUsersHeader: {
    english: 'Approvals',
    thai: 'การยินยอม',
  },
  dcOwners: {
    english: 'DC owners',
    thai: '',
  },
  salesReps: {
    english: 'Sales Reps',
    thai: '',
  },
  supervisors: {
    english: 'Supervisors',
    thai: '',
  },
  superadmins: {
    english: 'Superadmins',
    thai: 'ผู้ดูแลระบบ',
  },
  approve: {
    english: 'Approve',
    thai: 'อนุญาต',
  },
  approveWarning: {
    english: 'You will approve this user',
    thai: '',
  },
  noToBeApprovedUsersIndication: {
    english: 'No New Users To Approve',
    thai: '',
  },
  noUsersIndication: {
    english: '',
    thai: '',
  },
};

const appDataKeys = Object.keys(usersListData);
const appDataValues = Object.values(usersListData);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
