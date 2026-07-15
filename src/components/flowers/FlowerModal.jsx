import { useEffect } from "react";
import Button from "../ui/Button";

export default function FlowerModal({
  flower,
  onClose,
}) {
  useEffect(() => {
    if (!flower) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [flower]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!flower) return null;

  return (
    <div
      className="flower-modal-overlay"
      onClick={onClose}
    >
      <div
        className="flower-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="flower-modal__close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flower-modal__grid">
          <img
            src={flower.image}
            alt={flower.name}
          />

          <div>
            <span className="flower-card__category">
              {flower.category}
            </span>

            <h2>{flower.name}</h2>

            <p>{flower.description}</p>

            <h3>₱{flower.price.toLocaleString()}</h3>

            <Button to="/reservation">
              Reserve Arrangement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}