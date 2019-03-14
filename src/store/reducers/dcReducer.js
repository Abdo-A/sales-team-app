import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  DCs: [],
  isGettingDCs: false,
  isUpdatingDC: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_DCS_START:
      return {
        ...state,
        isGettingDCs: true,
      };

    case actionTypes.GET_DCS_END:
      return {
        ...state,
        DCs: action.payload,
        isGettingDCs: false,
      };

    case actionTypes.UPDATE_DC_START:
      return {
        ...state,
        isUpdatingDC: true,
      };

    case actionTypes.UPDATE_DC_END:
      return {
        ...state,
        isUpdatingDC: false,
      };

    default:
      return state;
  }
};
