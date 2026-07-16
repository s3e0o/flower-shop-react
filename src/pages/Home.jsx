import { useState } from "react";

import Hero from "../components/home/sections/Hero";
import LatestDesigns from "../components/home/sections/LatestDesigns";
import FeaturedCollection from "../components/home/sections/FeaturedCollection";
import ServicesPreview from "../components/home/sections/ServicesPreview";
import AboutPreview from "../components/home/sections/AboutPreview";
import GalleryPreview from "../components/home/sections/GalleryPreview";
import VisitPreview from "../components/home/sections/VisitPreview";
import CTA from "../components/home/sections/CTA";

import FlowerModal from "../components/flowers/FlowerModal";

export default function Home() {
  const [selectedFlower, setSelectedFlower] = useState(null);

  return (
    <>
      <Hero />

      <LatestDesigns
        onView={setSelectedFlower}
      />

      <FeaturedCollection
        onView={setSelectedFlower}
      />

      <ServicesPreview />

      <AboutPreview />

      <GalleryPreview />

      <VisitPreview />

      <CTA />

      <FlowerModal
        flower={selectedFlower}
        onClose={() => setSelectedFlower(null)}
      />
    </>
  );
}