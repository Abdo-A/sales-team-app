import { View, Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import Loading from '../Loading/Loading';
import styles from './PrimaryButtonStyle';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

const PrimaryButton = ({
  backgroundColor, onPress, children, big, isLoading, style,
}) => (
  <View>
    {isLoading ? (
      <Loading />
    ) : (
      <Button style={[styles.button, style, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.buttonText, big && styles.textBig]}>
          {children}
        </Text>
      </Button>
    )}
  </View>
);

PrimaryButton.defaultProps = {
  backgroundColor: colors.secondary,
};

PrimaryButton.propTypes = {
  style: PropTypes.shape({}),
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  onPress: PropTypes.func,
  children: PropTypes.string,
  big: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default PrimaryButton;
