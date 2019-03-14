// // Tab screens
// Superadmin Tab Screens
import DCsScreen from './SuperadminScreens/DCsScreen';
import UsersScreen from './SuperadminScreens/UsersScreen';

// // Other screens
import LoginScreen from './common/LoginScreen';
import RegisterScreen from './common/RegisterScreen';
import WaitForApproval from './common/WaitForApprovalScreen';

const screens = {
  LoginScreen,
  RegisterScreen,
  WaitForApproval,
  SalesRepScreens: {},
  DCownerScreens: {},
  SupervisorScreens: {},
  SuperadminScreens: { DCsScreen, UsersScreen },
};

export default screens;
