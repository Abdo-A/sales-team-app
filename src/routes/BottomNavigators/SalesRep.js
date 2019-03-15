import { createMaterialTopTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import React from 'react';

import {
  colors,
  fontSizes,
  fontTypes,
  bottomTabHeight,
} from '../../assets/styles/base';

const SalesRepBottomTabNavigator = createMaterialTopTabNavigator(
  {
    Sales1: () => (
      <View>
        <Text>Not built yet</Text>
      </View>
    ),
    Sales2: () => (
      <View>
        <Text>Not built yet</Text>
      </View>
    ),
  },
  {
    initialRouteName: 'Sales1',
    order: ['Sales1', 'Sales2'],
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

export default SalesRepBottomTabNavigator;
