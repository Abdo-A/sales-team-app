import { Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './styles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

const Subheader = ({
  color, children, style,
}) => (
  <View style={[styles.container, style, style && { alignItems: style.alignSelf, alignSelf: 'center' }]}><Text style={[styles.text, { color }]}>{children}</Text></View>
);

Subheader.defaultProps = {
  color: colors.primary,
};

Subheader.propTypes = {
  style: PropTypes.shape({}),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  children: PropTypes.string,
};

export default Subheader;
