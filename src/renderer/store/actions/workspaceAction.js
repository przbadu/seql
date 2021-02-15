import * as actionTypes from "../actionType";
import Connection from "../../ipc-api/Connection";

export const connectAndGetStructure = (conn) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_DATABASE });
  const res = await Connection.connect(conn);
  if (res.status === "error") {
    dispatch({
      type: actionTypes.FETCHING_DATABASE_ERROR,
      payload: res.message,
    });
  } else {
    dispatch({ type: actionTypes.FETCHING_DATABASE_SUCCESS, payload: res });
  }
};
