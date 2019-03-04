import {
  View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import PrimaryTextInput from '../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import styles from './styles';
import EnhancedView from '../../../commons/components/EnhancedView';

class LoginScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  render() {
    return (
      <EnhancedView>
        <View style={styles.container}>
          <Text>Login Screen</Text>
          <PrimaryTextInput placeholder="Email" keyboardType="email-address" noAutoCapitalize />
          <PrimaryTextInput placeholder="Password" password />
        </View>
      </EnhancedView>
    );
  }
}

LoginScreen.defaultProps = {
  navigation: {},
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({}),
};


export default LoginScreen;
