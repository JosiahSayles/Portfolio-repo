import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import React from "react";
import "./src/index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
