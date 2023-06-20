import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { LinearProgress } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LinearProgress />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);