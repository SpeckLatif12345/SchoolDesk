import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StudentProvider } from "./context/studentContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StudentProvider>
        <App />
      </StudentProvider>
    </BrowserRouter>
  </StrictMode>,
);
