import process from "../../data/process";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function ProcessSection() {
  return (
    <section className="process-section section">

      <Container>

        <SectionTitle
          eyebrow="How We Work"
          title="Simple, Thoughtful, Personal"
          description="From your first inquiry to the final bouquet, we make every step smooth and enjoyable."
        />

        <div className="process-grid">

          {process.map((step) => (

            <article
              key={step.id}
              className="process-card"
            >

              <span className="process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </article>

          ))}

        </div>

      </Container>

    </section>
  );
}