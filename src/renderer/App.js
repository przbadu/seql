import { hot } from "react-hot-loader";
import React from "react";
import { useSelector } from "react-redux";

import AppWelcome from "./components/AppWelcome";
import { AppWrapper, ContentWrapper } from "./App.theme";
import WorkspaceMiniSidebar from "./components/WorkspaceMiniSidebar";
import ModalNewConnection from "./components/ModalNewConnection";

const App = () => {
  const connections = useSelector((state) => state.connections);

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
