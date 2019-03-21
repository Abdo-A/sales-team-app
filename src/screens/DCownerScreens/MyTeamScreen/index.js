import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as AuthActions from '../../../store/actions/authActions';
import EnhancedView from '../../../commons/components/EnhancedView';
import UsersList from '../../../commons/components/Lists/UsersList';
import usersListData from '../../../assets/data/translations/usersListData';

class DCownerMyTeamScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: usersListData.myTeam,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Ionicons"
        name="md-person"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const { currentUser, getAllUsers } = this.props;

    return (
      <EnhancedView onRefresh={getAllUsers}>
        <UsersList
          showSalesReps
          showSupervisors
          salesRepsDCs={currentUser.DCs}
        />
      </EnhancedView>
    );
  }
}

DCownerMyTeamScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllUsers: PropTypes.func,
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  errors: state.errors,

  currentUser: state.auth.user,
});

const mapDispatchToProps = {
  getAllUsers: AuthActions.getAllUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DCownerMyTeamScreen);
