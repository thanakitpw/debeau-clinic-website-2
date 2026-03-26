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
              {/* LINE Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "#06C755" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </div>

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
                style={{ backgroundColor: "#06C755", color: "#fff" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
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
