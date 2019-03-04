import PropTypes from 'prop-types';
import React from 'react';

import {
  View, Input, Item, Icon, Label, Text,
} from 'native-base';
import { colors } from '../../../../assets/styles/base';
import styles from './styles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

const PrimaryTextInput = (props) => {
  const {
    password, onChangeText, name, style, error, errorText, placeholder, keyboardType, noAutoCapitalize, color, backgroundColor,
  } = props;
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <Item error={error} floatingLabel style={{ width: '100%' }} er>
        <Label style={{ color: error ? colors.error : color }}>{placeholder}</Label>
        <Input keyboardType={keyboardType} autoCapitalize={noAutoCapitalize ? 'none' : 'sentences'} secureTextEntry={password} onChangeText={value => onChangeText(name, value)} />
        <Icon style={{ color: error ? colors.error : color }} name={error ? 'close-circle' : 'checkmark-circle'} />
      </Item>
      {error && errorText && <Text style={{ color: colors.error }}>{errorText}</Text>}
    </View>
  );
};

PrimaryTextInput.defaultProps = {
  password: false,
  onChangeText: () => null,
  name: 'input',
  error: false,
  placeholder: '',
  keyboardType: 'default',
  noAutoCapitalize: false,
  color: colors.primaryLight,
  backgroundColor: 'transparent',
};

PrimaryTextInput.propTypes = {
  style: PropTypes.shape({}),
  password: PropTypes.bool,
  onChangeText: PropTypes.func,
  name: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  noAutoCapitalize: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  backgroundColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
};


export default PrimaryTextInput;
