import { useMemo, useState } from "react";

import flowers from "../data/flowers";
import categories from "../data/flowerCategories";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

import CategoryFilter from "../components/flowers/CategoryFilter";
import FlowerGrid from "../components/flowers/FlowerGrid";
import FlowerModal from "../components/flowers/FlowerModal";

export default function Flowers() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedFlower, setSelectedFlower] = useState(null);

  const filteredFlowers = useMemo(() => {
    if (activeCategory === "All") {
      return flowers;
    }

    return flowers.filter(
      (flower) => flower.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Our Collection"
          title="Flowers For Every Occasion"
          description="Browse our handcrafted floral arrangements, thoughtfully designed to celebrate life's most meaningful moments."
        />

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <FlowerGrid
          flowers={filteredFlowers}
          onView={setSelectedFlower}
        />

        <FlowerModal
          flower={selectedFlower}
          onClose={() => setSelectedFlower(null)}
        />
      </Container>
    </section>
  );
}