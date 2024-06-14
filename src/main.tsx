import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "@context/globalVariable";
import App from "@/App.tsx";
import "@/index.css";
import "@assets/style/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
);
