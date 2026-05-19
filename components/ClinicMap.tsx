"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Navigation, Clock, Phone, X, Maximize2 } from "lucide-react";
import { ScrollReveal } from "./MotionWrapper";

const CLINIC = {
  name: "De Beau Aesthetic & Wellness Center",
  address:
    "144 โครงการ Charn ซอย โยธินพัฒนา 3 แยก 2 คลองจั่น บางกะปิ กรุงเทพมหานคร 10240",
  directUrl: "https://maps.app.goo.gl/4x5Jcgwpt9a6gpXg8",
  phone: "097-426-6956",
  hours: "จันทร์–เสาร์ 10:00–19:00 น.",
};

const EMBED_SRC =
  "https://www.google.com/maps?q=De+Beau+Aesthetic+%26+Wellness+Center+%E0%B9%82%E0%B8%A2%E0%B8%98%E0%B8%B4%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2+3&z=16&output=embed";

export default function ClinicMap() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    if (!isZoomOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isZoomOpen]);

  return (
    <>
      <section
        id="location"
        className="py-24 lg:py-28 px-6"
        style={{ backgroundColor: "#f5f2ef" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-label mb-3">Location</p>
              <h2 className="section-heading mb-5">แผนที่คลินิก</h2>
              <div className="divider-rose mb-6" />
              <p className="max-w-xl mx-auto text-[17px] lg:text-[18px] leading-relaxed font-light text-[#4a3a2f]">
                {CLINIC.name}
                <br />
                {CLINIC.address}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left: Custom map image — click to zoom */}
            <ScrollReveal direction="left">
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                aria-label="ขยายดูแผนที่"
                className="group relative w-full h-full overflow-hidden cursor-zoom-in"
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: "#fff",
                  border: "1px solid #e0ddd9",
                }}
              >
                <Image
                  src="/images/clinic-map.jpg"
                  alt="แผนที่ตั้ง De Beau Aesthetic & Wellness Center"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 backdrop-blur-sm transition-opacity group-hover:opacity-100"
                  style={{ backgroundColor: "rgba(195,135,137,0.95)", color: "#fff" }}
                >
                  <Maximize2 size={14} />
                  <span className="text-[13px] font-medium tracking-wider uppercase">
                    คลิกเพื่อขยาย
                  </span>
                </div>
              </button>
            </ScrollReveal>

            {/* Right: Google Maps embed + info */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="flex flex-col gap-5 h-full">
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    backgroundColor: "#3a2e2b",
                  }}
                >
                  <iframe
                    src={EMBED_SRC}
                    title="De Beau Clinic — Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={CLINIC.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 text-[14px] font-semibold tracking-wider uppercase cursor-pointer transition-all hover:opacity-90"
                    style={{ backgroundColor: "#c38789", color: "#fff" }}
                  >
                    <Navigation size={16} />
                    นำทาง
                  </a>
                  <a
                    href={`tel:${CLINIC.phone.replace(/-/g, "")}`}
                    className="flex items-center justify-center gap-2 py-4 text-[14px] font-semibold tracking-wider uppercase cursor-pointer transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "#fff",
                      color: "#4a3a2f",
                      border: "1px solid #e0ddd9",
                    }}
                  >
                    <Phone size={16} />
                    โทร
                  </a>
                  <div
                    className="flex items-center justify-center gap-2 py-4 text-[13px]"
                    style={{
                      backgroundColor: "#fff",
                      color: "#4a3a2f",
                      border: "1px solid #e0ddd9",
                    }}
                  >
                    <Clock size={16} style={{ color: "#c38789" }} />
                    <span className="font-light">{CLINIC.hours}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="แผนที่แบบขยาย"
          onClick={() => setIsZoomOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10 cursor-zoom-out"
          style={{ backgroundColor: "rgba(58,46,43,0.92)" }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomOpen(false);
            }}
            aria-label="ปิดแผนที่"
            className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            style={{ backgroundColor: "#fff", color: "#3a2e2b" }}
          >
            <X size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl"
            style={{ aspectRatio: "4/3", cursor: "default" }}
          >
            <Image
              src="/images/clinic-map.jpg"
              alt="แผนที่ตั้ง De Beau Aesthetic & Wellness Center (ขยาย)"
              fill
              priority
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <a
            href={CLINIC.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 text-[14px] font-semibold tracking-wider uppercase cursor-pointer transition-all hover:opacity-90"
            style={{ backgroundColor: "#c38789", color: "#fff" }}
          >
            <MapPin size={16} />
            เปิดใน Google Maps
          </a>
        </div>
      )}
    </>
  );
}
