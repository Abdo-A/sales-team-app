import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import * as AuthActions from '../../../store/actions/authActions';
import * as ErrorActions from '../../../store/actions/errorActions';
import DCownersRegisterInputs from './DCownersRegisterInputs';
import EnhancedView from '../../../commons/components/EnhancedView';
import PrimaryPicker from '../../../commons/components/UI/PrimaryPicker/PrimaryPicker';
import SalesRepsRegisterInputs from './SalesRepRegisterInputs';
import styles from './styles';
import Subheader from '../../../commons/components/UI/Subheader';
import SuperadminsRegisterInputs from './SuperadminsRegisterInputs';
import SupervisorsRegisterInputs from './SupervisorsRegisterInputs';
import userTypes from '../../../assets/data/rules/userTypes';

class RegisterScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  initialState={
    type: '',

    firstName: '',
    surname: '',
    dc: '',
    password: '',
    password2: '',
  }

  state={
    ...this.initialState
  }

  onChangeInput=(name, value) => {
    const {clearErrors,clearOneError}=this.props;

    clearOneError(name);

    if(name==='type'){
      this.setState(this.initialState)
      clearErrors();
    }
    this.setState({ [name]: value });
  }

  onSubmit=()=>{
    const { registerUser}=this.props;
    registerUser(this.state);
  }

  render() {
    const { type } = this.state;

    const {errors}=this.props;

    return (
      <EnhancedView style={styles.container} backgroundImageUrl="https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80">

        <Subheader hasUnderline isThick>Register</Subheader>
        <PrimaryPicker
          options={Object.values(userTypes)}
          name="type"
          onChange={this.onChangeInput}
          title="Choose your position"
          placeholder="For example: Sales Rep"
          error={!!errors.type}
          errorText={errors.type}
        />
        {
        type === userTypes.salesRep.value
          ? <SalesRepsRegisterInputs onChangeInput={this.onChangeInput} onSubmit={this.onSubmit} />
          : type === userTypes.dcOwner.value
            ? <DCownersRegisterInputs onChangeInput={this.onChangeInput} onSubmit={this.onSubmit} />
            : type === userTypes.supervisor.value
              ? <SupervisorsRegisterInputs onChangeInput={this.onChangeInput} onSubmit={this.onSubmit} />
              : type === userTypes.superadmin.value
                ? <SuperadminsRegisterInputs onChangeInput={this.onChangeInput} onSubmit={this.onSubmit} />
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


const mapStateToProps=(state)=>({
  errors:state.errors
})


const mapDispatchToProps={
  registerUser:AuthActions.registerUser,
  clearErrors:ErrorActions.clearErrors,
  clearOneError:ErrorActions.clearOneError
};


export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);