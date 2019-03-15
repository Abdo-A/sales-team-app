// // Tab screens
// Superadmin Tab Screens
import SuperadminDCsScreen from './SuperadminScreens/DCsScreen';
import SuperadminUsersScreen from './SuperadminScreens/UsersScreen';
import SuperadminActionsScreen from './SuperadminScreens/ActionsScreen';

// DCowner Tab Screens
import DCownerDCsScreen from './DCownerScreens/DCsScreen';
import DCownerMyTeamScreen from './DCownerScreens/MyTeamScreen';

// Supervisor Tab Screens
import SupervisorDCsScreen from './SupervisorScreens/DCsScreen';
import SupervisorUsersScreen from './SupervisorScreens/UsersScreen';

// // Other screens
import LoginScreen from './common/LoginScreen';
import RegisterScreen from './common/RegisterScreen';
import WaitForApproval from './common/WaitForApprovalScreen';

const screens = {
  LoginScreen,
  RegisterScreen,
  WaitForApproval,
  SalesRepScreens: {},
  DCownerScreens: { DCownerDCsScreen, DCownerMyTeamScreen },
  SupervisorScreens: { SupervisorDCsScreen, SupervisorUsersScreen },
  SuperadminScreens: {
    SuperadminDCsScreen,
    SuperadminUsersScreen,
    SuperadminActionsScreen,
  },
};

export default screens;
