import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ActiveViewProvider } from "./contexts/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActiveViewProvider>
      <App />
    </ActiveViewProvider>
  </React.StrictMode>
);
