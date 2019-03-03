import { createMaterialTopTabNavigator } from 'react-navigation';
import React from 'react';

import {
  colors,
  fontSizes,
  fontTypes,
  bottomTabHeight
} from '../assets/styles/base';
import { View, Text } from 'react-native-ui-lib';

const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    AddService: () => (
      <View>
        <Text>Hi</Text>
      </View>
    ),
    MyServices: () => (
      <View>
        <Text>Hello</Text>
      </View>
    ),
    Account: () => (
      <View>
        <Text>Ola</Text>
      </View>
    )
  },
  {
    initialRouteName: 'AddService',
    order: ['AddService', 'MyServices', 'Account'],
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
        borderTopColor: colors.secondary
      },
      labelStyle: {
        fontSize: fontSizes.xs,
        fontFamily: fontTypes.mainBold,
        width: '100%'
      },
      iconStyle: {
        width: 35,
        height: 30
      },
      indicatorStyle: {
        backgroundColor: colors.secondary
      }
    }
  }
);

export default BottomTabNavigator;
