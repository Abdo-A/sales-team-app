import {
  View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import EnhancedView from '../../../commons/components/EnhancedView';
import PrimaryDatePicker from '../../../commons/components/UI/PrimaryDatePicker';
import PrimaryTextInput from '../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import styles from './styles';

class LoginScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  render() {
    return (
      <EnhancedView backgroundImageUrl="https://images.pexels.com/photos/876466/pexels-photo-876466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <View style={styles.container}>
          <Text>Login Screen</Text>
          <PrimaryTextInput
            placeholder="Email"
            keyboardType="email-address"
            color={colors.primaryLight}
            noAutoCapitalize
            backgroundColor={colors.primary.fade(0.2)}
            hasBackgroundOnFocus
            colorOnFocus={colors.trueWhite}
          />
          <PrimaryTextInput
            placeholder="Password"
            password
            color={colors.primaryLight}
            noAutoCapitalize
            backgroundColor={colors.primary.fade(0.2)}
            hasBackgroundOnFocus
            colorOnFocus={colors.trueWhite}
          />

          <PrimaryDatePicker title="swino" placeholder="wdfoino" />
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
