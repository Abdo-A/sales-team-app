import { ListItem, Text } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

const DCListItem = ({ index, dc, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <ListItem style={{ justifyContent: 'space-between' }}>
      <Text style={{ fontWeight: 'bold' }}>
        {index}
        {'- '}
        {dc.name}
      </Text>
      <Text>
        {' '}
        {dc.salesThisMonth}
        {' '}
        {' sales until now'}
      </Text>
    </ListItem>
  </TouchableWithoutFeedback>
);

DCListItem.propTypes = {
  index: PropTypes.number,
  dc: PropTypes.shape({}),
  onPress: PropTypes.func,
};

export default DCListItem;
