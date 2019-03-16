import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as DCActions from '../../../store/actions/dcActions';
import DCPopup from '../../DCownerScreens/DCsScreen/DCPopup';
import DCsList from '../../../commons/components/Lists/DCsList';
import EnhancedView from '../../../commons/components/EnhancedView';
import DCsListData from '../../../assets/data/translations/DCsListData';

class SupervisorDCsScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: DCsListData.DCs,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="MaterialCommunityIcons"
        name="city"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  state = {
    DCPopupVisible: false,
    openedDC: {},
  };

  componentDidMount() {
    const { getAllDCs } = this.props;
    getAllDCs();
  }

  onPressDCListItem = (dc) => {
    this.setState(() => ({
      openedDC: dc,
      DCPopupVisible: true,
    }));
  };

  render() {
    const { DCs, isGettingDCs } = this.props;
    const { DCPopupVisible, openedDC } = this.state;

    return (
      <EnhancedView isLoading={isGettingDCs}>
        <DCPopup
          isVisible={DCPopupVisible}
          dc={openedDC}
          onCancel={() => this.setState({ DCPopupVisible: false })}
        />

        <DCsList DCs={DCs} onPressDC={this.onPressDCListItem} />
      </EnhancedView>
    );
  }
}

SupervisorDCsScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllDCs: PropTypes.func,
  DCs: PropTypes.arrayOf(PropTypes.shape({})),
  isGettingDCs: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  DCs: state.dc.DCs,
  isGettingDCs: state.dc.isGettingDCs,
});

const mapDispatchToProps = {
  getAllDCs: DCActions.getAllDCs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupervisorDCsScreen);
