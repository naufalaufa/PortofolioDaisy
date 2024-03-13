import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "./App.css";
import "./index.css";
import GlobalContextProvider from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
