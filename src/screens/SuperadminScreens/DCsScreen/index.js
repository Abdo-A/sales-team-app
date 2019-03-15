import {
  List, ListItem, Text, View,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as DCActions from '../../../store/actions/dcActions';
import DCListItem from './ListItem';
import DCPopup from './DCPopup';
import EnhancedView from '../../../commons/components/EnhancedView';
import styles from './styles';

class DCsScreen extends Component {
  state = {
    DCPopupVisible: false,
    openedDC: {},
  };

  componentDidMount() {
    const { getAllDCs } = this.props;
    getAllDCs();
  }

  onPressDCListItem = (dc) => {
    this.setState(() => ({
      openedDC: dc,
      DCPopupVisible: true,
    }));
  };

  onSaveDC = (newData) => {
    const { updateDC, getAllDCs } = this.props;
    const { openedDC } = this.state;

    const callback = () => {
      getAllDCs();
    };

    updateDC(newData, openedDC._id, callback);
    this.setState({ DCPopupVisible: false });
  };

  render() {
    const { DCs, isGettingDCs, isManipulatingDC } = this.props;
    const { DCPopupVisible, openedDC } = this.state;

    return (
      <EnhancedView isLoading={isGettingDCs || isManipulatingDC}>
        <DCPopup
          isVisible={DCPopupVisible}
          dc={openedDC}
          onSave={this.onSaveDC}
          onCancel={() => this.setState({ DCPopupVisible: false })}
        />
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
                onPress={() => this.onPressDCListItem(dc)}
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
                onPress={() => this.onPressDCListItem(dc)}
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
                onPress={() => this.onPressDCListItem(dc)}
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

  updateDC: PropTypes.func,
  isManipulatingDC: PropTypes.bool,
};

const mapStateToProps = state => ({
  errors: state.errors,

  DCs: state.dc.DCs,
  isGettingDCs: state.dc.isGettingDCs,
  isManipulatingDC: state.dc.isManipulatingDC,
});

const mapDispatchToProps = {
  getAllDCs: DCActions.getAllDCs,
  createDC: DCActions.createDC,
  updateDC: DCActions.updateDC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DCsScreen);
