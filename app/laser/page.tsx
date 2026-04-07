import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

// Metadata ตรงกับเว็บเดิม debeauclinic.com/laser/
export const metadata: Metadata = {
  title: "ทำ Laser หน้าใส ดูแลปัญหาผิวหน้าที่ เดอโบ คลินิค | DE BEAU CLINIC",
  description:
    "การทำ Laser ถือเป็นอีกหนึ่งทางเลือกสำหรับผู้ที่มีปัญหาผิวต่างๆ ที่ได้รับความนิยมต่อเนื่อง เพราะช่วยแก้ปัญหาทั้งเรื่องริ้วรอยแห่งวัย ฝ้า กระแดด และรอยแผลจากสิว ด้วยประสบการณ์มากกว่า 10 ปี ที่เดอโบคลินิก",
};

const LINE_URL = "https://line.me/R/ti/p/@debeauclinic";

// โปรแกรมเลเซอร์ทั้งหมดตามเว็บเดิม
const laserPrograms = [
  {
    number: "01",
    title: "MELASMA PROGRAM",
    titleTh: "โปรแกรมรักษาฝ้า",
    description:
      "ฝ้า เป็นรอยแผ่นสีน้ำตาลเทาบนใบหน้า (บริเวณโหนกแก้ม หน้าผาก หนวด) เกิดจากการสัมผัสแสงแดดหรือรังสี UV นอกจากนี้ยังเกี่ยวข้องกับปัจจัยทางพันธุกรรมและฮอร์โมน ฝ้าเป็นโรคผิวหนังที่รักษายาก แต่สามารถควบคุมให้ไม่กระจายและทำให้จางลงได้ ที่เดอโบคลินิกใช้การรักษาหลายวิธีร่วมกัน ทั้งยาทาลดเม็ดสีและ Laser โปรแกรมเฉพาะบุคคล",
    tech: "Fractional Q Switch ND YAG / HELIOS",
    accent: "#c38789",
  },
  {
    number: "02",
    title: "FRACTIONAL Q SWITCH ND YAG LASER / HELIOS",
    titleTh: "เลเซอร์รักษาเม็ดสีชั้นลึก",
    description:
      "เครื่องเลเซอร์ที่ใช้เทคโนโลยีชนิดพิเศษ ช่วยลดผลข้างเคียงจาก Q-Switch แบบเดิม โดยใช้เทคโนโลยี FRACTIONAL ผ่าน DOE LENS เพื่อรักษาความผิดปกติของเม็ดสีในชั้นลึก ได้รับการรับรองจาก US FDA ขณะรักษาจะรู้สึกอุ่นๆ และอาจมีอาการแสบร้อนเล็กน้อยที่ค่อยๆ บรรเทาลงภายใน 30–60 นาที แนะนำให้รักษาทุก 2–4 สัปดาห์",
    tech: "DOE Lens Technology — FDA Approved",
    accent: "#c38789",
  },
  {
    number: "03",
    title: "FRAXEL",
    titleTh: "รักษารอยแผลเป็น หลุมสิว รูขุมขนกว้าง",
    description:
      "โปรแกรมรักษาปัญหารอยแผลเป็น หลุมสิว รูขุมขนกว้าง และผิวไม่เรียบ โดยใช้ Erbium Glass Fiber Laser ความยาวคลื่น 1,550 นาโนเมตร ที่ปล่อยคลื่นแสงลงในชั้นคอลลาเจน กระตุ้น Fractional Photothermolysis สร้างคอลลาเจนใหม่ หลังการรักษาผิวจะมีสีอมชมพูประมาณ 2–3 วัน และลอกหลุดภายใน 7–10 วัน แนะนำทาครีมบำรุงและ SPF 50+ ทุกวัน",
    tech: "Erbium Glass Fiber Laser 1,550 nm",
    accent: "#69554a",
  },
  {
    number: "04",
    title: "ACNE PROGRAM",
    titleTh: "โปรแกรมรักษาสิว",
    description:
      "ช่วยลดรอยดำและรอยแดงสิว พร้อมทั้งฆ่าเชื้อแบคทีเรีย P.acne ในชั้นผิว ทำการรักษาเพียง 20 นาที โดยไม่มีร่องรอยหรือบาดแผล หลังการรักษาสามารถแต่งหน้าได้ทันที เหมาะสำหรับผู้ที่มีปัญหาสิวอักเสบเรื้อรัง รอยแดงจากสิว หรือสิวที่ยังหลงเหลืออยู่ แนะนำให้ทำทุก 2–4 สัปดาห์อย่างต่อเนื่อง",
    tech: "Lumenis ONE",
    accent: "#c38789",
  },
  {
    number: "05",
    title: "HAIR REMOVAL PROGRAM",
    titleTh: "โปรแกรมกำจัดขน รักแร้เนียน ขาวใส",
    description:
      "โปรแกรมกำจัดขนพร้อมรักแร้เนียน ขาวใส โดยพลังงานเลเซอร์จะถูกส่งเข้าไปใต้ชั้นผิวทำให้รากขนฝ่อ เส้นขนหลุดร่วง และผิวรักแร้ขาวขึ้น ช่วยให้รูขุมขนกระชับ ทำการรักษาเดือนละ 1 ครั้ง ประมาณ 5–7 ครั้ง ขนที่งอกใหม่จะบางลง อ่อนนุ่ม และเบาบางลงอย่างเห็นได้ชัด",
    tech: "Laser Hair Removal",
    accent: "#69554a",
  },
];

