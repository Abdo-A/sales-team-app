import { connect } from 'react-redux';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import * as AuthActions from '../../../store/actions/authActions';
import * as ErrorActions from '../../../store/actions/errorActions';
import DCownersRegisterInputs from './DCownersRegisterInputs';
import EnhancedView from '../../../commons/components/EnhancedView';
import PrimaryPicker from '../../../commons/components/UI/PrimaryPicker/PrimaryPicker';
import QuickHint from '../../../commons/components/UI/QuickHint/QuickHint';
import registrationScreenData from '../../../assets/data/translations/registrationScreenData';
import SalesRepsRegisterInputs from './SalesRepsRegisterInputs';
import styles from './styles';
import Subheader from '../../../commons/components/UI/Subheader';
import SupervisorsRegisterInputs from './SupervisorsRegisterInputs';
import userTypes from '../../../assets/data/rules/userTypes';

const registerScreenBackgroundImage = require('../../../assets/images/registerScreenBackgroundImage.jpg');

class RegisterScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  initialState = {
    type: '',

    firstName: '',
    surname: '',
    DCs: [],
    password: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString(),
  };

  state = {
    ...this.initialState,
  };

  onChangeInput = (name, value) => {
    const { clearErrors, clearOneError } = this.props;

    clearOneError(name);

    if (name === 'type') {
      this.setState(this.initialState);
      clearErrors();
    }

    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { registerUser, navigation, clearErrors } = this.props;
    const { password } = this.state;

    clearErrors();

    const callback = () => {
      QuickHint(registrationScreenData.registrationSuccessHint);

      navigation.navigate('Login', {
        info: `${registrationScreenData.yourPasswordIs} ${password}
${registrationScreenData.youCanLogin}
${registrationScreenData.thankYou} ❤️`,
      });
    };

    registerUser(this.state, callback);
  };

  render() {
    const { type } = this.state;

    const { errors, registerLoading } = this.props;

    return (
      <EnhancedView
        style={styles.container}
        backgroundImagePath={registerScreenBackgroundImage}
      >
        <Subheader hasUnderline isThick>
          {registrationScreenData.register}
        </Subheader>
        <PrimaryPicker
          options={Object.values(userTypes)}
          name="type"
          onChange={this.onChangeInput}
          title={registrationScreenData.positionStatement}
          placeholder={registrationScreenData.positionPlaceholder}
          error={!!errors.type}
          errorText={errors.type}
        />
        {type === userTypes.salesRep.value ? (
          <SalesRepsRegisterInputs
            onChangeInput={this.onChangeInput}
            onSubmit={this.onSubmit}
            registerLoading={registerLoading}
            errors={errors}
          />
        ) : type === userTypes.dcOwner.value ? (
          <DCownersRegisterInputs
            onChangeInput={this.onChangeInput}
            onSubmit={this.onSubmit}
            registerLoading={registerLoading}
            errors={errors}
          />
        ) : type === userTypes.supervisor.value ? (
          <SupervisorsRegisterInputs
            onChangeInput={this.onChangeInput}
            onSubmit={this.onSubmit}
            registerLoading={registerLoading}
            errors={errors}
          />
        ) // ) : type === userTypes.superadmin.value ? (
        //   <SuperadminsRegisterInputs
        //     onChangeInput={this.onChangeInput}
        //     onSubmit={this.onSubmit}
        //     registerLoading={registerLoading}
        //     errors={errors}
        //   />
          : null}

        {errors.general && <Text style={styles.error}>{errors.general}</Text>}
      </EnhancedView>
    );
  }
}

RegisterScreen.defaultProps = {
  navigation: {},
  errors: {},
};

RegisterScreen.propTypes = {
  navigation: PropTypes.shape({}),
  errors: PropTypes.shape({}),

  registerUser: PropTypes.func,
  registerLoading: PropTypes.bool,

  clearErrors: PropTypes.func,
  clearOneError: PropTypes.func,
};

const mapStateToProps = state => ({
  errors: state.errors,
  registerLoading: state.auth.registerLoading,
});

const mapDispatchToProps = {
  registerUser: AuthActions.registerUser,
  clearErrors: ErrorActions.clearErrors,
  clearOneError: ErrorActions.clearOneError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterScreen);
