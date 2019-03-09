import { View } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import { passwordNoOfCharacters } from '../../../../assets/data/constants';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';

const SupervisorsRegisterInputs = ({ onChangeInput }) => (
  <View>
    <PrimaryTextInput
      placeholder="First Name"
      color={colors.primaryLight}
      noAutoCapitalize
      backgroundColor={colors.primary.fade(0.2)}
      hasBackgroundOnFocus
      colorOnFocus={colors.trueWhite}
      name="firstName"
      onChangeText={onChangeInput}
    />
    <PrimaryTextInput
      placeholder="Surname"
      color={colors.primaryLight}
      noAutoCapitalize
      backgroundColor={colors.primary.fade(0.2)}
      hasBackgroundOnFocus
      colorOnFocus={colors.trueWhite}
      name="surname"
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
      info={`Password must be ${passwordNoOfCharacters} numbers`}
      keyboardType="numeric"
      maxCharacters={passwordNoOfCharacters}
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
      keyboardType="numeric"
      maxCharacters={passwordNoOfCharacters}
    />
    <PrimaryButton backgroundColor={colors.primaryLight}>Register</PrimaryButton>
  </View>
);

SupervisorsRegisterInputs.defaultProps = {
  onChangeInput: () => null,
};

SupervisorsRegisterInputs.propTypes = {
  onChangeInput: PropTypes.func,
};

export default SupervisorsRegisterInputs;
