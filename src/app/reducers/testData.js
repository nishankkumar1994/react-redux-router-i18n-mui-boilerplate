import actionTypes from 'constants/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCHED_SEARCH_CHOICES:
      return action.payload;
    default:
      return state;
  }
};
