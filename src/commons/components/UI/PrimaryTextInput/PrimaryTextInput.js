import PropTypes from 'prop-types';
import React from 'react';

import {
  View, Input, Item, Icon, Label, Text,
} from 'native-base';
import { colors, fontSizes } from '../../../../assets/styles/base';
import styles from './styles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

class PrimaryTextInput extends React.Component {
  state={
    text: '',
    focused: false,
  }

  componentDidMount() {
    const { autofocus } = this.props;
    this.setState({ focused: autofocus });
  }

  onChangeText=(value) => {
    let actualValue = value;

    const {
      onChangeText, name, maxCharacters, keyboardType,
    } = this.props;

    if (value.length > maxCharacters) return;

    if (keyboardType === 'numeric') {
      actualValue = value.replace(/[^0-9]/g, '');
    }

    onChangeText(name, actualValue);
    this.setState({ text: actualValue });
  }

  render() {
    const {
      password, style, info, error, errorText, placeholder, keyboardType, noAutoCapitalize, color, backgroundColor, autofocus, hasBackgroundOnFocus, colorOnFocus,
    } = this.props;

    const { text, focused } = this.state;

    const currentColor = error ? colors.error : colorOnFocus && focused ? colorOnFocus : color;
    const currentBackgroundColor = !hasBackgroundOnFocus ? backgroundColor : focused ? backgroundColor : 'transparent';

    return (
      <View style={[styles.container, { backgroundColor: currentBackgroundColor }, style]}>
        <Item error={error} floatingLabel style={{ width: '100%' }} er>
          <Label style={{ color: currentColor }}>{placeholder}</Label>
          <Input
            autoFocus={autofocus}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            style={{ color: currentColor, fontWeight: 'bold' }}
            keyboardType={keyboardType}
            autoCapitalize={noAutoCapitalize ? 'none' : 'sentences'}
            secureTextEntry={password}
            onChangeText={this.onChangeText}
            value={text}
          />

          <Icon style={{ color: currentColor }} name={error ? 'close-circle' : 'checkmark-circle'} />
        </Item>
        {error && errorText && <Text style={[{ color: colors.error }, styles.errorText]}>{errorText}</Text>}
        {info && !(error && errorText) && <Text style={[{ color: currentColor}, styles.infoText]}>{info}</Text>}
      </View>
    );
  }
}

PrimaryTextInput.defaultProps = {
  password: false,
  onChangeText: () => null,
  name: 'input',
  error: false,
  placeholder: '',
  info: null,
  maxCharacters: 300,
  keyboardType: 'default',
  noAutoCapitalize: false,
  color: colors.primaryLight,
  backgroundColor: 'transparent',
  hasBackgroundOnFocus: false,
  autofocus: false,
};

PrimaryTextInput.propTypes = {
  style: PropTypes.shape({}),
  password: PropTypes.bool,
  onChangeText: PropTypes.func,
  name: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  info: PropTypes.string,
  maxCharacters: PropTypes.number,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  noAutoCapitalize: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  colorOnFocus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  backgroundColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  hasBackgroundOnFocus: PropTypes.bool,
  autofocus: PropTypes.bool,
};


export default PrimaryTextInput;
