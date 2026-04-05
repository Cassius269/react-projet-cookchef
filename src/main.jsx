import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { StrictMode } from "react";
import { UrlAPIContext } from "./context/UrlAPIContext.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <UrlAPIContext value="https://www.restapi.fr/api/recipes">
      <App />
    </UrlAPIContext>
  </StrictMode>,
);
