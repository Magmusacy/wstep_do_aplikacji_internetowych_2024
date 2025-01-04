import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Odliczanie from "./components/efekty/Odliczanie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Odliczanie />
  </StrictMode>
);
