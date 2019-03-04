import { Picker, View, Text } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './PrimaryPickerStyles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center


class PrimaryPicker extends React.Component {
  state={
    choice: {},
  }

  render() {
    const {
      onChange, style, name, error, errorText, options, title, placeholder,
    } = this.props;

    const { choice } = this.state;
    return (
      <View style={[styles.container, style]}>
        {title && <Text style={{ color: colors.primaryLight }}>{title}</Text>}
        <View style={[styles.pickerContainer, error ? { borderColor: colors.error } : {}]}>
          <Picker
            {...this.props}
            onChange={(c) => {
              this.setState({ choice: c });
              onChange(name, c);
            }}
            hideUnderline
            enableErrors
            renderPicker={() => (
              <View row center style={{ width: '100%' }}>
                <Text style={styles.pickerText}>
                  {choice.label || placeholder}
                </Text>
              </View>
            )}
          >
            {options.map(option => (
              <Picker.Item key={option} value={option} disabled={option.disabled} />
            ))}
          </Picker>
        </View>
        {error && errorText && <Text style={{ color: colors.error }}>{errorText}</Text>}
      </View>
    );
  }
}


PrimaryPicker.defaultProps = {
  onChange: () => null,
  placeholder: 'Make a choice',
  value: {},
};

PrimaryPicker.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.shape({}),
  error: PropTypes.bool,
  errorText: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.shape({}),
};

export default PrimaryPicker;
