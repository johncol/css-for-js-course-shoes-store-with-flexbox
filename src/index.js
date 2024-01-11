import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";
import { CssVariables } from "./components/GlobalStyles/CssVariables";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
    <CssVariables />
  </React.StrictMode>,
  document.getElementById("root")
);
