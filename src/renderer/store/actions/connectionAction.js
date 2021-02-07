import * as actionTypes from "../actionType";

export const addConnection = (payload) => (dispatch) => ({
  type: actionTypes.ADD_CONNECTION,
  payload,
});

export const editConnection = (payload) => (dispatch) => ({
  type: actionTypes.EDIT_CONNECTION,
  payload,
});

export const deleteConnection = (payload) => (dispatch) => ({
  type: actionTypes.DELETE_CONNECTION,
  payload,
});
