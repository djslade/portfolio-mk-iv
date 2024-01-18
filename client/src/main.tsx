import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MobileNavViewProvider } from "./contexts/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MobileNavViewProvider>
      <App />
    </MobileNavViewProvider>
  </React.StrictMode>
);
