import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as DCActions from '../../../store/actions/dcActions';
import DCsList from '../../../commons/components/Lists/DCsList';
import EnhancedView from '../../../commons/components/EnhancedView';

class DCownerDCsScreen extends Component {
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

  componentDidMount() {
    const { getAllDCs } = this.props;
    getAllDCs();
  }

  onPressDCListItem = () => {};

  render() {
    const { DCs, isGettingDCs } = this.props;

    return (
      <EnhancedView isLoading={isGettingDCs}>
        <DCsList DCs={DCs} onPressDC={this.onPressDCListItem} />
      </EnhancedView>
    );
  }
}

DCownerDCsScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllDCs: PropTypes.func,
  DCs: PropTypes.arrayOf(PropTypes.shape({})),
  isGettingDCs: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  DCs: state.dc.DCs,
  isGettingDCs: state.dc.isGettingDCs,

  currentUser: state.auth.user,
});

const mapDispatchToProps = {
  getAllDCs: DCActions.getAllDCs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DCownerDCsScreen);
