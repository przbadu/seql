import { hot } from "react-hot-loader";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "./store/actionType";
import AppWelcome from "./components/AppWelcome";
import { AppWrapper, ContentWrapper } from "./components/styles/AppTheme";
import WorkspaceMiniSidebar from "./components/WorkspaceMiniSidebar";
import ModalNewConnection from "./components/ModalNewConnection";

const App = () => {
  const connections = useSelector((state) => state.connections);
  const dispatch = useDispatch();
  const { activeConnection } = useSelector((state) => state.appSetting);

  useEffect(() => {
    if (connections.length)
      if (Object.entries(activeConnection).length === 0)
        dispatch({
          type: actionTypes.ACTIVE_CONNECTION,
          payload: connections[0],
        });
  }, []);

  return (
    <AppWrapper>
      <ContentWrapper>
        <WorkspaceMiniSidebar />

        {connections.length ? <p>connection present</p> : <AppWelcome />}
      </ContentWrapper>

      <ModalNewConnection />
    </AppWrapper>
  );
};

export default hot(module)(App);
