import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom"; // ✅ change here
import App from "./App";
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
