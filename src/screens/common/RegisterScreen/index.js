import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import EnhancedView from '../../../commons/components/EnhancedView';
import PrimaryPicker from '../../../commons/components/UI/PrimaryPicker/PrimaryPicker';
import styles from './styles';

export default class RegisterScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state={}

  render() {
    return (
      <EnhancedView style={styles.container} backgroundImageUrl="https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80">
        <PrimaryPicker title="Choose your position" placeholder="For example: Sales Rep" />

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
