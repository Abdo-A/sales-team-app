import { ListItem, Text } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

const DCListItem = ({ index, name, sales }) => (
  <ListItem style={{ justifyContent: 'space-between' }}>
    <Text style={{ fontWeight: 'bold' }}>
      {index}
      {'- '}
      {name}
    </Text>
    <Text>
      {' '}
      {sales}
      {' '}
      {' sales until now'}
    </Text>
  </ListItem>
);

DCListItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  sales: PropTypes.number,
};

export default DCListItem;
