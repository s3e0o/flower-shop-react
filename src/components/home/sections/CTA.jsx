import business from "../../../data/business";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

export default function CTA() {
  return (
    <section className="homepage-cta section">
      <Container>

        <div className="homepage-cta__content">

          <p className="homepage-cta__eyebrow">
            Ready to Order?
          </p>

          <h2 className="homepage-cta__title">
            Let's Make Every
            <br />
            Occasion Bloom
          </h2>

          <p className="homepage-cta__description">
            Whether you're celebrating a milestone,
            expressing gratitude, or sending love,
            our handcrafted floral arrangements are
            designed to make every moment unforgettable.
          </p>

          <div className="homepage-cta__actions">

            <Button to="/reservation">
              Reserve Now
            </Button>

            <Button
              href={`tel:${business.phone}`}
              variant="secondary"
            >
              Call Us
            </Button>

          </div>

        </div>

      </Container>
    </section>
  );
}