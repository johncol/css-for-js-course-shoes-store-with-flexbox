import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
