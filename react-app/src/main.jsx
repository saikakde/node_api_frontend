import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.scss";
// import { createContext } from "react";

export const server = "https://nodejs-todoapp-k9f7.onrender.com/api/v1";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
