import { NavLink, useLocation } from "react-router-dom";

import Button from "../ui/Button";

export default function DesktopNav() {
  const location = useLocation();

  function handleHomeClick() {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="desktop-nav-wrapper">
      <ul className="desktop-nav">
        <li>
          <NavLink
            to="/"
            onClick={handleHomeClick}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/flowers">
            Collections
          </NavLink>
        </li>

        <li>
          <NavLink to="/services">
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery">
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/visit">
            Visit Us
          </NavLink>
        </li>
      </ul>

      <Button to="/reservation">
        Reserve
      </Button>
    </div>
  );
}