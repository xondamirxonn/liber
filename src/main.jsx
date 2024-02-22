import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./config/global.js";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/mui-theme.js";
import "./index.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);
