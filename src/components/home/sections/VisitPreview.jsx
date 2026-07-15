import business from "../../../data/business";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";

export default function VisitPreview() {
  return (
    <section className="visit-preview section">
      <Container>

        <SectionTitle
          eyebrow="Visit Our Shop"
          title="Let's Create Something Beautiful Together"
          description="Whether you're celebrating a special occasion or simply looking for fresh flowers, we'd love to welcome you."
        />

        <div className="visit-preview__grid">

          <div className="visit-preview__info">

            <div className="visit-item">
              <h3>Address</h3>
              <p>{business.address}</p>
            </div>

            <div className="visit-item">
              <h3>Phone</h3>
              <p>{business.phone}</p>
            </div>

            <div className="visit-item">
              <h3>Email</h3>
              <p>{business.email}</p>
            </div>

            <div className="visit-item">
              <h3>Business Hours</h3>
              <p>{business.hours}</p>
            </div>

            <Button
              href={business.googleMaps}
            >
              Get Directions
            </Button>

          </div>

          <div className="visit-preview__map">

            <div className="map-placeholder">

              Google Map

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}