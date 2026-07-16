export default function GalleryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  // Logic for the Mobile Stepper
  const currentIndex = categories.indexOf(activeCategory);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + categories.length) % categories.length;
    onCategoryChange(categories[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % categories.length;
    onCategoryChange(categories[newIndex]);
  };

  return (
    <div className="gallery-filter-wrapper">
      
      {/* --- DESKTOP/TABLET VIEW: Grid of Buttons --- */}
      <div className="gallery-filter-desktop">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
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

      {/* --- MOBILE VIEW: Stepper with Arrows --- */}
      <div className="gallery-filter-mobile">
        <button
          type="button"
          className="gallery-filter__arrow"
          onClick={handlePrev}
          aria-label="Previous category"
        >
          ‹
        </button>

        <div className="gallery-filter__label">
          {activeCategory}
        </div>

        <button
          type="button"
          className="gallery-filter__arrow"
          onClick={handleNext}
          aria-label="Next category"
        >
          ›
        </button>
      </div>

    </div>
  );
}