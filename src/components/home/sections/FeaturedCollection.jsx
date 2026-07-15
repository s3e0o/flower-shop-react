import wedding from "../../../assets/images/wedding.jpg";
import birthday from "../../../assets/images/birthday.jpg";
import sympathy from "../../../assets/images/sympathy.jpg";

import featuredCollections from "../../../data/featuredCollections";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import CollectionCard from "../../flowers/CollectionCard";

const images = {
  "wedding.jpg": wedding,
  "birthday.jpg": birthday,
  "sympathy.jpg": sympathy,
};

export default function FeaturedCollection() {
  return (
    <section className="featured-collection section">
      <Container>

        <SectionTitle
          eyebrow="Featured Collection"
          title="Flowers Designed For Every Occasion"
          description="Discover handcrafted floral arrangements thoughtfully created for life's most meaningful celebrations."
        />

        <div className="collection-grid">
          {featuredCollections.map((collection) => (
            <CollectionCard
              key={collection.id}
              title={collection.title}
              description={collection.description}
              image={images[collection.image]}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}