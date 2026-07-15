import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "../ui/Button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        >
        {isOpen ? "✕" : "☰"}
    </button>

      <div
        className={`mobile-menu-overlay ${
          isOpen ? "mobile-menu-overlay--active" : ""
        }`}
        onClick={closeMenu}
      >
        <div
          className="mobile-menu"
          onClick={(e) => e.stopPropagation()}
        >

          <nav className="mobile-nav-links">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/flowers" onClick={closeMenu}>
              Collections
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>

            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/visit" onClick={closeMenu}>
              Visit Us
            </NavLink>

            <Button to="/reservation" onClick={closeMenu}>
              Reserve
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}