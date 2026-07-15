import GalleryItem from "./GalleryItem";

export default function GalleryGrid({
  images,
  onOpen,
}) {
  return (
    <div className="gallery-grid">

      {images.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          onOpen={onOpen}
        />
      ))}

    </div>
  );
}