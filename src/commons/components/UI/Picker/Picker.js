import { Picker, View, Text } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './PickerStyles';

const PickerInput = (props) => {
  const {
    onChange, style, name, hasError, options, title,
  } = props;

  return (
    <View style={styles.pickerContainer}>
      <Picker
        {...props}
        title={title}
        style={[
          style,
          styles.picker,
          { borderColor: hasError ? colors.red : colors.primary },
        ]}
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
  );
};

PickerInput.defaultProps = {
  title: 'Make a choice',
  onChange: () => null,
};

PickerInput.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.shape({}),
  hasError: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

export default PickerInput;
