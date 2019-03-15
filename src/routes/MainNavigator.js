import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';

import { colors } from '../assets/styles/base';
import { logoutUser } from '../store/actions/authActions';
import bottomNavigators from './BottomNavigators';
import screens from '../screens';
import store from '../store/createStore';
import PrimaryButton from '../commons/components/UI/PrimaryButton/PrimaryButton';

const RootNavigator = createStackNavigator(
  {
    SalesRepTab: bottomNavigators.SalesRepBottomTabNavigator,
    DCownerTab: bottomNavigators.DCownerBottomTabNavigator,
    SupervisorTab: bottomNavigators.SupervisorBottomTabNavigator,
    SuperadminTab: bottomNavigators.SuperadminBottomTabNavigator,

    Register: screens.RegisterScreen,
    Login: screens.LoginScreen,
    WaitForApproval: screens.WaitForApproval,
  },
  {
    initialRouteName: 'Login',

    // We only need to configure the header options only for the 'tab' screens here
    // But for other screens, we do that in their own components

    defaultNavigationOptions: ({ navigation }) => {
      // --first, we check which screen it is:
      const screen = navigation.state.routeName;

      // values we will modify then return:
      let headerTitle = '';
      let headerRight = '';
      const headerLeft = '';
      const headerStyle = {
        backgroundColor: colors.primary,
      };
      const headerTitleStyle = {
        color: colors.white,
      };
      const tabBarVisible = true;
      // and so on...

      // For each Tab:
      if (screen === 'SalesRepTab') {
        const { routes, index } = navigation.state;
        const tabScreen = routes[index].routeName;

        if (tabScreen === 'Sales2') {
          headerRight = (
            <PrimaryButton
              backgroundColor={colors.primaryLight}
              onPress={() => {
                store.dispatch(logoutUser());
                navigation.replace('Login');
              }}
            >
              {'Logout'}
            </PrimaryButton>
          );
        }

        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle,
          // and so on..
        };
      }

      if (screen === 'DCownerTab') {
        const { routes, index } = navigation.state;
        const tabScreen = routes[index].routeName;

        if (tabScreen === 'DCownerDCs') {
          headerTitle = 'DCs';
        }

        if (tabScreen === 'DCownerMyTeam') {
          headerTitle = 'My Team';
          headerRight = (
            <PrimaryButton
              backgroundColor={colors.primaryLight}
              onPress={() => {
                store.dispatch(logoutUser());
                navigation.replace('Login');
              }}
            >
              {'Logout'}
            </PrimaryButton>
          );
        }

        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle,
          // and so on..
        };
      }

      if (screen === 'SupervisorTab') {
        const { routes, index } = navigation.state;
        const tabScreen = routes[index].routeName;

        if (tabScreen === 'SupervisorDCsScreen') {
          headerTitle = 'DCs';
        }

        if (tabScreen === 'SupervisorUsersScreen') {
          headerTitle = 'Users';
          headerRight = (
            <PrimaryButton
              backgroundColor={colors.primaryLight}
              onPress={() => {
                store.dispatch(logoutUser());
                navigation.replace('Login');
              }}
            >
              {'Logout'}
            </PrimaryButton>
          );
        }
        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle,
          // and so on..
        };
      }

      if (screen === 'SuperadminTab') {
        const { routes, index } = navigation.state;
        const tabScreen = routes[index].routeName;

        if (tabScreen === 'SuperadminDCs') {
          headerTitle = 'DCs';
        }

        if (tabScreen === 'SuperadminUsers') {
          headerTitle = 'Users';
        }

        if (tabScreen === 'SuperadminActions') {
          headerTitle = 'Actions';
          headerRight = (
            <PrimaryButton
              backgroundColor={colors.primaryLight}
              onPress={() => {
                store.dispatch(logoutUser());
                navigation.replace('Login');
              }}
            >
              {'Logout'}
            </PrimaryButton>
          );
        }

        // Return these in case of tab screens
        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle,
          // and so on..
        };
      }

      // Return these for other screens (could just return {})
      return {
        headerStyle,
        headerTitleStyle,
      };
    },
  },
);

export default createAppContainer(RootNavigator);
