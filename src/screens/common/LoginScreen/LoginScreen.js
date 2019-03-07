import {
  View, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import EnhancedView from '../../../commons/components/EnhancedView';
import PrimaryTextInput from '../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import styles from './styles';
import Header from '../../../commons/components/UI/Header';
import Subheader from '../../../commons/components/UI/Subheader';
import Guide from '../../../commons/components/UI/Guide';

class LoginScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  render() {
    return (
      <EnhancedView backgroundImageBlueRadius={1} backgroundImageUrl="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80">
        <View style={styles.container}>
          <View>
            <Image
              style={{ width: 300, height: 120 }}
              source={{ uri: 'http://www.watersystems.co.th/wp-content/uploads/2015/05/logo-betagen-c.gif' }}
            />
            <Header>Sales System</Header>
          </View>
          <View>
            <Subheader hasUnderline>Login</Subheader>
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
          </View>
          <Guide text="Still have no account? Register here" color={colors.primary} />

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
