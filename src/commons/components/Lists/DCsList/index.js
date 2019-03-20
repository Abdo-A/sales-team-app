import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  List, ListItem, Text, View,
} from 'native-base';

import styles from './styles';
import DCListItem from './DCListItem';
import DCsListData from '../../../../assets/data/translations/DCsListData';
import * as DCActions from '../../../../store/actions/dcActions';

class DCsList extends Component {
  componentDidMount() {
    const { getAllDCs, DCs } = this.props;
    if (DCs.length === 0) getAllDCs();
  }

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
        />
      </List>
    );
  }
}

DCsList.propTypes = {
  onPressDC: PropTypes.func,

  DCs: PropTypes.arrayOf(PropTypes.shape({})),
  getAllDCs: PropTypes.func,
};

const mapStateToProps = state => ({
  DCs: state.dc.DCs,
});

const mapDispatchToProps = {
  getAllDCs: DCActions.getAllDCs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DCsList);
