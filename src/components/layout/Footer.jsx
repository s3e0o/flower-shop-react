import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <h2>PATLAT ALKUWAIT</h2>

            <p className="footer-tagline">
              Floral Boutique
            </p>

            <p className="footer-description">
              Flowers thoughtfully arranged for life's
              most meaningful celebrations.
            </p>
          </div>

          <div className="footer-contact">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Call Us</a>
            <a href="/visit">Visit Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Patlat AlKuwait Floral Boutique.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}