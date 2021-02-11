import { combineReducers } from "redux";

import connections from "./connectionsReducer";
import appSetting from "./appSettingReducer";

export default combineReducers({
  connections,
  appSetting,
});
