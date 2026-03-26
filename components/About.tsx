"use client";

import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./MotionWrapper";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

const highlights = [
  "แพทย์เฉพาะทางด้านความงาม ประสบการณ์กว่า 16 ปี",
  "ดูแลทุกเคสด้วยตนเอง ไม่ส่งต่อให้พยาบาล",
  "วางแผนการรักษาเฉพาะบุคคล (Personalized Treatment)",
  "ใช้ผลิตภัณฑ์ได้มาตรฐาน ปลอดภัย นำเข้าจากต่างประเทศ",
  "ผลลัพธ์สวยงาม เป็นธรรมชาติ อยู่นาน",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Full-width split layout */}
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Left - Image */}
        <ScrollReveal direction="left" className="relative h-[400px] lg:h-auto overflow-hidden">
          <Image
            src="/images/doctor-portrait.jpg"
            alt="De Beau Clinic บรรยากาศคลินิก"
            fill
            className="object-cover img-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#69554a]/20 lg:bg-none" />

          {/* Experience badge */}
          <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-7 py-5 shadow-2xl">
            <div className="font-sans text-4xl font-light text-[#c38789]">16+</div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#8b7f7c] mt-1">
              ปีประสบการณ์
            </div>
          </div>

          {/* Cases badge */}
          <div className="absolute top-8 right-8 bg-[#69554a]/95 backdrop-blur-sm px-7 py-5 shadow-2xl">
            <div className="font-sans text-4xl font-light text-white">5K+</div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-white/60 mt-1">
              เคสที่ดูแล
            </div>
          </div>
        </ScrollReveal>

        {/* Right - Content */}
        <div
          className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20"
          style={{ backgroundColor: "#f5f2ef" }}
        >
          <ScrollReveal direction="right" delay={0.15}>
            <div className="max-w-lg">
              <p className="section-label mb-4">About Dr. Beau</p>
              <h2 className="section-heading mb-3">
                เกี่ยวกับ
                <span className="text-[#c38789] italic"> หมอโบ</span>
              </h2>
              <div className="w-12 h-px bg-gradient-to-r from-[#c38789] to-transparent mb-8" />

              <p className="text-[15px] leading-[1.9] font-light text-[#8b7f7c] mb-8">
                หมอโบ มีความเชี่ยวชาญด้านการปรับรูปหน้า และการรักษาทางความงาม
                ด้วยประสบการณ์กว่า 16 ปี หมอดูแลลูกค้าทุกเคสด้วยตนเอง
                เพื่อให้มั่นใจว่าผลลัพธ์ที่ได้ตรงตามความต้องการและปลอดภัยที่สุด
              </p>

              {/* Highlights */}
              <StaggerContainer className="flex flex-col gap-4 mb-10" staggerDelay={0.08}>
                {highlights.map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-[#c38789]"
                      />
                      <span className="text-[14px] leading-relaxed text-[#69554a]">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a href="/about-dr-beau" className="btn-primary">
                  อ่านประวัติเพิ่มเติม
                  <ArrowRight size={14} />
                </a>
                <a
                  href="https://line.me/R/ti/p/@debeauclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  ปรึกษาหมอโบ
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
