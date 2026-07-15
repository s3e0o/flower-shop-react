import { FiArrowRight } from "react-icons/fi";

export default function FlowerCard({
  flower,
  onView,
}) {
  return (
    <article
      className="flower-card"
      onClick={() => onView(flower)}
    >
      <div className="flower-card__image-wrapper">
        <img
          src={flower.image}
          alt={flower.name}
          className="flower-card__image"
        />
      </div>

      <div className="flower-card__content">

        <span
          className={`flower-card__category flower-card__category--${flower.category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {flower.category}
        </span>

        <h3 className="flower-card__title">
          {flower.name}
        </h3>

        <p className="flower-card__description">
          {flower.description}
        </p>

        <div className="flower-card__footer">

          <p className="flower-card__price">
            ₱{flower.price.toLocaleString()}
          </p>

          <span className="flower-card__link">
            Reserve Arrangement

            <FiArrowRight />
          </span>

        </div>

      </div>
    </article>
  );
}