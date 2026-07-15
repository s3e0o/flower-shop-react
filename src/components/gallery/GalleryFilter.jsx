export default function GalleryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="gallery-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`gallery-filter__button ${
            activeCategory === category
              ? "gallery-filter__button--active"
              : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}