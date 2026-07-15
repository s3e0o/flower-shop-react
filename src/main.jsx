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
import "./styles/components/flower-card.css";
import "./styles/components/flower-modal.css";
import "./styles/components/category-filter.css";
import "./styles/components/editorial-section.css";
import "./styles/components/process-section.css";
import "./styles/components/gallery-filter.css";
import "./styles/components/gallery-item.css";
import "./styles/components/gallery-lightbox.css";
import "./styles/components/why-choose-us.css";
import "./styles/components/mission-vision.css";
import "./styles/components/contact-section.css";
import "./styles/components/reservation-summary.css";
import "./styles/components/reservation-form.css";

import "./styles/pages/location.css";
import "./styles/pages/about.css";
import "./styles/pages/gallery.css";
import "./styles/pages/flowers.css";
import "./styles/pages/home.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);