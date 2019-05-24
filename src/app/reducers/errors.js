import actionTypes from 'constants/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.API_ERROR:
      return [
        action.payload,
      ];
    default:
      return state;
  }
};
