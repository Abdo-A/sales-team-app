import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';

import { colors } from '../assets/styles/base';
import BottomTabNavigator from './BottomNavigator';

const RootNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
  },
  {
    initialRouteName: 'Tab',

    // We only need to configure the header options only for the 'tab' screens here
    // But for other screens, we do that in their own components

    defaultNavigationOptions: ({ navigation }) => {
      // --first, we check which screen it is:
      const screen = navigation.state.routeName;

      // values we will modify then return:
      let headerTitle = '';
      const headerRight = '';
      const headerLeft = '';
      let headerStyle = {
        backgroundColor: colors.primaryLight,
      };
      const headerTitleStyle = {
        color: colors.white,
      };
      const tabBarVisible = true;
      // and so on...

      // For each screen:
      if (screen === 'Tab') {
        const { routes, index } = navigation.state;
        const tabScreen = routes[index].routeName;

        // Home tab screen
        if (tabScreen === 'Home') {
          headerTitle = 'Home';
          headerStyle = {
            backgroundColor: colors.primary,
          };
        }

        // Settings tab screen
        if (tabScreen === 'Settings') {
          headerTitle = 'Settings';
          headerStyle = {
            backgroundColor: colors.primary,
          };
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
