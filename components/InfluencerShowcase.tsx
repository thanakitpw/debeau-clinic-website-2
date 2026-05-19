import Image from "next/image";
import { ScrollReveal } from "./MotionWrapper";

type Photo = { src: string; alt: string; size?: "big" };

const photos: Photo[] = [
  { src: "/images/influencers/inf-new-1.jpg", alt: "ลูกค้า De Beau Clinic", size: "big" },
  { src: "/images/influencers/inf-new-2.jpg", alt: "ลูกค้า De Beau Clinic" },
  { src: "/images/influencers/inf-new-3.jpg", alt: "ลูกค้า De Beau Clinic" },
  { src: "/images/influencers/inf-new-4.jpg", alt: "ลูกค้า De Beau Clinic" },
  { src: "/images/influencers/inf-new-5.jpg", alt: "ลูกค้า De Beau Clinic" },
  { src: "/images/influencers/inf-new-6.webp", alt: "ลูกค้า De Beau Clinic" },
  { src: "/images/influencers/inf-new-7.webp", alt: "ลูกค้า De Beau Clinic" },
  { src: "/images/influencers/inf-new-8.webp", alt: "ลูกค้า De Beau Clinic" },
  { src: "/images/influencers/inf-new-9.webp", alt: "ลูกค้า De Beau Clinic" },
];

export default function InfluencerShowcase() {
  return (
    <section className="py-20 lg:py-24 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-10 lg:mb-14 max-w-3xl mx-auto">
            <span className="flex-1 h-px" style={{ backgroundColor: "#d9cdc4" }} />
            <p
              className="text-[12px] lg:text-[13px] tracking-[0.4em] uppercase font-semibold whitespace-nowrap"
              style={{ color: "#c38789" }}
            >
              Our Lovely Guests
            </p>
            <span className="flex-1 h-px" style={{ backgroundColor: "#d9cdc4" }} />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 [grid-auto-flow:dense]">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={`relative overflow-hidden bg-[#f5f2ef] aspect-square ${
                p.size === "big" ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={i < 2}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] lg:text-[14px] font-light mt-10 lg:mt-12" style={{ color: "#5d524f" }}>
          ส่งต่อความมั่นใจของคุณกับ De Beau Clinic เพียง Tag หรือ Mention{" "}
          <span className="font-medium" style={{ color: "#c38789" }}>
            @debeauclinic
          </span>
        </p>
      </div>
    </section>
  );
}
