import { combineReducers } from "redux";

import connections from "./connectionsReducer";
import appSetting from "./appSettingReducer";
import workspace from "./workspaceReducer";

export default combineReducers({
  connections,
  appSetting,
  workspace,
});
