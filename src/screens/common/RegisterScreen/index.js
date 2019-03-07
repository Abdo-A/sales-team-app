import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import EnhancedView from '../../../commons/components/EnhancedView';
import PrimaryPicker from '../../../commons/components/UI/PrimaryPicker/PrimaryPicker';
import styles from './styles';
import userTypes from '../../../assets/data/rules/userTypes';
import SalesRepsRegisterInputs from './SalesRepsRegisterInputs';
import SupervisorsRegisterInputs from './SupervisorsRegisterInputs';
import DCownersRegisterInputs from './DCownersRegisterInputs';
import SuperadminsRegisterInputs from './SuperadminsRegisterInputs';
import PrimaryTextInput from '../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';

export default class RegisterScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state={
    userType: '',
    userSecretStatement: '',

    fullName: '',
    email: '',
    password: '',
    password2: '',

    dcOwner: '',
  }

  onChangeInput=(name, value) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  render() {
    const { userType } = this.state;
    return (
      <EnhancedView style={styles.container} backgroundImageUrl="https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80">
        <PrimaryPicker options={Object.values(userTypes)} name="userType" onChange={this.onChangeInput} title="Choose your position" placeholder="For example: Sales Rep" />
        <PrimaryTextInput
          placeholder="Your secret registration key"
          color={colors.primaryLight}
          noAutoCapitalize
          backgroundColor={colors.primary.fade(0.2)}
          hasBackgroundOnFocus
          colorOnFocus={colors.trueWhite}
        />
        {
        userType === userTypes.salesRep.value
          ? <SalesRepsRegisterInputs onChangeInput={this.onChangeInput} />
          : userType === userTypes.DCowner.value
            ? <DCownersRegisterInputs onChangeInput={this.onChangeInput} />
            : userType === userTypes.supervisor.value
              ? <SupervisorsRegisterInputs onChangeInput={this.onChangeInput} />
              : userType === userTypes.superadmin.value
                ? <SuperadminsRegisterInputs onChangeInput={this.onChangeInput} />
                : null
      }
      </EnhancedView>
    );
  }
}


RegisterScreen.defaultProps = {
  navigation: {},
};

RegisterScreen.propTypes = {
  navigation: PropTypes.shape({}),

};
