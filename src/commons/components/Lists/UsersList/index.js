import React from 'react';

import {
  List, Icon, Tab, Tabs, Text,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { colors } from '../../../../assets/styles/base';
import QuickModal from '../../UI/QuickModal/QuickModal';
import * as AuthActions from '../../../../store/actions/authActions';
import UserListItem from './UserListItem';

const UsersList = ({
  allUsers,
  getAllUsers,
  approveUser,
  showApprovals,
  showDCowners,
  showSupervisors,
  showSuperadmins,
  showSalesReps,
}) => {
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
  const superadmins = allUsers.filter(
    user => user.type === 'superadmin' && user.approved === true,
  );

  return (
    <Tabs>
      {showApprovals && (
        <Tab
          heading="Approvals"
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
      )}

      {showDCowners && (
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
      )}

      {showSupervisors && (
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
      )}

      {showSalesReps && (
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
      )}

      {showSuperadmins && (
        <Tab
          heading="Superadmins"
          activeTabStyle={{ backgroundColor: colors.primaryLight }}
          tabStyle={{ backgroundColor: colors.primaryLight }}
        >
          <List>
            {superadmins.length === 0 && (
              <Text style={{ alignSelf: 'center' }}>No Users</Text>
            )}
            {superadmins.map(user => (
              <UserListItem
                user={user}
                key={user._id}
                buttonContent={<Icon type="AntDesign" name="star" />}
                onPressButton={() => {}}
              />
            ))}
          </List>
        </Tab>
      )}
    </Tabs>
  );
};

UsersList.propTypes = {
  getAllUsers: PropTypes.func,
  allUsers: PropTypes.arrayOf(PropTypes.shape({})),

  approveUser: PropTypes.func,

  showApprovals: PropTypes.bool,
  showDCowners: PropTypes.bool,
  showSupervisors: PropTypes.bool,
  showSuperadmins: PropTypes.bool,
  showSalesReps: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  allUsers: state.auth.allUsers,
});

const mapDispatchToProps = {
  getAllUsers: AuthActions.getAllUsers,
  approveUser: AuthActions.approveUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);
