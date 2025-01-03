import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StudentManager from "./components/studenci/StudentManager";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StudentManager />
  </StrictMode>
);
