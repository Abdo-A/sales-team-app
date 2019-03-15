import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as AuthActions from '../../../store/actions/authActions';
import EnhancedView from '../../../commons/components/EnhancedView';
import UsersList from '../../../commons/components/Lists/UsersList';

class UsersScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Users',
  });

  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const { allUsers, isManipulatingUser } = this.props;

    return (
      <EnhancedView isLoading={isManipulatingUser}>
        <UsersList
          allUsers={allUsers}
          showApprovals
          showDCowners
          showSupervisors
          showSalesReps
        />
      </EnhancedView>
    );
  }
}

UsersScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllUsers: PropTypes.func,
  allUsers: PropTypes.arrayOf(PropTypes.shape({})),

  isManipulatingUser: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  allUsers: state.auth.allUsers,
  isManipulatingUser: state.auth.isManipulatingUser,
});

const mapDispatchToProps = {
  getAllUsers: AuthActions.getAllUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersScreen);
