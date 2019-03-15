import {
  ListItem,
  Text,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const UserListItem = ({
  user,
  buttonText,
  buttonContent,
  onPressButton,
  currentUser,
}) => (
  <ListItem thumbnail>
    <Left>
      <Thumbnail
        square
        source={{
          uri: 'http://remarcproperty.com/image/user.png',
        }}
      />
    </Left>
    <Body>
      <Text>
        {user.firstName}
        {' '}
        {user.surname}
      </Text>
      <Text note>{user.type}</Text>
      {user.DCs.length > 0 && <Text note>{user.DCs.join(' ')}</Text>}
      {currentUser.type === 'superadmin' && (
        <Text note>
          {'Password: '}
          {user.actualPassword}
        </Text>
      )}
    </Body>
    <Right>
      <Button transparent onPress={onPressButton}>
        {buttonText ? <Text>{buttonText}</Text> : buttonContent}
      </Button>
    </Right>
  </ListItem>
);

UserListItem.propTypes = {
  user: PropTypes.shape({}),
  currentUser: PropTypes.shape({}),
  buttonText: PropTypes.string, // Note: either buttonText or buttonContent are passed
  buttonContent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onPressButton: PropTypes.func,
};

const mapStateToProps = state => ({
  currentUser: state.auth.user,
});

export default connect(
  mapStateToProps,
  null,
)(UserListItem);
