import { createMaterialTopTabNavigator } from 'react-navigation';
import { View } from 'react-native-ui-lib';
import React from 'react';

import {
  colors,
  fontSizes,
  fontTypes,
  bottomTabHeight,
} from '../assets/styles/base';
import PrimaryButton from '../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryPicker from '../commons/components/UI/PrimaryPicker/PrimaryPicker';
import PrimaryTextInput from '../commons/components/UI/PrimaryTextInput/PrimaryTextInput';


const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    AddService: () => (
      <View>
        <PrimaryPicker placeholder="Procrastication" title="dwvd" options={[{ label: 'wef', value: 'wdv' }]} />
      </View>
    ),
    MyServices: () => (
      <View>
        <PrimaryButton>Hello</PrimaryButton>
      </View>
    ),
    Account: () => (
      <View>
        <PrimaryTextInput placeholder="dvoin" />
      </View>
    ),
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
        borderTopColor: colors.secondary,
      },
      labelStyle: {
        fontSize: fontSizes.xs,
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

export default BottomTabNavigator;
