"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  label?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  altBefore = "Before",
  altAfter = "After",
  label,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden cursor-col-resize select-none"
        style={{ aspectRatio: "1/1" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      >
        {/* After image (full, behind) */}
        <div className="absolute inset-0">
          <Image
            src={after}
            alt={altAfter}
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            draggable={false}
          />
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full" style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}>
            <Image
              src={before}
              alt={altBefore}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              draggable={false}
            />
          </div>
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 z-10"
          style={{ left: `${sliderPos}%`, backgroundColor: "#fff", transform: "translateX(-50%)" }}
        />

        {/* Slider handle */}
        <div
          className="absolute top-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          style={{
            left: `${sliderPos}%`,
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(4px)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 5L3 10L7 15" stroke="#69554a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 5L17 10L13 15" stroke="#69554a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* BEFORE / AFTER labels */}
        <div className="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-medium tracking-wider"
          style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#69554a" }}>
          BEFORE
        </div>
        <div className="absolute top-3 right-3 z-10 px-3 py-1 text-xs font-medium tracking-wider"
          style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#c38789" }}>
          AFTER
        </div>
      </div>

      {/* Label */}
      {label && (
        <div className="px-5 py-2 text-sm font-medium rounded-full"
          style={{ backgroundColor: "#c38789", color: "#fff" }}>
          {label}
        </div>
      )}
    </div>
  );
}
