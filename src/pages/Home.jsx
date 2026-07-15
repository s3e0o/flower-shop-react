import Hero from "../components/home/sections/Hero";
import FeaturedCollection from "../components/home/sections/FeaturedCollection";
import ServicesPreview from "../components/home/sections/ServicesPreview";
import AboutPreview from "../components/home/sections/AboutPreview";
import GalleryPreview from "../components/home/sections/GalleryPreview";
import VisitPreview from "../components/home/sections/VisitPreview";
import CTA from "../components/home/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedCollection />

      <ServicesPreview />

      <AboutPreview />

      <GalleryPreview />

      <VisitPreview />

      <CTA />
    </>
  );
}