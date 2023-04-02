import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
