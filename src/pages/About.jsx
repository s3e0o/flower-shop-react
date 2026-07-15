import AboutHero from "../components/about/AboutHero";
import WhyChooseUs from "../components/about/WhyChooseUs";
import MissionVision from "../components/about/MissionVision";

import EditorialSection from "../components/ui/EditorialSection";
import Container from "../components/ui/Container";

import aboutPage from "../data/aboutPage";

export default function About() {
  return (
    <>
      <AboutHero />

      <section className="section">
        <Container>

          <EditorialSection
            eyebrow={aboutPage.story.eyebrow}
            title={aboutPage.story.title}
            description={aboutPage.story.description}
            image={aboutPage.story.image}
            imageAlt={aboutPage.story.imageAlt}
            highlights={aboutPage.story.highlights}
            button={aboutPage.story.button}
            reverse={aboutPage.story.reverse}
          />

        </Container>
      </section>

      <WhyChooseUs />

      <MissionVision />
    </>
  );
}