import { FiCheck } from "react-icons/fi";

import aboutImage from "../../../assets/images/about.jpg";

import about from "../../../data/about";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

export default function AboutPreview() {
  return (
    <section className="about-preview section">
      <Container>
        <div className="about-preview__grid">

          <div className="about-preview__image">
            <img
              src={aboutImage}
              alt="Florist arranging flowers"
            />
          </div>

          <div className="about-preview__content">

            <p className="about-preview__eyebrow">
              {about.eyebrow}
            </p>

            <h2>
              {about.title}
            </h2>

            <p className="about-preview__description">
              {about.description}
            </p>

            <ul className="about-preview__highlights">

              {about.highlights.map((item) => (

                <li key={item}>

                  <FiCheck />

                  <span>{item}</span>

                </li>

              ))}

            </ul>

            <Button
              to={about.button.to}
              variant="secondary"
            >
              {about.button.label}
            </Button>

          </div>

        </div>
      </Container>
    </section>
  );
}