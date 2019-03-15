import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

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

  state = {};

  render() {
    return (
      <View>
        <Text>My Team Screen</Text>
      </View>
    );
  }
}

export default DCownerMyTeamScreen;
