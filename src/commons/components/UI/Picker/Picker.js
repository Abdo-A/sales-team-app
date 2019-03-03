import { Picker, View, Text } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './PickerStyles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center


const PickerInput = (props) => {
  const {
    onChange, style, name, error, errorText, options, title,
  } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.pickerContainer, error ? { borderColor: colors.error } : {}]}>
        <Picker
          {...props}
          title={title}
          onChange={c => onChange(name, c)}
          hideUnderline
          enableErrors
          renderPicker={() => (
            <View row center style={{ width: '100%' }}>
              <Text style={styles.pickerText}>
                {'hi'}
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
};

PickerInput.defaultProps = {
  title: 'Make a choice',
  onChange: () => null,
};

PickerInput.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.shape({}),
  error: PropTypes.bool,
  errorText: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

export default PickerInput;
