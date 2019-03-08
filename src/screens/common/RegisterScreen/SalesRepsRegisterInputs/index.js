import { View } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';

const SalesRepsRegisterInputs = ({ onChangeInput }) => (
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
    <PrimaryButton backgroundColor={colors.primaryLight}>Register</PrimaryButton>
  </View>
);

SalesRepsRegisterInputs.defaultProps = {
  onChangeInput: () => null,
};

SalesRepsRegisterInputs.propTypes = {
  onChangeInput: PropTypes.func,
};

export default SalesRepsRegisterInputs;
