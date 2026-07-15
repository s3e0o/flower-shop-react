import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import EditorialSection from "../components/ui/EditorialSection";
import ProcessSection from "../components/services/ProcessSection";

import servicesPage from "../data/servicesPage";

export default function Services() {
  return (
    <>
      <section className="section">
        <Container>

          <SectionTitle
            eyebrow="Our Services"
            title="Thoughtfully Crafted Floral Experiences"
            description="Every arrangement is carefully designed to celebrate life's most meaningful occasions. From everyday bouquets to grand celebrations, we're here to help every moment bloom."
          />

          {servicesPage.map((service) => (
            <EditorialSection
              key={service.id}
              eyebrow={service.eyebrow}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
              highlights={service.highlights}
              button={service.button}
              reverse={service.reverse}
            />
          ))}

          <ProcessSection />
        </Container>
      </section>
    </>
  );
}