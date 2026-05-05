"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt?: string;
}

export default function GalleryLightbox({ images, title }: { images: GalleryImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="overflow-hidden cursor-zoom-in focus:outline-none"
            aria-label={`ดูรูป ${img.alt ?? title + " " + (i + 1)}`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? `${title} ${i + 1}`}
              width={0}
              height={0}
              sizes="(max-width: 768px) 50vw, 33vw"
              style={{ width: "100%", height: "auto", display: "block" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setActiveIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition-opacity z-10"
            onClick={() => setActiveIndex(null)}
            aria-label="ปิด"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 text-white opacity-70 hover:opacity-100 transition-opacity z-10"
              onClick={(e) => { e.stopPropagation(); setActiveIndex((activeIndex - 1 + images.length) % images.length); }}
              aria-label="รูปก่อนหน้า"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-4xl w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt ?? `${title} ${activeIndex + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxHeight: "90vh", objectFit: "contain" }}
            />
            <p className="text-center text-white text-sm mt-3 opacity-50">
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 text-white opacity-70 hover:opacity-100 transition-opacity z-10"
              onClick={(e) => { e.stopPropagation(); setActiveIndex((activeIndex + 1) % images.length); }}
              aria-label="รูปถัดไป"
            >
              <ChevronRight size={48} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
