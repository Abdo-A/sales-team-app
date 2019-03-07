import { Accordion } from 'native-base';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

const EmbeddedInfo = ({
  title, content, style,
}) => (
  <View style={[styles.container, style]}>
    <Accordion
      dataArray={[
        { title, content },
      ]}
      animation
    />
  </View>
);

EmbeddedInfo.defaultProps = {
  style: {},
};

EmbeddedInfo.propTypes = {
  style: PropTypes.shape({}),
  title: PropTypes.string,
  content: PropTypes.string,
};

export default EmbeddedInfo;
