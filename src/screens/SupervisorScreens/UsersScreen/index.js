import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

class SupervisorUsersScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: 'Users',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Ionicons"
        name="md-person"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  render() {
    return (
      <View>
        <Text>SupervisorUsersScreen</Text>
      </View>
    );
  }
}

SupervisorUsersScreen.propTypes = {};

export default SupervisorUsersScreen;
