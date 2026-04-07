"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface SectionImageProps {
  src: string;
  alt: string;
}

export default function SectionImage({ src, alt }: SectionImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* รูปแสดงตามสัดส่วนจริง คลิกได้ */}
      <button
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`ดูรูป ${alt} ขนาดเต็ม`}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          style={{ width: "100%", height: "auto" }}
          className="transition-opacity duration-200 hover:opacity-90"
          sizes="(max-width: 1024px) 100vw, 400px"
        />
      </button>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setOpen(false)}
        >
          {/* ปุ่มปิด */}
          <button
            className="absolute top-4 right-4 p-2 transition-opacity hover:opacity-70"
            style={{ color: "#fff" }}
            onClick={() => setOpen(false)}
            aria-label="ปิด"
          >
            <X size={28} />
          </button>

          {/* รูปขนาดใหญ่ */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={900}
              style={{ width: "100%", height: "auto", maxHeight: "90vh", objectFit: "contain" }}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
