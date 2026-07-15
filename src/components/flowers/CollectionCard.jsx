import { Link } from "react-router-dom";

export default function CollectionCard({
  title,
  description,
  image,
}) {
  return (
    <article className="collection-card">
      <img
        src={image}
        alt={title}
        className="collection-card__image"
      />

      <div className="collection-card__content">
        <h3>{title}</h3>

        <p>{description}</p>

        <Link
          to="/flowers"
          className="collection-card__link"
        >
          View Collection →
        </Link>
      </div>
    </article>
  );
}