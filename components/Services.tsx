"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, Syringe, Sparkles, Radio, Zap, FlaskConical, Gem } from "lucide-react";
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
    description: "เติมเต็มใต้ตา ขมับตอบ แก้มตอบ ร่องแก้ม คาง ริมฝีปาก และปรับรูปหน้า",
    icon: <Syringe size={20} />,
    href: "/filler",
    image: "/images/service-filler.png",
  },
  {
    id: 2,
    title: "BOTOX",
    titleTh: "ลดริ้วรอย",
    description: "ลดริ้วรอยหน้าผาก ระหว่างคิ้ว หางตา ลดกรามปรับรูปหน้าเรียว ยกกระชับหน้า",
    icon: <Sparkles size={20} />,
    href: "/botox",
    image: "/images/service-botox.png",
  },
  {
    id: 3,
    title: "LASER",
    titleTh: "เลเซอร์หน้าใส ฝ้ากระ",
    description: "รักษาฝ้า กระ จุดด่างดำ รอยสิว ด้วย Picosure และ Helios เทคโนโลยีเลเซอร์ระดับสากล",
    icon: <Zap size={20} />,
    href: "/laser/skin-brightening",
    image: "/images/service-laser-brightening.png",
  },
  {
    id: 4,
    title: "ULTHERA",
    titleTh: "เลเซอร์ยกกระชับหน้า",
    description: "ยกกระชับหน้าโดยไม่ต้องผ่าตัด ด้วย Ulthera คลื่นเสียงความถี่สูง เห็นผลอยู่นานถึง 1 ปี",
    icon: <Radio size={20} />,
    href: "/laser/skin-tightening",
    image: "/images/service-laser-tightening.png",
  },
  {
    id: 5,
    title: "MESOTHERAPY",
    titleTh: "เมโสเธอราพี",
    description: "หน้าใส ลดเลือนจุดด่างดำ สลายไขมัน ลดเหนียง",
    icon: <FlaskConical size={20} />,
    href: "/mesotherapy",
    image: "/images/service-mesotherapy.png",
  },
  {
    id: 6,
    title: "FACIAL TREATMENT",
    titleTh: "ทรีตเมนต์ผิวหน้า",
    description: "ผลัดเซลล์ผิวเก่า ฟื้นฟูเซลล์ผิวใหม่ คืนความอ่อนเยาว์ให้กับผิว",
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
            <p className="max-w-lg mx-auto text-[15px] leading-relaxed font-light text-[#8b7f7c]">
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
                    <p className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#c38789] mb-1">
                      {service.title}
                    </p>
                    <h3 className="text-xl font-light text-[#69554a]">
                      {service.titleTh}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-relaxed font-light text-[#8b7f7c] flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[12px] tracking-wider uppercase font-medium text-[#c38789] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    ดูเพิ่มเติม <ArrowRight size={13} />
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
