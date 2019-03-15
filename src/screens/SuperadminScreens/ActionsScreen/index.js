import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import PrimaryButton from '../../../commons/components/UI/PrimaryButton/PrimaryButton';
import { colors } from '../../../assets/styles/base';
import QuickModal from '../../../commons/components/UI/QuickModal/QuickModal';

class SuperadminActionsScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: 'Actions',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="AntDesign"
        name="edit"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  render() {
    return (
      <View>
        <PrimaryButton
          backgroundColor={colors.secondary}
          onPress={() => QuickModal(
            'All the sales for all the DCs will be 0 again. This means this is the beginning of the month.',
            () => null,
          )
          }
        >
          {'Reset all DC sales to 0'}
        </PrimaryButton>
      </View>
    );
  }
}

SuperadminActionsScreen.propTypes = {};

export default SuperadminActionsScreen;
