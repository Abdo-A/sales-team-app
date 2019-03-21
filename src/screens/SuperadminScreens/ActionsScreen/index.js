import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import * as AuthActions from '../../../store/actions/authActions';
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
    const {
      resetDCsSalesToZero,
      getAllDCs,
      sendNotificationsToAllDCowners,
      isSendingNotification,
    } = this.props;
    return (
      <EnhancedView
        style={{
          justifyContent: 'center',
        }}
        isLoading={isSendingNotification}
      >
        <PrimaryButton
          backgroundColor={colors.secondary}
          onPress={() => QuickModal(superadminRelatedData.resetDCsWarning, () => resetDCsSalesToZero(() => getAllDCs()))
          }
        >
          {superadminRelatedData.resetDCsIndication}
        </PrimaryButton>

        <PrimaryButton
          backgroundColor={colors.secondary}
          onPress={() => QuickModal(
            `${superadminRelatedData.sendDCnotificationsWarning}

${superadminRelatedData.exampleIntro}
${superadminRelatedData.sendDCnotificationExample}

${superadminRelatedData.sendNotificationConfirmation}
            `,
            () => sendNotificationsToAllDCowners(),
          )
          }
        >
          {superadminRelatedData.sendDCnotificationsIndication}
        </PrimaryButton>
      </EnhancedView>
    );
  }
}

SuperadminActionsScreen.propTypes = {
  errors: PropTypes.shape({}),

  resetDCsSalesToZero: PropTypes.func,
  getAllDCs: PropTypes.func,

  sendNotificationsToAllDCowners: PropTypes.func,
  isSendingNotification: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  DCs: state.dc.DCs,

  isSendingNotification: state.auth.isSendingNotification,
});

const mapDispatchToProps = {
  resetDCsSalesToZero: DCActions.resetDCsSalesToZero,
  getAllDCs: DCActions.getAllDCs,

  sendNotificationsToAllDCowners: AuthActions.sendNotificationsToAllDCowners,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuperadminActionsScreen);
