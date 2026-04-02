"use client";

import Image from "next/image";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { ScrollReveal } from "./MotionWrapper";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

const contactInfo = [
  {
    icon: Phone,
    label: "โทรศัพท์",
    value: "097-426-6956, 097-429-5645",
    href: "tel:097-426-6956",
  },
  {
    icon: MapPin,
    label: "ที่ตั้งคลินิก",
    value: "249 อาคาร 24 house ชั้น 1 ซอย โยธินพัฒนา1 บางกะปิ กรุงเทพฯ 10240",
    href: "/contact-us",
  },
  {
    icon: Clock,
    label: "เวลาทำการ",
    value: "จันทร์–เสาร์ 10:00–19:00 น.",
    href: null,
  },
  {
    icon: MessageCircle,
    label: "LINE Official",
    value: "@debeauclinic",
    href: "https://line.me/R/ti/p/@debeauclinic",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left - Image with overlay */}
        <ScrollReveal direction="left" className="relative h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/clinic-photo-1.jpg"
            alt="De Beau Clinic"
            fill
            className="object-cover img-zoom"
          />
          <div className="absolute inset-0 bg-[#69554a]/70" />

          {/* CTA Card overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center max-w-sm">
              <h3 className="font-sans text-3xl font-light text-white mb-3">
                ปรึกษาหมอโบฟรี!
              </h3>
              <p className="text-[15px] font-light text-white/60 leading-relaxed mb-8">
                ADD LINE เพื่อนัดปรึกษา ถามเรื่องการรักษา หรือสอบถามราคาได้เลยค่ะ
                <br />
                หมอโบตอบเองทุกเคส
              </p>

              <a
                href="https://line.me/R/ti/p/@debeauclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 text-[13px] tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg cursor-pointer"
                style={{ backgroundColor: "#c38789", color: "#fff" }}
              >
                ADD LINE @debeauclinic
              </a>

              <p className="text-[11px] tracking-wider text-white/30 mt-4">
                ตอบกลับภายใน 24 ชั่วโมง
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right - Contact Info */}
        <ScrollReveal direction="right" delay={0.1}>
          <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 bg-[#e8e7e5]">
            <div className="max-w-lg">
              <p className="section-label mb-4">Contact Us</p>
              <h2 className="section-heading mb-3">ติดต่อเรา</h2>
              <div className="w-12 h-px bg-gradient-to-r from-[#c38789] to-transparent mb-8" />
              <p className="text-[15px] font-light text-[#8b7f7c] mb-10 leading-relaxed">
                พร้อมให้คำปรึกษาและดูแลคุณ ติดต่อเราได้หลายช่องทาง
              </p>

              <StaggerContainer className="flex flex-col gap-5" staggerDelay={0.1}>
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  const inner = (
                    <div className="flex items-start gap-5 p-5 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                      <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-[#f5f2ef]">
                        <Icon size={20} className="text-[#c38789]" />
                      </div>
                      <div>
                        <p className="text-[11px] tracking-[0.15em] uppercase text-[#c7bfb5] mb-1">
                          {item.label}
                        </p>
                        <p className="text-[15px] font-light text-[#69554a]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <StaggerItem key={idx}>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {inner}
                      </a>
                    </StaggerItem>
                  ) : (
                    <StaggerItem key={idx}>
                      <div>{inner}</div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
