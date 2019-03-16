import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Text, Card, CardItem, Body, View,
} from 'native-base';
import Modal from 'react-native-modal';
import PrimaryButton from '../../../../commons/components/UI/PrimaryButton/PrimaryButton';
import { colors } from '../../../../assets/styles/base';
import PrimaryTextInput from '../../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import DCsListData from '../../../../assets/data/translations/DCsListData';
import appData from '../../../../assets/data/translations';

class DCPopup extends Component {
  state = {};

  onChangeInput = (name, value) => {
    this.setState({ [name]: value });
  };

  onSave = () => {
    const { onSave } = this.props;

    onSave(this.state);
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
                placeholder={DCsListData.totalSalesIndication}
                initialValue={`${dc.salesThisMonth}`}
                name="salesThisMonth"
                keyboardType="numeric"
                onChangeText={this.onChangeInput}
                style={{ width: '100%' }}
              />
              <PrimaryTextInput
                placeholder={DCsListData.otherSalesIndication}
                initialValue={`${dc.grassJellySalesThisMonth}`}
                name="grassJellySalesThisMonth"
                keyboardType="numeric"
                onChangeText={this.onChangeInput}
                style={{ width: '100%' }}
              />
              <PrimaryTextInput
                placeholder={DCsListData.totalTargetIndication}
                initialValue={`${dc.totalMonthlyTarget}`}
                name="totalMonthlyTarget"
                keyboardType="numeric"
                onChangeText={this.onChangeInput}
                style={{ width: '100%' }}
              />
              <PrimaryTextInput
                placeholder={DCsListData.otherTargetIndication}
                initialValue={`${dc.grassJellyMonthlyTarget}`}
                name="grassJellyMonthlyTarget"
                keyboardType="numeric"
                onChangeText={this.onChangeInput}
                style={{ width: '100%' }}
              />
            </Body>
          </CardItem>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <PrimaryButton onPress={onCancel}>
              {appData.cancelIndication}
            </PrimaryButton>
            <PrimaryButton
              onPress={this.onSave}
              backgroundColor={colors.primary}
            >
              {appData.saveIndication}
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
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default DCPopup;
