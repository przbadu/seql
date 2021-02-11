import "react-hot-loader";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "spectre.css";

import "./i18n";
import store from "./store";
import { lightTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/global";
import App from "./App";
import BaseLoader from "./components/BaseLoader";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Suspense fallback={<BaseLoader />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
