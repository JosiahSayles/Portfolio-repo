import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";

createRoot(document.getElemetById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
