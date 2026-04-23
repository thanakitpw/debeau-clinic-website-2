"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, Syringe, Sparkles, Radio, Zap, FlaskConical, Gem, Layers, Droplets, Pipette } from "lucide-react";
import { ScrollReveal } from "./MotionWrapper";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

const services: {
  id: number;
  title: string;
  titleTh: string;
  description: string;
  icon: ReactNode;
  href: string;
  image: string;
}[] = [
  {
    id: 1,
    title: "FILLER",
    titleTh: "ฟิลเลอร์",
    description: "ฉีดฟิลเลอร์ตามจุดต่างๆ ปรับรูปหน้า สลายและแก้ไขฟิลเลอร์",
    icon: <Syringe size={20} />,
    href: "/filler",
    image: "/images/service-filler.png",
  },
  {
    id: 2,
    title: "BOTOX",
    titleTh: "โบท็อกซ์",
    description: "ลดริ้วรอย ยกกระชับกรอบหน้า ปรับรูปหน้าเรียว ลดเหงื่อ ออฟฟิศซินโดรม",
    icon: <Sparkles size={20} />,
    href: "/botox",
    image: "/images/service-botox.png",
  },
  {
    id: 3,
    title: "PICOSURE / LASER",
    titleTh: "เลเซอร์ พิโคชัวร์",
    description: "เลเซอร์หน้าใส รักษาสิว ฝ้ากระ จุดด่างดำ และยกกระชับผิว",
    icon: <Zap size={20} />,
    href: "/laser",
    image: "/images/service-laser-brightening.png",
  },
  {
    id: 4,
    title: "ULTHERAPY",
    titleTh: "อัลเทอร่า ยกกระชับ",
    description: "ยกกระชับกรอบหน้าและลำคอ ดึงหน้าโดยไม่ต้องผ่าตัด",
    icon: <Radio size={20} />,
    href: "/ulthera",
    image: "/images/service-laser-tightening.png",
  },
  {
    id: 5,
    title: "COLLAGEN BIOSTIMULATOR",
    titleTh: "กระตุ้นคอลลาเจน",
    description: "กระตุ้นการสร้างคอลลาเจน ด้วย Sculptra และ HArmonyCa",
    icon: <Layers size={20} />,
    href: "/collagen-biostimulator",
    image: "/images/service-filler.png",
  },
  {
    id: 6,
    title: "SKIN BOOSTER",
    titleTh: "งานผิว",
    description: "บำรุงผิวด้วย Skinvive, Rejuran, Plinest พร้อม Set ผิวอินฟลู",
    icon: <Droplets size={20} />,
    href: "/skin-booster",
    image: "/images/service-mesotherapy.png",
  },
  {
    id: 7,
    title: "MESOTHERAPY",
    titleTh: "เมโสเธอราพี",
    description: "ฉีดรักษาฝ้า กระ จุดด่างดำ ฉีดหน้าใส สลายไขมันและลดเหนียง",
    icon: <FlaskConical size={20} />,
    href: "/mesotherapy",
    image: "/images/service-mesotherapy.png",
  },
  {
    id: 8,
    title: "IV DRIP",
    titleTh: "Drip ผิว",
    description: "Premium Aura Bright ผิวขาวกระจ่างใส, Immune Booster, Ultimate",
    icon: <Pipette size={20} />,
    href: "/iv-drip",
    image: "/images/treatment-room.png",
  },
  {
    id: 9,
    title: "FACIAL TREATMENT",
    titleTh: "ทรีตเมนต์ผิวหน้า",
    description: "ผลักวิตามินบำรุง นวดหน้า มาสก์หน้า",
    icon: <Gem size={20} />,
    href: "/facial-treatments",
    image: "/images/service-facial.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="section-label mb-4">Our Services</p>
            <h2 className="section-heading mb-5">บริการของเรา</h2>
            <div className="divider-rose mb-6" />
            <p className="max-w-xl mx-auto text-[17px] lg:text-[18px] leading-relaxed font-light text-[#8b7f7c]">
              บริการครบครัน ดูแลโดยแพทย์ผู้เชี่ยวชาญ
              ให้คำปรึกษาและวางแผนการรักษาเฉพาะบุคคล
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e7e5]"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <a
                href={service.href}
                className="group relative flex flex-col bg-white overflow-hidden cursor-pointer h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.titleTh}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a2e2b]/60 via-transparent to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute top-5 left-5 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#c38789]">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-7 flex-1">
                  <div>
                    <p className="text-[12px] tracking-[0.25em] uppercase font-semibold text-[#c38789] mb-2">
                      {service.title}
                    </p>
                    <h3 className="text-[24px] lg:text-[26px] font-medium text-[#69554a] leading-tight">
                      {service.titleTh}
                    </h3>
                  </div>
                  <p className="text-[16px] lg:text-[17px] leading-relaxed font-light text-[#69554a] flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[13px] tracking-wider uppercase font-semibold text-[#c38789] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    ดูเพิ่มเติม <ArrowRight size={15} />
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-[2px] bg-gradient-to-r from-[#c38789] to-[#69554a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
