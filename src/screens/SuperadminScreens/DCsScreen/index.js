import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as DCActions from '../../../store/actions/dcActions';
import DCPopup from './DCPopup';
import DCsList from '../../../commons/components/Lists/DCsList';
import EnhancedView from '../../../commons/components/EnhancedView';

class SuperadminDCsScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: 'DCs',
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

  onSaveDC = (newData) => {
    const { updateDC, getAllDCs } = this.props;
    const { openedDC } = this.state;

    const callback = () => {
      getAllDCs();
    };

    updateDC(newData, openedDC._id, callback);
    this.setState({ DCPopupVisible: false });
  };

  render() {
    const { DCs, isGettingDCs, isManipulatingDC } = this.props;
    const { DCPopupVisible, openedDC } = this.state;

    return (
      <EnhancedView isLoading={isGettingDCs || isManipulatingDC}>
        <DCPopup
          isVisible={DCPopupVisible}
          dc={openedDC}
          onSave={this.onSaveDC}
          onCancel={() => this.setState({ DCPopupVisible: false })}
        />
        <DCsList DCs={DCs} onPressDC={this.onPressDCListItem} />
      </EnhancedView>
    );
  }
}

SuperadminDCsScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllDCs: PropTypes.func,
  DCs: PropTypes.arrayOf(PropTypes.shape({})),
  isGettingDCs: PropTypes.bool,

  updateDC: PropTypes.func,
  isManipulatingDC: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  DCs: state.dc.DCs,
  isGettingDCs: state.dc.isGettingDCs,
  isManipulatingDC: state.dc.isManipulatingDC,
});

const mapDispatchToProps = {
  getAllDCs: DCActions.getAllDCs,
  createDC: DCActions.createDC,
  updateDC: DCActions.updateDC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuperadminDCsScreen);
