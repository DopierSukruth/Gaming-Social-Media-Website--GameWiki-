import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css"; // Import the CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure this matches the id in your HTML file
);
