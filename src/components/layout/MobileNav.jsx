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

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Animated Hamburger Button */}
      <button
        className={`mobile-menu-button ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>

      {/* Backdrop Overlay */}
      <div
        className={`mobile-menu-overlay ${isOpen ? "is-active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-in Navigation Drawer */}
      <div className={`mobile-menu-drawer ${isOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav-content">
          <div className="mobile-nav-header">
            <span className="brand-label">Menu</span>
          </div>

          <div className="mobile-nav-links">
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
            
            <div className="mobile-cta-wrapper">
              {/* 
                We wrap the Button in a div with an onClick. 
                This ensures that even if the Button component 
                doesn't forward the onClick prop correctly, 
                the click on this area will still close the menu.
              */}
              <div onClick={closeMenu} style={{ width: '100%' }}>
                <Button to="/reservation" className="btn-full-width">
                  Reserve Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Optional Footer inside menu */}
          <div className="mobile-nav-footer">
            <p>© 2026 Patlat AlKuwait Floral Boutique. All Rights Reserved.</p>
          </div>
        </nav>
      </div>
    </>
  );
}