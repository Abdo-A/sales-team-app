import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Text, Card, CardItem, Body, View,
} from 'native-base';
import Modal from 'react-native-modal';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';
import { colors } from '../../../../assets/styles/base';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';

class DCPopup extends Component {
  state = {};

  onChangeInput = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { isVisible, dc, onCancel } = this.props;
    return (
      <Modal isVisible={isVisible} onBackdropPress={onCancel}>
        <Card>
          <CardItem header bordered>
            <Text>{dc.name}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <PrimaryTextInput
                placeholder="Total sales this month"
                initialValue={`${dc.salesThisMonth}`}
                name="salesThisMonth"
                keyboardType="numeric"
                onChangeText={this.onChangeInput}
                disabled
              />
              <PrimaryTextInput
                placeholder="Total grass jelly sales this month"
                initialValue={`${dc.grassJellySalesThisMonth}`}
                name="grassJellySalesThisMonth"
                keyboardType="numeric"
                onChangeText={this.onChangeInput}
                disabled
              />
              <PrimaryTextInput
                placeholder="Total monthly target"
                initialValue={`${dc.totalMonthlyTarget}`}
                name="totalMonthlyTarget"
                keyboardType="numeric"
                onChangeText={this.onChangeInput}
                disabled
              />
              <PrimaryTextInput
                placeholder="Total grass jelly monthly target"
                initialValue={`${dc.grassJellyMonthlyTarget}`}
                name="grassJellyMonthlyTarget"
                keyboardType="numeric"
                onChangeText={this.onChangeInput}
                disabled
              />
            </Body>
          </CardItem>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <PrimaryButton
              onPress={onCancel}
              backgroundColor={colors.primaryLight}
            >
              {'OK'}
            </PrimaryButton>
          </View>
        </Card>
      </Modal>
    );
  }
}

DCPopup.propTypes = {
  isVisible: PropTypes.bool,
  dc: PropTypes.shape({}),
  onCancel: PropTypes.func,
};

export default DCPopup;
