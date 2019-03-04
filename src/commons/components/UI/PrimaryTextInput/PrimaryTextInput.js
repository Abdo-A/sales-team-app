import PropTypes from 'prop-types';
import React from 'react';

import {
  View, Input, Item, Icon, Label, Text,
} from 'native-base';
import { colors } from '../../../../assets/styles/base';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

const PrimaryTextInput = (props) => {
  const {
    password, onChangeText, name, style, error, errorText, placeholder, keyboardType, noAutoCapitalize,
  } = props;
  return (
    <View style={[{ width: '80%', margin: 10, alignSelf: 'center' }, style]}>
      <Item success error={error} floatingLabel style={{ width: '100%' }} er>
        <Label>{placeholder}</Label>
        <Input keyboardType={keyboardType} autoCapitalize={noAutoCapitalize ? 'none' : 'sentences'} secureTextEntry={password} onChangeText={value => onChangeText(name, value)} />
        <Icon name={error ? 'close-circle' : 'checkmark-circle'} />
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
};


export default PrimaryTextInput;
