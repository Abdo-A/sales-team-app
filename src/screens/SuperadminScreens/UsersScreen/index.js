import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  List, Icon, Tab, Tabs, Text,
} from 'native-base';

import EnhancedView from '../../../commons/components/EnhancedView';
import * as AuthActions from '../../../store/actions/authActions';
import { colors } from '../../../assets/styles/base';
import UserListItem from './ListItem';
import QuickModal from '../../../commons/components/UI/QuickModal/QuickModal';

class UsersScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Users',
  });

  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const {
      allUsers,
      getAllUsers,
      approveUser,
      isManipulatingUser,
    } = this.props;

    const approvedUsers = allUsers.filter(user => user.approved === false);
    const dcOwners = allUsers.filter(
      user => user.type === 'dcowner' && user.approved === true,
    );
    const supervisors = allUsers.filter(
      user => user.type === 'supervisor' && user.approved === true,
    );
    const salesreps = allUsers.filter(
      user => user.type === 'salesrep' && user.approved === true,
    );

    return (
      <EnhancedView isLoading={isManipulatingUser}>
        <Tabs>
          <Tab
            heading="Approval"
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
          >
            <List>
              {approvedUsers.length === 0 && (
                <Text style={{ alignSelf: 'center' }}>No Users</Text>
              )}
              {approvedUsers.map(user => (
                <UserListItem
                  user={user}
                  key={user._id}
                  buttonText="Approve"
                  onPressButton={() => QuickModal('You will approve this user', () => approveUser(user._id, () => getAllUsers()))
                  }
                />
              ))}
            </List>
          </Tab>
          <Tab
            heading="DC owners"
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
          >
            <List>
              {dcOwners.length === 0 && (
                <Text style={{ alignSelf: 'center' }}>No Users</Text>
              )}
              {dcOwners.map(user => (
                <UserListItem
                  user={user}
                  key={user._id}
                  buttonContent={<Icon type="AntDesign" name="star" />}
                  onPressButton={() => {}}
                />
              ))}
            </List>
          </Tab>
          <Tab
            heading="Supervisors"
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
          >
            <List>
              {supervisors.length === 0 && (
                <Text style={{ alignSelf: 'center' }}>No Users</Text>
              )}
              {supervisors.map(user => (
                <UserListItem
                  user={user}
                  key={user._id}
                  buttonContent={<Icon type="AntDesign" name="star" />}
                  onPressButton={() => {}}
                />
              ))}
            </List>
          </Tab>
          <Tab
            heading="Sales Reps"
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
          >
            <List>
              {salesreps.length === 0 && (
                <Text style={{ alignSelf: 'center' }}>No Users</Text>
              )}
              {salesreps.map(user => (
                <UserListItem
                  user={user}
                  key={user._id}
                  buttonContent={<Icon type="AntDesign" name="star" />}
                  onPressButton={() => {}}
                />
              ))}
            </List>
          </Tab>
        </Tabs>
      </EnhancedView>
    );
  }
}

UsersScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllUsers: PropTypes.func,
  allUsers: PropTypes.arrayOf(PropTypes.shape({})),

  approveUser: PropTypes.func,
  isManipulatingUser: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  allUsers: state.auth.allUsers,
  isManipulatingUser: state.auth.isManipulatingUser,
});

const mapDispatchToProps = {
  getAllUsers: AuthActions.getAllUsers,
  approveUser: AuthActions.approveUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersScreen);
