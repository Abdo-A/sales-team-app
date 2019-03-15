import React from 'react';

import {
  List, Icon, Tab, Tabs, Text,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { colors, gaps, fontSizes } from '../../../../assets/styles/base';
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
  salesRepsDCs,
}) => {
  const approvalUsers = allUsers.filter(user => user.approved === false);
  const dcOwners = allUsers.filter(
    user => user.type === 'dcowner' && user.approved === true,
  );
  const supervisors = allUsers.filter(
    user => user.type === 'supervisor' && user.approved === true,
  );
  const salesreps = allUsers.filter(
    user => user.type === 'salesrep'
      && user.approved === true
      && (salesRepsDCs.length > 0
        ? salesRepsDCs.some(dc => user.DCs.includes(dc))
        : 1),
  );

  const superadmins = allUsers.filter(
    user => user.type === 'superadmin' && user.approved === true,
  );

  return (
    <Tabs>
      {showApprovals && (
        <Tab
          heading={`Approvals (${approvalUsers.length})`}
          activeTabStyle={{ backgroundColor: colors.primaryLight }}
          tabStyle={{ backgroundColor: colors.primaryLight }}
          textStyle={{ fontSize: fontSizes.sm }}
          activeTextStyle={{ fontSize: fontSizes.sm }}
        >
          <List>
            {approvalUsers.length === 0 && (
              <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                {'No New Users To Approve'}
              </Text>
            )}
            {approvalUsers.map(user => (
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
          heading={`DC owners (${dcOwners.length})`}
          activeTabStyle={{ backgroundColor: colors.primaryLight }}
          tabStyle={{ backgroundColor: colors.primaryLight }}
          textStyle={{ fontSize: fontSizes.sm }}
          activeTextStyle={{ fontSize: fontSizes.sm }}
        >
          <List>
            {dcOwners.length === 0 && (
              <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                {'No Users'}
              </Text>
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

      {showSalesReps && (
        <Tab
          heading={`Sales Reps (${salesreps.length})`}
          activeTabStyle={{ backgroundColor: colors.primaryLight }}
          tabStyle={{ backgroundColor: colors.primaryLight }}
          textStyle={{ fontSize: fontSizes.sm }}
          activeTextStyle={{ fontSize: fontSizes.sm }}
        >
          <List>
            {salesreps.length === 0 && (
              <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                {'No Users'}
              </Text>
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

      {showSupervisors && (
        <Tab
          heading={`Supervisors (${supervisors.length})`}
          activeTabStyle={{ backgroundColor: colors.primaryLight }}
          tabStyle={{ backgroundColor: colors.primaryLight }}
          textStyle={{ fontSize: fontSizes.sm }}
          activeTextStyle={{ fontSize: fontSizes.sm }}
        >
          <List>
            {supervisors.length === 0 && (
              <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                {'No Users'}
              </Text>
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

      {showSuperadmins && (
        <Tab
          heading={`Superadmins (${superadmins.length})`}
          activeTabStyle={{ backgroundColor: colors.primaryLight }}
          tabStyle={{ backgroundColor: colors.primaryLight }}
          textStyle={{ fontSize: fontSizes.sm }}
          activeTextStyle={{ fontSize: fontSizes.sm }}
        >
          <List>
            {superadmins.length === 0 && (
              <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                {'No Users'}
              </Text>
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

UsersList.defaultProps = {
  salesRepsDCs: [],
};

UsersList.propTypes = {
  getAllUsers: PropTypes.func,
  allUsers: PropTypes.arrayOf(PropTypes.shape({})),

  approveUser: PropTypes.func,
  salesRepsDCs: PropTypes.arrayOf(PropTypes.string), // to show SalesReps from specific DCs only

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
