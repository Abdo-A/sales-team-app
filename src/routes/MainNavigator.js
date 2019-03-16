import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';
import moment from 'moment';
import React from 'react';

import { Badge } from 'native-base';
import { colors, fontTypes } from '../assets/styles/base';
import { logoutUser } from '../store/actions/authActions';
import bottomNavigators from './BottomNavigators';
import PrimaryButton from '../commons/components/UI/PrimaryButton/PrimaryButton';
import screens from '../screens';
import store from '../store/createStore';
import DCsListData from '../assets/data/translations/DCsListData';
import loginScreenData from '../assets/data/translations/loginScreenData';
import usersListData from '../assets/data/translations/usersListData';
import superadminRelatedData from '../assets/data/translations/superadminRelatedData';

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
              {loginScreenData.logout}
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
          headerTitle = DCsListData.DCs;
          headerRight = (
            <Badge
              primary
              style={{ alignSelf: 'center', justifyContent: 'center' }}
            >
              <Text style={{ color: colors.white, fontFamily: fontTypes.main }}>
                {DCsListData.monthIndication}
                {' '}
                {moment()
                  .add(1, 'months')
                  .date(0)
                  .format('DD / MM / YYYY')}
              </Text>
            </Badge>
          );
        }

        if (tabScreen === 'DCownerMyTeam') {
          headerTitle = usersListData.myTeam;
          headerRight = (
            <PrimaryButton
              backgroundColor={colors.primaryLight}
              onPress={() => {
                store.dispatch(logoutUser());
                navigation.replace('Login');
              }}
            >
              {loginScreenData.logout}
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
          headerTitle = DCsListData.DCs;
          headerRight = (
            <Badge
              primary
              style={{ alignSelf: 'center', justifyContent: 'center' }}
            >
              <Text style={{ color: colors.white, fontFamily: fontTypes.main }}>
                {'This months ends on '}
                {moment()
                  .add(1, 'months')
                  .date(0)
                  .format('DD / MM / YYYY')}
              </Text>
            </Badge>
          );
        }

        if (tabScreen === 'SupervisorUsersScreen') {
          headerTitle = usersListData.users;
          headerRight = (
            <PrimaryButton
              backgroundColor={colors.primaryLight}
              onPress={() => {
                store.dispatch(logoutUser());
                navigation.replace('Login');
              }}
            >
              {loginScreenData.logout}
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
          headerTitle = DCsListData.DCs;
          headerRight = (
            <Badge
              primary
              style={{ alignSelf: 'center', justifyContent: 'center' }}
            >
              <Text style={{ color: colors.white, fontFamily: fontTypes.main }}>
                {'This months ends on '}
                {moment()
                  .add(1, 'months')
                  .date(0)
                  .format('DD / MM / YYYY')}
              </Text>
            </Badge>
          );
        }

        if (tabScreen === 'SuperadminUsers') {
          headerTitle = usersListData.users;
        }

        if (tabScreen === 'SuperadminActions') {
          headerTitle = superadminRelatedData.actions;
          headerRight = (
            <PrimaryButton
              backgroundColor={colors.primaryLight}
              onPress={() => {
                store.dispatch(logoutUser());
                navigation.replace('Login');
              }}
            >
              {loginScreenData.logout}
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
