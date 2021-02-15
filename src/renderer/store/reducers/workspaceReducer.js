import Store from "electron-store";

import * as actionTypes from "../actionType";

// databases: [{name: 'abc', tables: [{size: 1kb, name: 'xyz', columns: [{name: '', type: ''}]}]}]
const initialState = {
  loading: false,
  errors: null,
  databases: [],
  functions: [],
  procedures: [],
  schemas: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCHING_DATABASE:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCHING_DATABASE_SUCCESS:
      const {
        databases,
        functions,
        procedures,
        schemas,
      } = action.payload.response;
      return {
        ...state,
        databases,
        functions,
        procedures,
        schemas,
        loading: false,
      };
    case actionTypes.FETCHING_DATABASE_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
