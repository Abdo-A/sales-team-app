import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import { colors } from '../../../../assets/styles/base';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';

const SalesRepsRegisterInputs = ({ onChangeInput }) => {
  const text = 'Sales reps';
  return (
    <View>
      <PrimaryTextInput
        placeholder="Full Name"
        color={colors.primaryLight}
        noAutoCapitalize
        backgroundColor={colors.primary.fade(0.2)}
        hasBackgroundOnFocus
        colorOnFocus={colors.trueWhite}
        name="fullName"
        onChangeText={onChangeInput}
      />
      <PrimaryTextInput
        placeholder="Email"
        color={colors.primaryLight}
        noAutoCapitalize
        backgroundColor={colors.primary.fade(0.2)}
        hasBackgroundOnFocus
        colorOnFocus={colors.trueWhite}
        name="email"
        onChangeText={onChangeInput}
      />
      <PrimaryTextInput
        placeholder="Password"
        color={colors.primaryLight}
        noAutoCapitalize
        backgroundColor={colors.primary.fade(0.2)}
        hasBackgroundOnFocus
        colorOnFocus={colors.trueWhite}
        name="password"
        onChangeText={onChangeInput}
      />
      <PrimaryTextInput
        placeholder="Confirm Password"
        color={colors.primaryLight}
        noAutoCapitalize
        backgroundColor={colors.primary.fade(0.2)}
        hasBackgroundOnFocus
        colorOnFocus={colors.trueWhite}
        name="password2"
        onChangeText={onChangeInput}
      />
      <PrimaryButton backgroundColor={colors.primaryTransparent}>Register</PrimaryButton>
    </View>
  );
};

export default SalesRepsRegisterInputs;
