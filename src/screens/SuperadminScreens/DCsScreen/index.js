import {
  List, ListItem, Text, View,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as DCActions from '../../../store/actions/dcActions';
import DCListItem from './ListItem';
import EnhancedView from '../../../commons/components/EnhancedView';
import styles from './styles';

class DCsScreen extends Component {
  componentDidMount() {
    const { getAllDCs } = this.props;
    getAllDCs();
  }

  render() {
    const { DCs, isGettingDCs } = this.props;

    return (
      <EnhancedView isLoading={isGettingDCs}>
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
                name={dc.name}
                sales={dc.salesThisMonth}
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
                name={dc.name}
                sales={dc.salesThisMonth}
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
                name={dc.name}
                sales={dc.salesThisMonth}
              />
            ))}
        </List>
      </EnhancedView>
    );
  }
}

DCsScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllDCs: PropTypes.func,
  DCs: PropTypes.arrayOf(PropTypes.shape({})),
  isGettingDCs: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  DCs: state.dc.DCs,
  isGettingDCs: state.dc.isGettingDCs,
});

const mapDispatchToProps = {
  getAllDCs: DCActions.getAllDCs,
  createDC: DCActions.createDC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DCsScreen);
