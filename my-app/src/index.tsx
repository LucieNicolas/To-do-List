import React from "react";
import ReactDOM from "react-dom/client";
import App from "./page/App";
import reportWebVitals from "./reportWebVitals";
import "./style/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
