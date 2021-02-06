import { hot } from "react-hot-loader";
import React from "react";
import { MiniSidebar } from "./components/common";

import { WelcomePage } from "./components/pages";
import { AppWrapper, ContentWrapper } from "./App.theme";

const App = () => (
  <AppWrapper>
    <ContentWrapper>
      <MiniSidebar />
      <WelcomePage />
    </ContentWrapper>
  </AppWrapper>
);

export default hot(module)(App);
