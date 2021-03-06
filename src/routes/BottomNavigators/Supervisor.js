import { createMaterialTopTabNavigator } from 'react-navigation';

import {
  colors,
  fontSizes,
  fontTypes,
  bottomTabHeight,
} from '../../assets/styles/base';
import screens from '../../screens';

const SupervisorBottomTabNavigator = createMaterialTopTabNavigator(
  {
    SupervisorDCsScreen: screens.SupervisorScreens.SupervisorDCsScreen,
    SupervisorUsersScreen: screens.SupervisorScreens.SupervisorUsersScreen,
  },
  {
    initialRouteName: 'SupervisorDCsScreen',
    order: ['SupervisorDCsScreen', 'SupervisorUsersScreen'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.white,
      activeBackgroundColor: colors.primary.darken(0.2),
      style: {
        backgroundColor: colors.primary,
        height: bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: colors.secondary,
      },
      labelStyle: {
        fontSize: fontSizes.sm,
        fontFamily: fontTypes.mainBold,
        width: '100%',
      },
      iconStyle: {
        width: 35,
        height: 30,
      },
      indicatorStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
);

export default SupervisorBottomTabNavigator;
