import Container from "../ui/Container";

import heroImage from "../../assets/images/gallery/hero.jpg";

export default function GalleryHero() {
  return (
    <section className="gallery-hero">

      <Container>

        <div className="gallery-hero__content">

          <p className="gallery-hero__eyebrow">
            Our Gallery
          </p>

          <h1>
            Every Arrangement
            <br />
            Tells A Beautiful Story
          </h1>

          <p>
            Explore our handcrafted floral creations for weddings,
            celebrations, special occasions, and everyday moments.
          </p>

        </div>

      </Container>

      <div className="gallery-hero__image">

        <img
          src={heroImage}
          alt="Floral Gallery"
        />

      </div>

    </section>
  );
}