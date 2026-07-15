import Container from "../ui/Container";

import aboutPage from "../../data/aboutPage";

export default function MissionVision() {
  return (
    <section className="mission-vision section">

      <Container>

        <div className="mission-card">

          <p className="mission-card__eyebrow">
            {aboutPage.mission.eyebrow}
          </p>

          <h2>
            {aboutPage.mission.title}
          </h2>

          <p>
            {aboutPage.mission.description}
          </p>

        </div>

        <div className="mission-card">

          <p className="mission-card__eyebrow">
            {aboutPage.vision.eyebrow}
          </p>

          <h2>
            {aboutPage.vision.title}
          </h2>

          <p>
            {aboutPage.vision.description}
          </p>

        </div>

      </Container>

    </section>
  );
}