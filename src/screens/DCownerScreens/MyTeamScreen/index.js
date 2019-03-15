import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as AuthActions from '../../../store/actions/authActions';
import EnhancedView from '../../../commons/components/EnhancedView';
import UsersList from '../../../commons/components/Lists/UsersList';

class DCownerMyTeamScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: 'My Team',
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
    const { allUsers, currentUser } = this.props;

    return (
      <EnhancedView>
        <UsersList
          allUsers={allUsers}
          showSalesReps
          salesRepsDCs={currentUser.DCs}
          showSupervisors
        />
      </EnhancedView>
    );
  }
}

DCownerMyTeamScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllUsers: PropTypes.func,
  allUsers: PropTypes.arrayOf(PropTypes.shape({})),
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  errors: state.errors,

  allUsers: state.auth.allUsers,
  currentUser: state.auth.user,
});

const mapDispatchToProps = {
  getAllUsers: AuthActions.getAllUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DCownerMyTeamScreen);
