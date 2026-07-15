import { useMemo, useState } from "react";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryFilter from "../components/gallery/GalleryFilter";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryLightbox from "../components/gallery/GalleryLightbox";

import Container from "../components/ui/Container";

import galleryImages from "../data/galleryImages";

const categories = [
  "All",
  "Wedding",
  "Bouquets",
  "Events",
  "Sympathy",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (image) => image.category === activeCategory
    );
  }, [activeCategory]);

  function handlePrevious() {
    const currentIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id
    );

    const previous =
      currentIndex === 0
        ? filteredImages[filteredImages.length - 1]
        : filteredImages[currentIndex - 1];

    setSelectedImage(previous);
  }

  function handleNext() {
    const currentIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id
    );

    const next =
      currentIndex === filteredImages.length - 1
        ? filteredImages[0]
        : filteredImages[currentIndex + 1];

    setSelectedImage(next);
  }

  return (
    <>
      <GalleryHero />

      <section className="section">
        <Container>

          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <GalleryGrid
            images={filteredImages}
            onOpen={setSelectedImage}
          />

        </Container>
      </section>

      <GalleryLightbox
        images={filteredImages}
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  );
}