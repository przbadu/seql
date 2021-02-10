import * as actionTypes from "../actionType";

const initialState = {
  showConnectionDialog: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SHOW_CONNECTION_DIALOG:
      return { ...state, showConnectionDialog: true };
    case actionTypes.HIDE_CONNECTION_DIALOG:
      return { ...state, showConnectionDialog: false };
    default:
      return state;
  }
};
