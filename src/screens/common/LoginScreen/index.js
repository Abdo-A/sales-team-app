import {
  View, Image,Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import { passwordNoOfCharacters } from '../../../assets/data/constants';
import * as AuthActions from '../../../store/actions/authActions';
import * as ErrorActions from '../../../store/actions/errorActions';
import EnhancedView from '../../../commons/components/EnhancedView';
import Guide from '../../../commons/components/UI/Guide';
import Header from '../../../commons/components/UI/Header';
import PrimaryButton from '../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import QuickHint from '../../../commons/components/UI/QuickHint/QuickHint';
import styles from './styles';

class LoginScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state={
    firstName:'',
    surname:'',
    password:''
  };

  onChangeInput=(name, value) => {
    const {clearOneError}=this.props;
    clearOneError(name);

    this.setState({ [name]: value });
  }

  onSubmit=()=>{
    const {loginUser,navigation}=this.props;

    const callback=()=>{
      QuickHint('Login successful');
      navigation.replace('Tab');
    }

    loginUser(this.state,callback);

  }

  onPressRegister=() => {
    const { navigation } = this.props;

    navigation.navigate('Register');
  }

  render() {
    const {errors,loginLoading}=this.props;

    return (
      <EnhancedView style={styles.container} backgroundImageBlueRadius={1} backgroundImageUrl="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80">
        <View>
          <Image
            style={styles.logo}
            source={{ uri: 'http://www.watersystems.co.th/wp-content/uploads/2015/05/logo-betagen-c.gif' }}
          />
          <Header>Sales System</Header>
        </View>
        <View>
          <PrimaryTextInput
            placeholder="First Name"
            color={colors.primaryLight}
            noAutoCapitalize
            backgroundColor={colors.primary.fade(0.2)}
            hasBackgroundOnFocus
            colorOnFocus={colors.trueWhite}
            name="firstName"
            onChangeText={this.onChangeInput}
            error={!!errors.firstName}
          errorText={errors.firstName}
          />
          <PrimaryTextInput
            placeholder="Surname"
            color={colors.primaryLight}
            noAutoCapitalize
            backgroundColor={colors.primary.fade(0.2)}
            hasBackgroundOnFocus
            colorOnFocus={colors.trueWhite}
            name="surname"
            onChangeText={this.onChangeInput}
            error={!!errors.surname}
          errorText={errors.surname}
          />
          <PrimaryTextInput
            placeholder="Password"
            password
            color={colors.primaryLight}
            noAutoCapitalize
            backgroundColor={colors.primary.fade(0.2)}
            hasBackgroundOnFocus
            colorOnFocus={colors.trueWhite}
            keyboardType="numeric"
            maxCharacters={passwordNoOfCharacters}
            name="password"
            onChangeText={this.onChangeInput}
            error={!!errors.password}
          errorText={errors.password}
          />
          <PrimaryButton onPress={this.onSubmit} isLoading={loginLoading} backgroundColor={colors.primaryLight}>Login</PrimaryButton>
        </View>
        {errors.general && <Text style={styles.error}>{errors.general}</Text>}
        <Guide style={styles.registerGuide} text="Still have no account? Register here" color={colors.primary} onPress={this.onPressRegister} />
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


const mapStateToProps=(state)=>({
  errors:state.errors,
  loginLoading:state.auth.setCurrentUserLoading,
})

const mapDispatchToProps={
  loginUser:AuthActions.loginUser,
  clearOneError:ErrorActions.clearOneError
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);
