import heroImage from "../../../assets/images/hero-flowers.jpg";
import hero from "../../../data/hero";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <p className="hero__eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__title">{hero.title}</h1>

          <p className="hero__description">{hero.description}</p>

          <div className="hero__actions">
            <Button to={hero.primaryAction.to}>
              {hero.primaryAction.label}
            </Button>

            <Button
              to={hero.secondaryAction.to}
              variant="secondary"
            >
              {hero.secondaryAction.label}
            </Button>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <img
            className="hero__image"
            src={heroImage}
            alt={hero.imageAlt}
          />
        </div>
      </Container>
    </section>
  );
}