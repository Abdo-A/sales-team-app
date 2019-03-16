import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import * as DCActions from '../../../store/actions/dcActions';
import EnhancedView from '../../../commons/components/EnhancedView';
import PrimaryButton from '../../../commons/components/UI/PrimaryButton/PrimaryButton';
import QuickModal from '../../../commons/components/UI/QuickModal/QuickModal';
import superadminRelatedData from '../../../assets/data/translations/superadminRelatedData';

class SuperadminActionsScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: superadminRelatedData.actions,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="AntDesign"
        name="edit"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  render() {
    const { resetDCsSalesToZero, getAllDCs } = this.props;
    return (
      <EnhancedView
        style={{
          justifyContent: 'center',
        }}
      >
        <PrimaryButton
          backgroundColor={colors.secondary}
          onPress={() => QuickModal(superadminRelatedData.resetDCsWarning, () => resetDCsSalesToZero(() => getAllDCs()))
          }
        >
          {superadminRelatedData.resetDCsIndication}
        </PrimaryButton>
      </EnhancedView>
    );
  }
}

SuperadminActionsScreen.propTypes = {
  errors: PropTypes.shape({}),

  resetDCsSalesToZero: PropTypes.func,

  getAllDCs: PropTypes.func,
};

const mapStateToProps = state => ({
  errors: state.errors,

  DCs: state.dc.DCs,
});

const mapDispatchToProps = {
  resetDCsSalesToZero: DCActions.resetDCsSalesToZero,
  getAllDCs: DCActions.getAllDCs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuperadminActionsScreen);
