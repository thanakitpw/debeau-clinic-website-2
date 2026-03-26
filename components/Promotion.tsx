"use client";

import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import { ScrollReveal } from "./MotionWrapper";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

const promos = [
  {
    badge: "HOT DEAL",
    title: "โปรแกรมฟิลเลอร์ใต้ตา",
    subtitle: "เติมเต็ม ลดรอยหมองคล้ำ",
    desc: "ฟิลเลอร์คุณภาพสูง นำเข้าจากต่างประเทศ ดูแลโดยหมอโบโดยตรง",
    tag: "ฟิลเลอร์",
    image: "/images/promo-filler.png",
  },
  {
    badge: "POPULAR",
    title: "โปรแกรมยกกระชับ Ulthera",
    subtitle: "ยกหน้า กระชับ ไม่ต้องผ่าตัด",
    desc: "เทคโนโลยี HIFU ระดับพรีเมียม ผลลัพธ์ชัดเจน ยาวนาน",
    tag: "Ulthera",
    image: "/images/promo-botox.png",
  },
  {
    badge: "NEW",
    title: "Mesotherapy Cocktail",
    subtitle: "วิตามินบำรุงผิวเข้มข้น",
    desc: "สูตรพิเศษเฉพาะ De Beau Clinic ผิวใส ชุ่มชื้น ลดจุดด่างดำ",
    tag: "Mesotherapy",
    image: "/images/promo-laser.png",
  },
];

export default function Promotion() {
  return (
    <section id="promotion" className="py-28 px-6" style={{ backgroundColor: "#f5f2ef" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="section-label mb-4">Special Offers</p>
            <h2 className="section-heading mb-5">โปรโมชั่นพิเศษ</h2>
            <div className="divider-rose mb-6" />
            <p className="text-[15px] font-light text-[#8b7f7c] max-w-md mx-auto">
              ข้อเสนอพิเศษจาก De Beau Clinic สำหรับลูกค้าทุกท่าน
            </p>
          </div>
        </ScrollReveal>

        {/* Promo Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
          {promos.map((promo, idx) => (
            <StaggerItem key={idx}>
              <div className="group relative flex flex-col bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a2e2b]/50 to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#c38789] text-white text-[10px] tracking-[0.2em] uppercase font-medium">
                    <Tag size={11} />
                    {promo.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-7 flex-1">
                  <h3 className="text-lg font-light text-[#69554a] leading-snug">
                    {promo.title}
                  </h3>
                  <p className="text-[13px] font-medium text-[#c38789]">
                    {promo.subtitle}
                  </p>
                  <p className="text-[14px] leading-relaxed font-light text-[#8b7f7c] flex-1">
                    {promo.desc}
                  </p>

                  {/* Service tag */}
                  <span className="self-start text-[11px] tracking-wider uppercase px-3 py-1 bg-[#c38789]/10 text-[#c38789]">
                    {promo.tag}
                  </span>

                  {/* CTA */}
                  <a
                    href="https://line.me/R/ti/p/@debeauclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[12px] tracking-wider uppercase font-medium text-[#69554a] mt-2 group-hover:text-[#c38789] transition-colors duration-300 cursor-pointer"
                  >
                    สอบถามราคา <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Full Promo CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14">
            <a href="/promotion" className="btn-accent">
              ดูโปรโมชั่นทั้งหมด
              <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
