import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ThemeProvider} from "@mui/styles"
import {createTheme, responsiveFontSizes} from "@mui/material/styles"
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";
import {BrowserRouter} from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <CryptoContext>
      <App />
    </CryptoContext>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);