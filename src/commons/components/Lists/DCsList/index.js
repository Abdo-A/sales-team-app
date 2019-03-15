import PropTypes from 'prop-types';
import React from 'react';

import {
  List, ListItem, Text, View,
} from 'native-base';

import styles from './styles';
import DCListItem from './DCsListItem';

const DCsList = ({ DCs, onPressDC }) => (
  <List>
    <ListItem itemDivider style={styles.listItemDivider}>
      <Text style={styles.listItemDividerText}>Large DCs</Text>
    </ListItem>
    {DCs.filter(dc => dc.size === 'L').length === 0 && (
      <View style={styles.filler} />
    )}
    {DCs.filter(dc => dc.size === 'L')
      .sort((dc1, dc2) => dc2.salesThisMonth - dc1.salesThisMonth)
      .map((dc, i) => (
        <DCListItem
          key={dc._id}
          index={i + 1}
          dc={dc}
          onPress={() => onPressDC(dc)}
        />
      ))}

    <ListItem itemDivider style={styles.listItemDivider}>
      <Text style={styles.listItemDividerText}>Medium DCs</Text>
    </ListItem>
    {DCs.filter(dc => dc.size === 'M').length === 0 && (
      <View style={styles.filler} />
    )}
    {DCs.filter(dc => dc.size === 'M')
      .sort((dc1, dc2) => dc2.salesThisMonth - dc1.salesThisMonth)
      .map((dc, i) => (
        <DCListItem
          key={dc._id}
          index={i + 1}
          dc={dc}
          onPress={() => onPressDC(dc)}
        />
      ))}
    <ListItem itemDivider style={styles.listItemDivider}>
      <Text style={styles.listItemDividerText}>Small DCs</Text>
    </ListItem>
    {DCs.filter(dc => dc.size === 'S').length === 0 && (
      <View style={styles.filler} />
    )}
    {DCs.filter(dc => dc.size === 'S')
      .sort((dc1, dc2) => dc2.salesThisMonth - dc1.salesThisMonth)
      .map((dc, i) => (
        <DCListItem
          key={dc._id}
          index={i + 1}
          dc={dc}
          onPress={() => onPressDC(dc)}
        />
      ))}
  </List>
);

DCsList.propTypes = {
  DCs: PropTypes.arrayOf(PropTypes.shape({})),
  onPressDC: PropTypes.func,
};

export default DCsList;
