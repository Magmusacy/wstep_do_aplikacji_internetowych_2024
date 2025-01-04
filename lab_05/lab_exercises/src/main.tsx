import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Komentarze from "./components/produkty/Komentarze";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Komentarze />
  </StrictMode>
);
