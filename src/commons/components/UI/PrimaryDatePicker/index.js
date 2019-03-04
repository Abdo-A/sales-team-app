import { DatePicker, Icon } from 'native-base';
import { View, Text } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './styles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

class PrimaryDatePicker extends React.Component {
  state={}

  render() {
    const {
      onChange, style, name, error, errorText, title, placeholder, color,
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        {title && <Text style={{ color }}>{title}</Text>}
        <View style={[styles.pickerContainer, error ? { borderColor: colors.error } : { borderColor: color }]}>
          <View style={{ flex: 1 }}>
            <DatePicker
              onDateChange={value => onChange(name, value)}
              placeHolderText={placeholder}
              placeHolderTextStyle={{ color }}
              textStyle={{ color }}
            />
          </View>
          <Icon type="MaterialIcons" name="date-range" style={{ color }} />
        </View>
        {error && errorText && <Text style={{ color: colors.error }}>{errorText}</Text>}
      </View>
    );
  }
}


PrimaryDatePicker.defaultProps = {
  onChange: () => null,
  color: colors.primaryLight,
  placeholder: 'Choose a Date',
};

PrimaryDatePicker.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.shape({}),
  error: PropTypes.bool,
  errorText: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PrimaryDatePicker;
