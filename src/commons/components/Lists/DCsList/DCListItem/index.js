import { ListItem, Text, Badge } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../../../../assets/styles/base';
import DCsListData from '../../../../../assets/data/translations/DCsListData';

const DCListItem = ({
  index, dc, onPress, currentUser,
}) => {
  const relatedToCurrentDCowner = currentUser.DCs && currentUser.DCs.includes(dc.name);

  const achievedMainTarget = Number(dc.salesThisMonth) >= Number(dc.totalMonthlyTarget);
  const achievedTotalTarget = achievedMainTarget
    && Number(dc.grassJellySalesThisMonth) >= Number(dc.grassJellyMonthlyTarget);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ListItem
        style={[
          { justifyContent: 'space-between', marginVertical: 2 },
          relatedToCurrentDCowner && {
            backgroundColor: colors.gray01,
            marginRight: 12,
            borderRadius: 5,
          },
        ]}
      >
        <Text style={{ fontWeight: 'bold' }}>
          {index}
          {'- '}
          {dc.name}
        </Text>
        {achievedMainTarget && (
          <Badge danger>
            <Text>{achievedTotalTarget ? '2%' : '1.5%'}</Text>
          </Badge>
        )}
        <Text>
          {' '}
          {dc.salesThisMonth}
          {'  '}
          {DCsListData.salesIndication}
        </Text>
      </ListItem>
    </TouchableWithoutFeedback>
  );
};

DCListItem.propTypes = {
  index: PropTypes.number,
  dc: PropTypes.shape({}),
  onPress: PropTypes.func,

  currentUser: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  currentUser: state.auth.user,
});

export default connect(
  mapStateToProps,
  null,
)(DCListItem);
