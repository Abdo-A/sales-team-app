import { View } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import { passwordNoOfCharacters } from '../../../../assets/data/constants';
import DCs from '../../../../assets/data/generalInfo/DCs';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryPicker from '../../../../commons/components/UI/PrimaryPicker/PrimaryPicker';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';

const SalesRepsRegisterInputs = ({ onChangeInput,onSubmit }) => (
  <View>
    <PrimaryPicker
      options={Object.values(DCs)}
      name="dc"
      onChange={onChangeInput}
      title="Choose your DC"
      placeholder="For example: เพชรบูรณ์"
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
    <PrimaryButton onPress={onSubmit} backgroundColor={colors.primaryLight}>Register</PrimaryButton>
  </View>
);

SalesRepsRegisterInputs.defaultProps = {
  onChangeInput: () => null,
  onSubmit: () => null,
};

SalesRepsRegisterInputs.propTypes = {
  onChangeInput: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SalesRepsRegisterInputs;
