import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import DCownersRegisterInputs from './DCownersRegisterInputs';
import EnhancedView from '../../../commons/components/EnhancedView';
import PrimaryPicker from '../../../commons/components/UI/PrimaryPicker/PrimaryPicker';
import SalesRepsRegisterInputs from './SalesRepRegisterInputs';
import styles from './styles';
import Subheader from '../../../commons/components/UI/Subheader';
import SuperadminsRegisterInputs from './SuperadminsRegisterInputs';
import SupervisorsRegisterInputs from './SupervisorsRegisterInputs';
import userTypes from '../../../assets/data/rules/userTypes';

export default class RegisterScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state={
    userType: '',

    firstName: '',
    surname: '',
    province: '',
    password: '',
    password2: '',
  }

  onChangeInput=(name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { userType } = this.state;

    return (
      <EnhancedView style={styles.container} backgroundImageUrl="https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80">

        <Subheader hasUnderline isThick>Register</Subheader>
        <PrimaryPicker
          options={Object.values(userTypes)}
          name="userType"
          onChange={this.onChangeInput}
          title="Choose your position"
          placeholder="For example: Sales Rep"
        />
        {
        userType === userTypes.salesRep.value
          ? <SalesRepsRegisterInputs onChangeInput={this.onChangeInput} />
          : userType === userTypes.dcOwner.value
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
