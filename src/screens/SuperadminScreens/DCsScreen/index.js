import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

export default class DCsScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'DCs',
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>DCs</Text>
      </View>
    );
  }
}

DCsScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
