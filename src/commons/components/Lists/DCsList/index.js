import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  List, ListItem, Text, View,
} from 'native-base';

import styles from './styles';
import DCListItem from './DCListItem';
import DCsListData from '../../../../assets/data/translations/DCsListData';

class DCsList extends Component {
  renderItem = (input) => {
    const { DCs, onPressDC } = this.props;

    const size = input.item;

    const header = size === 'L'
      ? DCsListData.largeDCsHeader
      : size === 'M'
        ? DCsListData.mediumDCsHeader
        : DCsListData.smallDCsHeader;

    return (
      <React.Fragment>
        <ListItem itemDivider style={styles.listItemDivider}>
          <Text style={styles.listItemDividerText}>{header}</Text>
        </ListItem>
        {DCs.filter(dc => dc.size === size).length === 0 && (
          <View style={styles.filler} />
        )}
        {DCs.filter(dc => dc.size === size)
          .sort((dc1, dc2) => dc2.salesThisMonth - dc1.salesThisMonth)
          .map((dc, i) => (
            <DCListItem
              key={dc._id}
              index={i + 1}
              dc={dc}
              onPress={() => onPressDC(dc)}
            />
          ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <List>
        <FlatList
          style={{ height: '100%' }}
          data={['L', 'M', 'S']}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          refreshing={false}
          onRefresh={this.handleRefresh}
        />
      </List>
    );
  }
}

DCsList.propTypes = {
  DCs: PropTypes.arrayOf(PropTypes.shape({})),
  onPressDC: PropTypes.func,
};

export default DCsList;
