import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as AuthActions from '../../../store/actions/authActions';
import EnhancedView from '../../../commons/components/EnhancedView';
import UsersList from '../../../commons/components/Lists/UsersList';
import usersListData from '../../../assets/data/translations/usersListData';

class SupervisorUsersScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: usersListData.users,
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
    const { getAllUsers } = this.props;

    return (
      <EnhancedView onRefresh={getAllUsers}>
        <UsersList showDCowners showSalesReps />
      </EnhancedView>
    );
  }
}

SupervisorUsersScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllUsers: PropTypes.func,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = {
  getAllUsers: AuthActions.getAllUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupervisorUsersScreen);
