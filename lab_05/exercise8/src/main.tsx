import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Licznik from "./components/Licznik";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Licznik />
  </StrictMode>
);
