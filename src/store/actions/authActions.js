import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';

import * as actionTypes from './actionTypes';

import http, {
  userAPI,
  setAuthToken,
  removeAuthToken,
} from '../../assets/utils/httpService';


import QuickHint from '../../commons/components/UI/QuickHint/QuickHint';
import { storedJWTname } from '../../assets/data/constants';


export const registerUser = (userData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.SIGN_UP_START,
  });

  http
    .post(userAPI, userData)
    .then((res) => {
      console.log(res.data);
      if (callback) callback();
      dispatch({
        type: actionTypes.SIGN_UP_END,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.SIGN_UP_END,
      });
    });
};

export const loginUser = (userData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER_START,
  });

  http
    .post(`${userAPI}/login`, userData)
    .then((res) => {
      const { token } = res.data;
      QuickHint('Login Successful');

      // Save token to storage
      AsyncStorage.setItem(storedJWTname, token).catch(() => {
        QuickHint('Could not save your credentials');
      });

      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwtDecode(token);

      // Set user in auth reducer
      dispatch({
        type: actionTypes.SET_CURRENT_USER,
        payload: decodedToken,
      });

      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.SET_CURRENT_USER,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER_START,
  });

  // Remove token from storage
  AsyncStorage.removeItem(storedJWTname).catch(() => {
    QuickHint('Could not remove your saved credentials');
  });

  // Remove Authorization header
  removeAuthToken();

  // Remove user from auth reducer
  dispatch({
    type: actionTypes.UNSET_CURRENT_USER,
  });
};

export const checkSavedUserThenLogin = callback => (dispatch) => {
  AsyncStorage.getItem(storedJWTname).then((token) => {
    if (token) {
      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwtDecode(token);

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        dispatch(logoutUser());
      } else {
        // Set user
        dispatch({
          type: actionTypes.SET_CURRENT_USER,
          payload: decodedToken,
        });
        if (callback) callback();
      }
    }
  });
};
