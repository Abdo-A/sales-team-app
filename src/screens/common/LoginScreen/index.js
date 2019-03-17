import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import { passwordNoOfCharacters } from '../../../assets/data/rules';
import * as AuthActions from '../../../store/actions/authActions';
import * as ErrorActions from '../../../store/actions/errorActions';
import EnhancedView from '../../../commons/components/EnhancedView';
import Guide from '../../../commons/components/UI/Guide';
import Header from '../../../commons/components/UI/Header';
import loginScreenData from '../../../assets/data/translations/loginScreenData';
import PrimaryButton from '../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import styles from './styles';

class LoginScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state = {
    firstName: '',
    surname: '',
    password: '',
  };

  componentDidMount() {
    const { checkSavedUserThenLogin } = this.props;

    // Check if user has previously signed in
    checkSavedUserThenLogin(this.callbackAfterLogin);
  }

  componentDidUpdate() {
    const {
      navigation, currentUser, isAuthenticated, logoutUser,
    } = this.props;
    if (currentUser && isAuthenticated) {
      // In case of not approved user
      if (currentUser.type !== 'superadmin' && currentUser.approved === false) {
        logoutUser();
        return navigation.navigate('WaitForApproval');
      }

      // Navigating users to different Tabs according to their type

      AuthActions.getPushNotificationToken(currentUser);

      switch (currentUser.type) {
        case 'salesrep':
          return navigation.replace('SalesRepTab');
        case 'dcowner':
          return navigation.replace('DCownerTab');
        case 'supervisor':
          return navigation.replace('SupervisorTab');
        case 'superadmin':
          return navigation.replace('SuperadminTab');
        default:
          break;
      }
    }
  }

  onChangeInput = (name, value) => {
    const { clearOneError } = this.props;
    clearOneError(name);

    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { loginUser, clearErrors } = this.props;

    const callback = () => {
      clearErrors();
    };

    loginUser(this.state, callback);
  };

  onPressRegister = () => {
    const { navigation } = this.props;

    navigation.navigate('Register');
  };

  render() {
    const { errors, loginLoading, navigation } = this.props;

    const infoParam = navigation.getParam('info', null);

    return (
      <EnhancedView
        style={styles.container}
        backgroundImageBlueRadius={1}
        backgroundImageUrl="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
      >
        <View>
          <Image
            style={styles.logo}
            source={{
              uri:
                'http://www.watersystems.co.th/wp-content/uploads/2015/05/logo-betagen-c.gif',
            }}
          />
          <Header>{loginScreenData.appTitle}</Header>
        </View>
        {infoParam && <Text style={styles.info}>{infoParam}</Text>}

        <View>
          <PrimaryTextInput
            placeholder={loginScreenData.firstName}
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
            placeholder={loginScreenData.surname}
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
            placeholder={loginScreenData.password}
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
          <PrimaryButton
            onPress={this.onSubmit}
            isLoading={loginLoading}
            backgroundColor={colors.primaryLight}
          >
            {loginScreenData.login}
          </PrimaryButton>
        </View>
        {errors.general && <Text style={styles.error}>{errors.general}</Text>}

        <Guide
          style={styles.registerGuide}
          text={loginScreenData.noAccountStatement}
          color={colors.primary}
          onPress={this.onPressRegister}
        />
      </EnhancedView>
    );
  }
}

LoginScreen.defaultProps = {
  navigation: {},
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  currentUser: PropTypes.shape({}),

  clearErrors: PropTypes.func,
  clearOneError: PropTypes.func,
  loginUser: PropTypes.func,
  logoutUser: PropTypes.func,
  checkSavedUserThenLogin: PropTypes.func,

  isAuthenticated: PropTypes.bool,
  loginLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,
  loginLoading: state.auth.setCurrentUserLoading,
  currentUser: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  loginUser: AuthActions.loginUser,
  logoutUser: AuthActions.logoutUser,
  checkSavedUserThenLogin: AuthActions.checkSavedUserThenLogin,

  clearErrors: ErrorActions.clearErrors,
  clearOneError: ErrorActions.clearOneError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
