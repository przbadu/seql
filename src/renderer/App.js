import { hot } from "react-hot-loader";
import React from "react";

import AppWelcome from "./components/AppWelcome";
import { AppWrapper, ContentWrapper } from "./App.theme";
import WorkspaceMiniSidebar from "./components/WorkspaceMiniSidebar";

const App = () => (
  <AppWrapper>
    <ContentWrapper>
      <WorkspaceMiniSidebar />
      <AppWelcome />
    </ContentWrapper>
  </AppWrapper>
);

export default hot(module)(App);
