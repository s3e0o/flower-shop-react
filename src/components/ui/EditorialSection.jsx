import Button from "./Button";

export default function EditorialSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  highlights = [],
  button,
  reverse = false,
}) {
  return (
    <section
      className={`editorial-section ${
        reverse ? "editorial-section--reverse" : ""
      }`}
    >
      <div className="editorial-section__image">
        <img src={image} alt={imageAlt} />
      </div>

      <div className="editorial-section__content">
        {eyebrow && (
          <p className="editorial-section__eyebrow">
            {eyebrow}
          </p>
        )}

        <h2>{title}</h2>

        <p className="editorial-section__description">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="editorial-section__highlights">
            {highlights.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        )}

        {button && (
          <Button
            to={button.to}
            variant="secondary"
          >
            {button.label}
          </Button>
        )}
      </div>
    </section>
  );
}