import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WrappedApp } from "./WrappedApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
