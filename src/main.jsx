import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/base/reset.css";
import "./styles/base/variables.css";
import "./styles/base/typography.css";

import "./styles/layout/layout.css";
import "./styles/layout/navbar.css";
import "./styles/layout/footer.css";

import "./styles/components/button.css";
import "./styles/components/collection-card.css";
import "./styles/components/section-title.css";
import "./styles/components/service-card.css";

import "./styles/pages/home.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);