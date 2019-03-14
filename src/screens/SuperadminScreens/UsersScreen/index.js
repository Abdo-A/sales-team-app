import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Tab,
  Tabs,
} from 'native-base';

import styles from './styles';
import EnhancedView from '../../../commons/components/EnhancedView';
import * as AuthActions from '../../../store/actions/authActions';
import { colors } from '../../../assets/styles/base';
import UserListItem from './ListItem';

class UsersScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Users',
  });

  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const { allUsers, isGettingUsers } = this.props;

    return (
      <EnhancedView isLoading={isGettingUsers}>
        <Tabs>
          <Tab
            heading="Approval"
            activeTabStyle={{ backgroundColor: colors.primaryLight }}
            tabStyle={{ backgroundColor: colors.primaryLight }}
          >
            <List>
              {allUsers
                .filter(user => user.approved === false)
                .map(user => (
                  <UserListItem
                    user={user}
                    key={user._id}
                    buttonText="Approve"
                    onPressButton={() => {}}
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
              {allUsers
                .filter(
                  user => user.type === 'dcowner' && user.approved === true,
                )
                .map(user => (
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
              {allUsers
                .filter(
                  user => user.type === 'supervisor' && user.approved === true,
                )
                .map(user => (
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
              {allUsers
                .filter(
                  user => user.type === 'salesrep' && user.approved === true,
                )
                .map(user => (
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
  isGettingUsers: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  allUsers: state.auth.allUsers,
  isGettingUsers: state.auth.isGettingUsers,
});

const mapDispatchToProps = {
  getAllUsers: AuthActions.getAllUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersScreen);
