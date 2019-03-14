import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

export default class UsersScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Users',
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Users</Text>
      </View>
    );
  }
}

UsersScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