// การ์ดลิงก์ไปยังหน้าย่อย
const laserSubPages = [
  {
    title: "เลเซอร์หน้าใส ฝ้ากระ",
    titleEn: "Skin Brightening Laser",
    description:
      "รักษาฝ้า กระ จุดด่างดำ รอยสิว ผิวหมองคล้ำ ด้วยเทคโนโลยี Fractional Q-Switch ND YAG/Helios, Picosure, Fraxel และ Lumenis ONE ผ่าน US FDA",
    href: "/laser/skin-brightening",
    accent: "#c38789",
    image: "/images/scraped/laser/LAser-Template-No.01-e1623997021140.jpg",
  },
  {
    title: "เลเซอร์ยกกระชับหน้า",
    titleEn: "Ulthera — Skin Tightening",
    description:
      "ยกกระชับใบหน้าโดยไม่ต้องผ่าตัด ด้วย Micro Focused Ultrasound (MFU-V) ส่งคลื่นเสียงลงชั้น SMAS ลึก 3–4.5 มม. เห็นผล 2–3 เดือน อยู่นาน 1 ปี",
    href: "/laser/skin-tightening",
    accent: "#69554a",
    image: "/images/scraped/laser/LAser-Template-No.02-1024x427.jpg",
  },
];

export default function LaserHubPage() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#e8e7e5" }}>

        {/* ── Hero Section ── */}
        <section
          className="relative pt-36 pb-20 px-6 overflow-hidden"
          style={{ backgroundColor: "#69554a" }}
        >
          {/* เส้นตกแต่งด้านบน */}
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, #c38789, transparent)",
            }}
          />
          {/* gradient ตกแต่งพื้นหลัง */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at top right, #c38789 0%, transparent 60%)",
            }}
          />

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-xs tracking-wider mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <Link
                href="/"
                className="hover:text-white transition-colors cursor-pointer"
              >
                หน้าแรก
              </Link>
              <span>/</span>
              <span style={{ color: "#c38789" }}>เลเซอร์</span>
            </nav>

            {/* Badge */}
            <span
              className="inline-block text-xs tracking-[0.3em] uppercase font-medium px-4 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(195,135,137,0.2)",
                color: "#c38789",
              }}
            >
              Laser Treatments
            </span>

            {/* หัวข้อหลัก — ตรงกับ title เว็บเดิม */}
            <h1
              className="font-sans text-4xl lg:text-6xl font-light leading-tight tracking-wide mb-4"
              style={{ color: "#fff" }}
            >
              ทำ Laser หน้าใส
            </h1>

            <p
              className="text-sm tracking-[0.2em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Clear Skin Laser Treatment — Advanced Technology
            </p>

            {/* คำอธิบายตรงกับเว็บเดิม */}
            <p
              className="text-base lg:text-lg font-light leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              การทำ Laser ถือเป็นอีกหนึ่งทางเลือกสำหรับผู้ที่มีปัญหาผิวต่างๆ
              ที่ได้รับความนิยมต่อเนื่อง เพราะช่วยแก้ปัญหาทั้งเรื่องริ้วรอยแห่งวัย
              ฝ้า กระแดด และรอยแผลจากสิว
              ที่เดอโบคลินิกเราถือเป็นผู้เชี่ยวชาญด้านการรักษาผิวหน้าด้วย Laser
              โดยเฉพาะ ด้วยประสบการณ์มากกว่า 16 ปี
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3 text-sm tracking-wider font-medium cursor-pointer transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#c38789", color: "#fff" }}
              >
                ปรึกษาหมอโบฟรี
                <ArrowRight size={16} />
              </a>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-wider font-medium cursor-pointer transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
              >
                ดูบริการทั้งหมด
              </Link>
            </div>
          </div>
        </section>

        {/* ── Banner Image จากเว็บเดิม ── */}
        <section className="px-0" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-5xl mx-auto px-6 pt-12">
            <div
              className="w-full overflow-hidden relative"
              style={{ minHeight: "280px" }}
            >
              <Image
                src="/images/scraped/laser/Big-Banner-09-1-e1623997211189.jpg"
                alt="บริการเลเซอร์ เดอโบคลินิก — Clear Skin Laser Treatment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── โปรแกรม Laser ทั้งหมด (จากเว็บเดิม) ── */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p
                className="text-[11px] tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: "#c38789" }}
              >
                Laser Programs
              </p>
              <h2
                className="font-sans text-2xl lg:text-3xl font-light"
                style={{ color: "#69554a" }}
              >
                โปรแกรมเลเซอร์ที่ให้บริการ
              </h2>
              <div
                className="w-12 h-[2px] mx-auto mt-5"
                style={{
                  background: "linear-gradient(to right, #c38789, #69554a)",
                }}
              />
            </div>

            {/* รายการโปรแกรม */}
            <div className="flex flex-col gap-8">
              {laserPrograms.map((program) => (
                <div
                  key={program.number}
                  className="flex flex-col lg:flex-row gap-0 overflow-hidden"
                  style={{ border: "1px solid #e0ddd9" }}
                >
                  {/* หมายเลข */}
                  <div
                    className="lg:w-[100px] flex items-center justify-center py-8 lg:py-0 shrink-0"
                    style={{ backgroundColor: program.accent }}
                  >
                    <span
                      className="font-sans text-3xl font-light"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {program.number}
                    </span>
                  </div>

                  {/* เนื้อหา */}
                  <div className="p-8 flex-1 flex flex-col gap-3">
                    <div>
                      <p
                        className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1"
                        style={{ color: program.accent }}
                      >
                        {program.tech}
                      </p>
                      <h3
                        className="font-sans text-xl font-medium"
                        style={{ color: "#69554a" }}
                      >
                        {program.title}
                      </h3>
                      <p
                        className="text-sm font-light mt-0.5"
                        style={{ color: "#8b7f7c" }}
                      >
                        {program.titleTh}
                      </p>
                    </div>
                    <p
                      className="text-sm leading-relaxed font-light"
                      style={{ color: "#8b7f7c" }}
                    >
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── เลือกหน้า Sub-Service ── */}
        <section className="py-20 px-6" style={{ backgroundColor: "#e8e7e5" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p
                className="text-[11px] tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: "#c38789" }}
              >
                Choose Your Treatment
              </p>
              <h2
                className="font-sans text-2xl lg:text-3xl font-light"
                style={{ color: "#69554a" }}
              >
                เลือกโปรแกรมที่ตรงกับความต้องการ
              </h2>
              <div
                className="w-12 h-[2px] mx-auto mt-5"
                style={{
                  background: "linear-gradient(to right, #c38789, #69554a)",
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {laserSubPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group relative flex flex-col bg-white overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid #e0ddd9" }}
                >
                  {/* รูปภาพ */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <Image
                      src={page.image}
                      alt={page.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    {/* overlay gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${page.accent}cc 0%, transparent 60%)`,
                      }}
                    />
                    {/* label บนรูป */}
                    <div className="absolute bottom-4 left-6">
                      <p
                        className="text-[10px] tracking-[0.2em] uppercase font-medium"
                        style={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        {page.titleEn}
                      </p>
                    </div>
                  </div>

                  {/* เนื้อหา */}
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <h3
                      className="font-sans text-xl lg:text-2xl font-light"
                      style={{ color: "#69554a" }}
                    >
                      {page.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed font-light flex-1"
                      style={{ color: "#8b7f7c" }}
                    >
                      {page.description}
                    </p>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-2 text-[12px] tracking-wider uppercase font-medium transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: page.accent }}
                    >
                      ดูรายละเอียด <ArrowRight size={14} />
                    </div>
                  </div>

                  {/* เส้นใต้ hover */}
                  <div
                    className="h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                      background: `linear-gradient(to right, ${page.accent}, transparent)`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ปรึกษาหมอโบ ── */}
        <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-5xl mx-auto text-center">
            <p
              className="text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
              style={{ color: "#c38789" }}
            >
              Free Consultation
            </p>
            <h2
              className="font-sans text-2xl lg:text-3xl font-light mb-4"
              style={{ color: "#69554a" }}
            >
              ไม่แน่ใจว่าโปรแกรมไหนเหมาะกับคุณ?
            </h2>
            <p
              className="text-sm font-light mb-8 max-w-lg mx-auto"
              style={{ color: "#8b7f7c" }}
            >
              ปรึกษาหมอโบฟรีได้เลยค่ะ หมอโบจะวางแผนโปรแกรมเลเซอร์
              ที่เหมาะกับสภาพผิวของคุณโดยเฉพาะ
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-10 py-3.5 text-sm tracking-wider font-medium cursor-pointer transition-all duration-300 hover:shadow-lg hover:opacity-90"
              style={{ backgroundColor: "#c38789", color: "#fff" }}
            >
              ปรึกษาหมอโบฟรี ผ่าน LINE
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingLine />
    </>
  );
}
