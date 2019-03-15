import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as DCActions from '../../../store/actions/dcActions';
import DCPopup from './DCPopup';
import EnhancedView from '../../../commons/components/EnhancedView';
import DCsList from '../../../commons/components/Lists/DCsList';

class DCsScreen extends Component {
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

DCsScreen.propTypes = {
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
)(DCsScreen);
