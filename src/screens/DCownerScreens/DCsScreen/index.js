import { connect } from 'react-redux';
import { Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as DCActions from '../../../store/actions/dcActions';
import DCsList from '../../../commons/components/Lists/DCsList';
import EnhancedView from '../../../commons/components/EnhancedView';
import Notice from '../../../commons/components/UI/Notice';
import { colors, fontTypes } from '../../../assets/styles/base';
import DCPopup from './DCPopup';
import DCsListData from '../../../assets/data/translations/DCsListData';

class DCownerDCsScreen extends Component {
  static navigationOptions = () => ({
    tabBarLabel: DCsListData.DCs,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="MaterialCommunityIcons"
        name="city"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

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

  render() {
    const { DCs, isGettingDCs, currentUser } = this.props;
    const { DCPopupVisible, openedDC } = this.state;

    return (
      <EnhancedView isLoading={isGettingDCs}>
        {/* Getting positions of each DC owned by this specific DC owner: */}

        {currentUser.DCs.length > 0
          && DCs.length > 0
          && DCs.map(dc => dc.name).some(dc => currentUser.DCs.includes(dc))
          && currentUser.DCs.map((ownedDC) => {
            const ownedDCSize = DCs.find(dc => dc.name === ownedDC).size;
            return (
              <Notice style={{ margin: 0, width: '90%' }} key={ownedDC}>
                <Text style={{ color: colors.primaryLight }}>
                  {DCsListData.rankIndication}
                  {'  '}
                  <Text style={{ fontFamily: fontTypes.mainBold }}>
                    {ownedDC}
                  </Text>
                  {' : '}
                  <Text style={{ fontFamily: fontTypes.mainBold }}>
                    {DCs.filter(dc => dc.size === ownedDCSize)
                      .sort(
                        (dc1, dc2) => dc2.salesThisMonth - dc1.salesThisMonth,
                      )
                      .map(dc => dc.name)
                      .indexOf(ownedDC) + 1}
                  </Text>
                </Text>
              </Notice>
            );
          })}

        <DCPopup
          isVisible={DCPopupVisible}
          dc={openedDC}
          onCancel={() => this.setState({ DCPopupVisible: false })}
        />

        <DCsList DCs={DCs} onPressDC={this.onPressDCListItem} />
      </EnhancedView>
    );
  }
}

DCownerDCsScreen.propTypes = {
  errors: PropTypes.shape({}),

  getAllDCs: PropTypes.func,
  DCs: PropTypes.arrayOf(PropTypes.shape({})),
  isGettingDCs: PropTypes.bool,

  currentUser: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  errors: state.errors,

  DCs: state.dc.DCs,
  isGettingDCs: state.dc.isGettingDCs,

  currentUser: state.auth.user,
});

const mapDispatchToProps = {
  getAllDCs: DCActions.getAllDCs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DCownerDCsScreen);
