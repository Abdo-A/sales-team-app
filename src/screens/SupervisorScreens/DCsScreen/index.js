import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

class SupervisorDCsScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: 'DCs',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="MaterialCommunityIcons"
        name="city"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  render() {
    return (
      <View>
        <Text>SupervisorDCsScreen</Text>
      </View>
    );
  }
}

SupervisorDCsScreen.propTypes = {};

export default SupervisorDCsScreen;
