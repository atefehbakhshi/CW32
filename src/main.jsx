import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoginProvider from "./context/LoginContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <App />
  </LoginProvider>
);
