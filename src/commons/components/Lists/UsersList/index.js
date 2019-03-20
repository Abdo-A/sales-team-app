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
import usersListData from '../../../../assets/data/translations/usersListData';
import EnhancedView from '../../EnhancedView';

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

  isManipulatingUser,
  isGettingUsers,
  isGettingDCs,
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
    <EnhancedView
      isLoading={isManipulatingUser || (isGettingUsers && !isGettingDCs)}
      onRefresh={getAllUsers}
    >
      <Tabs>
        {showApprovals && (
          <Tab
            heading={`${usersListData.toBeApprovedUsersHeader} (${
              approvalUsers.length
            })`}
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
            textStyle={{ fontSize: fontSizes.xs }}
            activeTextStyle={{ fontSize: fontSizes.xs }}
          >
            <List>
              {approvalUsers.length === 0 && (
                <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                  {usersListData.noToBeApprovedUsersIndication}
                </Text>
              )}
              {approvalUsers.map(user => (
                <UserListItem
                  user={user}
                  key={user._id}
                  buttonText={usersListData.approve}
                  onPressButton={() => QuickModal(usersListData.approveWarning, () => approveUser(user._id, () => getAllUsers()))
                  }
                />
              ))}
            </List>
          </Tab>
        )}

        {showDCowners && (
          <Tab
            heading={`${usersListData.dcOwners} (${dcOwners.length})`}
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
            textStyle={{ fontSize: fontSizes.xs }}
            activeTextStyle={{ fontSize: fontSizes.xs }}
          >
            <List>
              {dcOwners.length === 0 && (
                <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                  {usersListData.noUsersIndication}
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
            heading={`${usersListData.salesReps} (${salesreps.length})`}
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
            textStyle={{ fontSize: fontSizes.xs }}
            activeTextStyle={{ fontSize: fontSizes.xs }}
          >
            <List>
              {salesreps.length === 0 && (
                <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                  {usersListData.noUsersIndication}
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
            heading={`${usersListData.supervisors} (${supervisors.length})`}
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
            textStyle={{ fontSize: fontSizes.xs }}
            activeTextStyle={{ fontSize: fontSizes.xs }}
          >
            <List>
              {supervisors.length === 0 && (
                <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                  {usersListData.noUsersIndication}
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
            heading={`${usersListData.superadmins} (${superadmins.length})`}
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
            textStyle={{ fontSize: fontSizes.xs }}
            activeTextStyle={{ fontSize: fontSizes.xs }}
          >
            <List>
              {superadmins.length === 0 && (
                <Text style={{ alignSelf: 'center', marginTop: gaps.lg }}>
                  {usersListData.noUsersIndication}
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
    </EnhancedView>
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

  isManipulatingUser: PropTypes.bool,
  isGettingUsers: PropTypes.bool,

  isGettingDCs: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  allUsers: state.auth.allUsers,
  isManipulatingUser: state.auth.isManipulatingUser,
  isGettingUsers: state.auth.isGettingUsers,

  isGettingDCs: state.dc.isGettingDCs,
});

const mapDispatchToProps = {
  getAllUsers: AuthActions.getAllUsers,
  approveUser: AuthActions.approveUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);
