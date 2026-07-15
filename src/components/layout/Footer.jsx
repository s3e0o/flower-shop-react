import { NavLink } from "react-router-dom";

import {
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

import Container from "../ui/Container";

import footer from "../../data/footer";

export default function Footer() {
  return (
    <footer className="site-footer">

      <Container>

        <div className="footer-grid">

          <div>

            <h2 className="footer-logo">
              {footer.brand.name}
            </h2>

            <p className="footer-description">
              {footer.brand.description}
            </p>

          </div>

          <div>

            <h4>Explore</h4>

            <ul>

              {footer.links.map((link) => (

                <li key={link.label}>

                  <NavLink to={link.to}>
                    {link.label}
                  </NavLink>

                </li>

              ))}

            </ul>

          </div>

          <div>

            <h4>Contact</h4>

            <p>{footer.contact.address}</p>

            <p>{footer.contact.phone}</p>

            <p>{footer.contact.email}</p>

          </div>

          <div>

            <h4>Follow Us</h4>

            <div className="footer-socials">

              <a
                href={`https://wa.me/${footer.social.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href={footer.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>

              <a
                href={footer.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>



            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            {footer.copyright}
          </p>

          <p>
            {footer.developer}
          </p>

        </div>

      </Container>

    </footer>
  );
}