import * as actionTypes from './actionTypes';
import http, { dcAPI } from '../../assets/utils/httpService';

export const getAllDCs = callback => (dispatch) => {
  dispatch({
    type: actionTypes.GET_DCS_START,
  });
  http
    .get(`${dcAPI}/all`)
    .then((res) => {
      if (callback) callback();
      dispatch({
        type: actionTypes.GET_DCS_END,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.GET_DCS_END,
      });
    });
};

export const createDC = (dcData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MANIPULATE_DC_START,
  });
  http
    .post(dcAPI, dcData)
    .then(() => {
      if (callback) callback();
      dispatch({
        type: actionTypes.MANIPULATE_DC_END,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.MANIPULATE_DC_END,
      });
    });
};

export const updateDC = (newData, dcId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MANIPULATE_DC_START,
  });
  http
    .patch(`${dcAPI}/${dcId}`, newData)
    .then(() => {
      if (callback) callback();
      dispatch({
        type: actionTypes.MANIPULATE_DC_END,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.MANIPULATE_DC_END,
      });
    });
};

export const deleteDC = (dcId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MANIPULATE_DC_START,
  });
  http
    .delete(`${dcAPI}/${dcId}`)
    .then(() => {
      if (callback) callback();
      dispatch({
        type: actionTypes.MANIPULATE_DC_END,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.MANIPULATE_DC_END,
      });
    });
};
