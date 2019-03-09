import { View } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import { passwordNoOfCharacters } from '../../../../assets/data/constants';
import DCs from '../../../../assets/data/generalInfo/DCs';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryPicker from '../../../../commons/components/UI/PrimaryPicker/PrimaryPicker';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';

const DCownersRegisterInputs = ({ onChangeInput,onSubmit,errors ,registerLoading }) => (
  <View>
    <PrimaryPicker
      options={Object.values(DCs)}
      name="dc"
      onChange={onChangeInput}
      title="Choose your DC"
      placeholder="For example: เพชรบูรณ์"
      error={!!errors.dc}
      errorText={errors.dc}
    />
    <PrimaryTextInput
      placeholder="First Name"
      color={colors.primaryLight}
      noAutoCapitalize
      backgroundColor={colors.primary.fade(0.2)}
      hasBackgroundOnFocus
      colorOnFocus={colors.trueWhite}
      name="firstName"
      onChangeText={onChangeInput}
      error={!!errors.firstName}
      errorText={errors.firstName}
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
      error={!!errors.surname}
      errorText={errors.surname}
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
      error={!!errors.password}
      errorText={errors.password}
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
      error={!!errors.password2}
      errorText={errors.password2}
    />
    <PrimaryButton onPress={onSubmit} isLoading={registerLoading} backgroundColor={colors.primaryLight}>Register</PrimaryButton>
  </View>
);

DCownersRegisterInputs.defaultProps = {
  onChangeInput: () => null,
  onSubmit: () => null,
};

DCownersRegisterInputs.propTypes = {
  onChangeInput: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default DCownersRegisterInputs;
