import Container from "../ui/Container";

import heroImage from "../../assets/images/location/hero.jpg";

export default function LocationHero() {
  return (
    <section className="location-hero">
      <Container>

        <div className="location-hero__content">

          <p className="location-hero__eyebrow">
            Visit Us
          </p>

          <h1>
            Beautiful Flowers
            <br />
            Are Only A Visit Away
          </h1>

          <p>
            Stop by our boutique and explore handcrafted floral
            arrangements designed for every special occasion.
          </p>

        </div>

      </Container>

      <div className="location-hero__image">
        <img
          src={heroImage}
          alt="KP Patlat Floral Boutique"
        />
      </div>
    </section>
  );
}