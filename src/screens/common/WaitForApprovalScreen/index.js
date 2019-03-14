import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import waitingForApprovalScreenData from '../../../assets/data/translations/waitingForApprovalScreenData';

export default class WaitForApproval extends Component {
  static navigationOptions = () => ({
    headerTitle: '',
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{waitingForApprovalScreenData.title}</Text>
        <Text style={styles.content}>
          {waitingForApprovalScreenData.body}
          {' 😄'}
        </Text>
        <Text style={styles.signature}>{waitingForApprovalScreenData.footer}</Text>
      </View>
    );
  }
}

WaitForApproval.propTypes = {
  navigation: PropTypes.shape({}),
};
