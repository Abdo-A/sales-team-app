import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './styles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center


const Guide = ({
  text, color, onPress, style,
}) => (
  <View style={[styles.container, style, style && style.alignSelf && { alignItems: style.alignSelf, alignSelf: 'center' }]}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={[styles.text, { color }]}>
        {text}

      </Text>
    </TouchableWithoutFeedback>
  </View>
);

Guide.defaultProps = {
  onPress: () => null,
  color: colors.primaryLight,
};

Guide.propTypes = {
  style: PropTypes.shape({}),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  text: PropTypes.string,
  onPress: PropTypes.func,
};


export default Guide;
