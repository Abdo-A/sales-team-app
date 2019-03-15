import { Icon } from 'native-base';
import { View, Text } from 'react-native';
import React, { Component } from 'react';

class DCownerDCsScreen extends Component {
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

  state = {};

  render() {
    return (
      <View>
        <Text>DCs Screen</Text>
      </View>
    );
  }
}

export default DCownerDCsScreen;
