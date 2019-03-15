import {
  Card, CardItem, Text, View,
} from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

const Notice = ({
  title, children, style, titleStyle,
}) => (
  <View style={[styles.container, style]}>
    <Card>
      <CardItem style={styles.textContainer}>
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {children}
      </CardItem>
    </Card>
  </View>
);

Notice.defaultProps = {
  style: {},
};

Notice.propTypes = {
  style: PropTypes.shape({}),
  titleStyle: PropTypes.shape({}),
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Notice;
