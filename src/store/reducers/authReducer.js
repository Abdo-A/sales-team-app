import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
  setCurrentUserLoading: false,
  registerLoading: false,
  allUsers: [],
  isGettingUsers: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_START:
      return {
        ...state,
        setCurrentUserLoading: true,
      };

    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        setCurrentUserLoading: false,
      };

    case actionTypes.UNSET_CURRENT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        setCurrentUserLoading: false,
      };

    case actionTypes.SIGN_UP_START:
      return {
        ...state,
        registerLoading: true,
      };

    case actionTypes.SIGN_UP_END:
      return {
        ...state,
        registerLoading: false,
      };

    case actionTypes.GET_ALL_USERS_START:
      return {
        ...state,
        isGettingUsers: true,
      };

    case actionTypes.GET_ALL_USERS_END:
      return {
        ...state,
        allUsers: action.payload,
        isGettingUsers: false,
      };
    default:
      return state;
  }
};
