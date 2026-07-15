import { useEffect } from "react";

export default function GalleryLightbox({
    images,
    selectedImage,
    onClose,
    onPrevious,
    onNext,
}) {
    useEffect(() => {
        if (!selectedImage) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(e) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrevious();
            if (e.key === "ArrowRight") onNext();
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage, onClose, onPrevious, onNext]);

    if (!selectedImage) return null;

    return (
        <div
            className="gallery-lightbox-overlay"
            onClick={onClose}
        >
            <div
                className="gallery-lightbox"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="gallery-lightbox__close"
                    onClick={onClose}
                    aria-label="Close gallery"
                >
                    ✕
                </button>

                <button
                    className="gallery-lightbox__nav gallery-lightbox__nav--left"
                    onClick={onPrevious}
                >
                    ‹
                </button>

                <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                />

                <button
                    className="gallery-lightbox__nav gallery-lightbox__nav--right"
                    onClick={onNext}
                >
                    ›
                </button>

                <div className="gallery-lightbox__caption">
                    <span>{selectedImage.category}</span>
                    <h3>{selectedImage.title}</h3>
                </div>
            </div>
        </div>
    );
}