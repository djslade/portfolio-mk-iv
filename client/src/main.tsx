import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ActiveViewProvider, MobileNavViewProvider } from "./contexts/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActiveViewProvider>
      <MobileNavViewProvider>
        <App />
      </MobileNavViewProvider>
    </ActiveViewProvider>
  </React.StrictMode>
);
