import { ListItem, Text } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../../../../assets/styles/base';

const DCListItem = ({
  index, dc, onPress, currentUser,
}) => {
  const relatedToCurrentDCowner = currentUser.DCs && currentUser.DCs.includes(dc.name);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ListItem
        style={[
          { justifyContent: 'space-between' },
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
        <Text>
          {' '}
          {dc.salesThisMonth}
          {' '}
          {' sales until now'}
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
