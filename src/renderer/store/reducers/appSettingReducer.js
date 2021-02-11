import Store from "electron-store";
import * as actionTypes from "../actionType";

const persistentStore = new Store({ name: "activeConnection" });

const initialState = {
  showConnectionDialog: false,
  activeConnection: persistentStore.get("activeConnection") || {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SHOW_CONNECTION_DIALOG:
      return { ...state, showConnectionDialog: true };
    case actionTypes.HIDE_CONNECTION_DIALOG:
      return { ...state, showConnectionDialog: false };
    case actionTypes.ACTIVE_CONNECTION:
      persistentStore.set("activeConnection", action.payload);
      return { ...state, activeConnection: action.payload };
    default:
      return state;
  }
};
