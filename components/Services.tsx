"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, Syringe, Sparkles, Radio, Zap, FlaskConical, Gem, Layers, Droplets, Pipette, Dna, Scale, Pill } from "lucide-react";
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
    image: "/images/service-edit-01.jpg",
  },
  {
    id: 2,
    title: "BOTOX",
    titleTh: "โบท็อกซ์",
    description: "ลดริ้วรอย ยกกระชับกรอบหน้า ปรับรูปหน้าเรียว ลดเหงื่อ ออฟฟิศซินโดรม",
    icon: <Sparkles size={20} />,
    href: "/botox",
    image: "/images/service-edit-02.jpg",
  },
  {
    id: 3,
    title: "PICOSURE / LASER",
    titleTh: "เลเซอร์ พิโคชัวร์",
    description: "เลเซอร์หน้าใส รักษาสิว ฝ้ากระ จุดด่างดำ และยกกระชับผิว",
    icon: <Zap size={20} />,
    href: "/laser",
    image: "/images/service-edit-03.jpg",
  },
  {
    id: 4,
    title: "ULTHERAPY",
    titleTh: "อัลเทอร่า ยกกระชับ",
    description: "ยกกระชับกรอบหน้าและลำคอ ดึงหน้าโดยไม่ต้องผ่าตัด",
    icon: <Radio size={20} />,
    href: "/ulthera",
    image: "/images/service-edit-04.jpg",
  },
  {
    id: 5,
    title: "COLLAGEN BIOSTIMULATOR",
    titleTh: "กระตุ้นคอลลาเจน",
    description: "กระตุ้นการสร้างคอลลาเจน ด้วย Sculptra และ HArmonyCa",
    icon: <Layers size={20} />,
    href: "/collagen-biostimulator",
    image: "/images/service-edit-05.jpg",
  },
  {
    id: 6,
    title: "SKIN BOOSTER",
    titleTh: "งานผิว",
    description: "บำรุงผิวด้วย Skinvive, Rejuran, Plinest พร้อม Set ผิวอินฟลู",
    icon: <Droplets size={20} />,
    href: "/skin-booster",
    image: "/images/service-edit-06.jpg",
  },
  {
    id: 7,
    title: "MESOTHERAPY",
    titleTh: "เมโสเธอราพี",
    description: "ฉีดรักษาฝ้า กระ จุดด่างดำ ฉีดหน้าใส สลายไขมันและลดเหนียง",
    icon: <FlaskConical size={20} />,
    href: "/mesotherapy",
    image: "/images/service-edit-07.jpg",
  },
  {
    id: 8,
    title: "IV DRIP",
    titleTh: "Drip ผิว",
    description: "Premium Aura Bright ผิวขาวกระจ่างใส, Immune Booster, Ultimate",
    icon: <Pipette size={20} />,
    href: "/iv-drip",
    image: "/images/service-edit-08.jpg",
  },
  {
    id: 9,
    title: "FACIAL TREATMENT",
    titleTh: "ทรีตเมนต์ผิวหน้า",
    description: "ผลักวิตามินบำรุง นวดหน้า มาสก์หน้า",
    icon: <Gem size={20} />,
    href: "/facial-treatments",
    image: "/images/service-edit-09.jpg",
  },
  {
    id: 10,
    title: "CELL THERAPY",
    titleTh: "เซลล์บำบัด",
    description: "ฟื้นฟูเซลล์ระดับลึก ชะลอวัย เสริมภูมิคุ้มกัน และดูแลสุขภาพองค์รวม",
    icon: <Dna size={20} />,
    href: "/cell-therapy",
    image: "/images/service-edit-10.jpg",
  },
  {
    id: 11,
    title: "WEIGHT MANAGEMENT",
    titleTh: "ควบคุมน้ำหนักเฉพาะบุคคล",
    description: "โปรแกรมลดน้ำหนักออกแบบเฉพาะบุคคล ดูแลโดยแพทย์ ปลอดภัย เห็นผลจริง",
    icon: <Scale size={20} />,
    href: "/weight-management",
    image: "/images/service-edit-11.jpg",
  },
  {
    id: 12,
    title: "PERSONALIZED VITAMINS",
    titleTh: "วิตามินเฉพาะบุคคล",
    description: "วิเคราะห์ร่างกายและจัดสูตรวิตามินเฉพาะคุณ เติมเต็มสารอาหารที่ขาด",
    icon: <Pill size={20} />,
    href: "/personalized-vitamins",
    image: "/images/service-edit-12.jpg",
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
            <p className="max-w-xl mx-auto text-[17px] lg:text-[18px] leading-relaxed font-light text-[#5d524f]">
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
                <div className="relative overflow-hidden sm:h-56">
                  <Image
                    src={service.image}
                    alt={service.titleTh}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto sm:absolute sm:inset-0 sm:w-full sm:h-full sm:object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7a4f3a]/45 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-7 flex-1">
                  <div>
                    <p className="text-[12px] tracking-[0.25em] uppercase font-semibold text-[#c38789] mb-2">
                      {service.title}
                    </p>
                    <h3 className="text-[24px] lg:text-[26px] text-[#4a3a2f] leading-tight" style={{ fontWeight: 600 }}>
                      {service.titleTh}
                    </h3>
                  </div>
                  <p className="text-[16px] lg:text-[17px] leading-relaxed font-light text-[#4a3a2f] flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[13px] tracking-wider uppercase font-semibold text-[#c38789] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    ดูเพิ่มเติม <ArrowRight size={15} />
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-[2px] bg-gradient-to-r from-[#c38789] to-[#4a3a2f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
