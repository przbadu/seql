import Store from "electron-store";

import * as actionTypes from "../actionType";
import Application from "../../ipc-api/Application";

const key = Application.getKey();

const persistentStore = new Store({
  name: "connections",
  encryptionKey: key,
});

const storeName = "connections";

const initialState = persistentStore.get(storeName) || [];

export default (state = initialState, action = {}) => {
  let connections;
  switch (action.type) {
    case actionTypes.ADD_CONNECTION:
      connections = [...state, action.payload];
      persistentStore.set(storeName, connections);
      return connections;
    case actionTypes.EDIT_CONNECTION:
      const index = state.getIndex((conn) => conn.uid === action.payload.uid);
      connections = [...state, (state[index] = action.payload)];
      persistentStore.set(storeName, connections);
      return connections;
    case actionTypes.DELETE_CONNECTION:
      connections = state.filter((conn) => conn.uid !== action.payload);
      persistentStore.set(storeName, connections);
      return connections;
    default:
      persistentStore.set(storeName, state);
      return state;
  }
};
