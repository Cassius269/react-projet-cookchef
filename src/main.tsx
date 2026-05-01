import { createRoot } from "react-dom/client";
import "./assets/styles/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { ROUTER } from "./components/routes.js";

const root = createRoot(document.getElementById("root"))!;

root.render(
  <StrictMode>
    <RouterProvider router={ROUTER}></RouterProvider>
  </StrictMode>,
);
