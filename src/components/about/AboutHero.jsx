import Container from "../ui/Container";

import heroImage from "../../assets/images/about/hero.jpg";

export default function AboutHero() {
  return (
    <section className="about-hero">

      <Container>

        <div className="about-hero__content">

          <p className="about-hero__eyebrow">
            About Us
          </p>

          <h1>
            Flowers Crafted
            <br />
            With Passion
          </h1>

          <p>
            Every bouquet begins with creativity,
            fresh blooms, and the desire to make
            life's special moments even more memorable.
          </p>

        </div>

      </Container>

      <div className="about-hero__image">

        <img
          src={heroImage}
          alt="KP Patlat Floral Boutique"
        />

      </div>

    </section>
  );
}