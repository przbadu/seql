import { combineReducers } from "redux";

import connection from "./connectionReducer";
import appSetting from "./appSettingReducer";

export default combineReducers({
  connection,
  appSetting,
});
