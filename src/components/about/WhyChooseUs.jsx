import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import aboutPage from "../../data/aboutPage";

export default function WhyChooseUs() {
  return (
    <section className="why-choose section">

      <Container>

        <SectionTitle
          eyebrow="Why Choose Us"
          title="Thoughtfully Designed For Every Occasion"
          description="Every floral arrangement is created with care, creativity, and a genuine passion for making every celebration unforgettable."
        />

        <div className="why-choose__grid">

          {aboutPage.features.map((feature) => {

            const Icon = feature.icon;

            return (

              <article
                key={feature.id}
                className="why-choose__card"
              >

                <div className="why-choose__icon">

                  <Icon />

                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </article>

            );

          })}

        </div>

      </Container>

    </section>
  );
}