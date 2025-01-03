import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Aktualizacja from "./components/inne/Aktualizacja";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Aktualizacja />
  </StrictMode>
);
