import { View } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import registrationScreenData from '../../../../assets/data/translations/registrationScreenData';

const SupervisorsRegisterInputs = ({
  onChangeInput, onSubmit, errors, registerLoading,
}) => (
  <View>
    <PrimaryTextInput
      placeholder={registrationScreenData.firstName}
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
      placeholder={registrationScreenData.surname}
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
    <PrimaryButton onPress={onSubmit} isLoading={registerLoading} backgroundColor={colors.primaryLight}>{registrationScreenData.register}</PrimaryButton>
  </View>
);

SupervisorsRegisterInputs.defaultProps = {
  onChangeInput: () => null,
  onSubmit: () => null,
  errors: {},
};

SupervisorsRegisterInputs.propTypes = {
  onChangeInput: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.shape({}),
  registerLoading: PropTypes.bool,
};

export default SupervisorsRegisterInputs;
