import Button from "../ui/Button";
import { useEffect } from "react";

export default function FlowerModal({
    flower,
    onClose,
}) {
    if (!flower) return null;
    useEffect(() => {
        if (flower) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
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

                        <h3>
                            ₱{flower.price.toLocaleString()}
                        </h3>

                        <Button to="/reservation">
                            Reserve Arrangement
                        </Button>

                    </div>

                </div>

            </div>
        </div>
    );
}