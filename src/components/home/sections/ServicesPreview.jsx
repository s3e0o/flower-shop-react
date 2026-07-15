import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import ServiceCard from "../../services/ServiceCard";

import services from "../../../data/services";

export default function ServicesPreview() {
  return (
    <section className="services-preview section">
      <Container>

        <SectionTitle
          eyebrow="Our Services"
          title="Floral Expertise For Every Occasion"
          description="Whether you're celebrating a milestone or expressing heartfelt emotions, our floral services are thoughtfully designed to create lasting impressions."
        />

        <div className="services-grid">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}