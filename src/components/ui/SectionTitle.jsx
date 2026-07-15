export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && (
        <p className="section-title__eyebrow">
          {eyebrow}
        </p>
      )}

      <h2 className="section-title__heading">
        {title}
      </h2>

      {description && (
        <p className="section-title__description">
          {description}
        </p>
      )}
    </div>
  );
}