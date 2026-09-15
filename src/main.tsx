import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/tokens.css";
import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import "./assets/styles/corporate.css";
import "./assets/styles/animations.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
