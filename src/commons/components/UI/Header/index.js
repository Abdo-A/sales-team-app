import { Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './styles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

const Header = ({
  color, children, style,
}) => (
  <View style={[styles.container, style, style && { alignItems: style.alignSelf, alignSelf: 'center' }]}><Text style={[styles.text, { color }]}>{children}</Text></View>
);

Header.defaultProps = {
  color: colors.primary,
};

Header.propTypes = {
  style: PropTypes.shape({}),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  children: PropTypes.string,
};

export default Header;
