export default function GalleryItem({
  item,
  onOpen,
}) {
  return (
    <article
      className="gallery-item"
      onClick={() => onOpen(item)}
    >
      <img
        src={item.image}
        alt={item.title}
      />

      <div className="gallery-item__overlay">

        <span>{item.category}</span>

        <h3>{item.title}</h3>

      </div>

    </article>
  );
}