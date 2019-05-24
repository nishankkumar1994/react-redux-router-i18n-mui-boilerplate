import actionTypes from 'constants/action-types';
import { secureFetch } from 'AppUtils';

import constants from 'constants/app-constants';

const { API_ENDPOINTS } = constants;
const API_URL = process.env.REACT_APP_API_URL;

/**
 * Mock Function
 * Dispatch error fetched from API
 */
export const applyError = error => (dispatch) => {
  dispatch({
    type: actionTypes.API_ERROR,
    payload: error,
  });
};

/**
 * Call Search API with provided {options} and pass payload to store.
 * @param {options} options
 */
export const search = options => (dispatch) => {
  dispatch({
    type: actionTypes.API_PROGRESS,
    payload: { searchResultAPI: true },
  });
  return secureFetch(API_URL + API_ENDPOINTS.SEARCH, 'POST', options).then((data) => {
    dispatch({
      type: actionTypes.FETCHED_TEST_DATA,
      payload: data,
    });
  }).catch((error) => {
    dispatch({
      type: actionTypes.API_ERROR,
      payload: error,
    });
  });
};

// Search Actions ends here
