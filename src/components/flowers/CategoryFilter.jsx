export default function CategoryFilter({
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
    <div className="category-filter-wrapper">
      
      {/* --- DESKTOP/TABLET VIEW: Grid of Buttons --- */}
      <div className="category-filter-desktop">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-filter__button ${
              activeCategory === category
                ? "category-filter__button--active"
                : ""
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- MOBILE VIEW: Stepper with Arrows --- */}
      <div className="category-filter-mobile">
        <button
          type="button"
          className="category-filter__arrow"
          onClick={handlePrev}
          aria-label="Previous category"
        >
          ‹
        </button>

        <div className="category-filter__label">
          {activeCategory}
        </div>

        <button
          type="button"
          className="category-filter__arrow"
          onClick={handleNext}
          aria-label="Next category"
        >
          ›
        </button>
      </div>

    </div>
  );
}