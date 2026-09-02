import { useEffect, useState } from "react";

type Props = { images: string[]; title: string };

const Gallery = ({ images, title }: Props) => {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") {
        setOpen((i) => (i === null ? i : (i + 1) % images.length));
      }
      if (e.key === "ArrowLeft") {
        setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="pf-gallery">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="pf-gallery-item"
            onClick={() => setOpen(i)}
            aria-label={`${title} スクリーンショット ${i + 1} を拡大`}
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="pf-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} スクリーンショット`}
          onClick={() => setOpen(null)}
        >
          <img
            src={images[open]}
            alt={`${title} スクリーンショット ${open + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="pf-lightbox-close"
            onClick={() => setOpen(null)}
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
