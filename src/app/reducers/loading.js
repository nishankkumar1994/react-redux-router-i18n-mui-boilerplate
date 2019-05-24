import actionTypes from 'constants/action-types';

export default (state = { searchResultAPI: false }, action) => {
  switch (action.type) {
    case actionTypes.API_PROGRESS:
      return action.payload;
    default:
      return state;
  }
};
