import { View } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import DCs from '../../../../assets/data/generalInfo/DCs';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import PrimaryMultiPicker from '../../../../commons/components/UI/PrimaryMultiPicker';

const DCownersRegisterInputs = ({
  onChangeInput, onSubmit, errors, registerLoading,
}) => (
  <View>
    <PrimaryMultiPicker
      options={Object.values(DCs)}
      title="Choose your DC"
      name="DCs"
      onChange={onChangeInput}
      searchPlaceholderText="Search DCs..."
      error={!!errors.DCs}
      errorText={errors.DCs}
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
    <PrimaryButton onPress={onSubmit} isLoading={registerLoading} backgroundColor={colors.primaryLight}>Register</PrimaryButton>
  </View>
);

DCownersRegisterInputs.defaultProps = {
  onChangeInput: () => null,
  onSubmit: () => null,
  errors: {},
};

DCownersRegisterInputs.propTypes = {
  onChangeInput: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.shape({}),
  registerLoading: PropTypes.bool,
};

export default DCownersRegisterInputs;
