import gallery from "../../../data/gallery";

import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpg";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";

const images = {
  "gallery1.jpg": gallery1,
  "gallery2.jpg": gallery2,
  "gallery3.jpg": gallery3,
  "gallery4.jpg": gallery4,
  "gallery5.jpg": gallery5,
  "gallery6.jpg": gallery6,
};

export default function GalleryPreview() {
  return (
    <section className="gallery-preview section">
      <Container>

        <SectionTitle
          eyebrow="Gallery"
          title="Moments We've Helped Bloom"
          description="A glimpse into the handcrafted floral arrangements we've created for weddings, celebrations, and meaningful occasions."
        />

        <div className="gallery-preview__grid">

          {gallery.map((item) => (
            <div
              className="gallery-preview__item"
              key={item.id}
            >
              <img
                src={images[item.image]}
                alt={item.alt}
              />
            </div>
          ))}

        </div>

        <div className="gallery-preview__button">
          <Button
            to="/gallery"
            variant="secondary"
          >
            View Full Gallery
          </Button>
        </div>

      </Container>
    </section>
  );
}