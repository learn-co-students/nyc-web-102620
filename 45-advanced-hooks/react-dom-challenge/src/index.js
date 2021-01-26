import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { PauseProvider } from "./context/pause";

ReactDOM.render(
  <PauseProvider>
    <App />
  </PauseProvider>,
  document.getElementById("root")
);
