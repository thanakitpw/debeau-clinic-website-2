import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Layers,
  Clock,
  Shield,
  TrendingUp,
  Heart,
  Award,
  Target,
  Leaf,
  Droplets,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import { ScrollReveal } from "@/components/MotionWrapper";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

export const metadata: Metadata = {
  title:
    "Sculptra & HArmonyCa — กระตุ้นคอลลาเจน ฟื้นฟูผิวระยะยาว | DE BEAU CLINIC",
  description:
    "Collagen Biostimulator ที่เดอโบคลินิก — Sculptra (PLLA) กระตุ้นคอลลาเจนสูงสุด 66.5% อยู่นาน 2-3 ปี, HArmonyCa (HA + CaHA) ยกกระชับทันที ผลอยู่ 18 เดือน ดูแลโดยคุณหมอโบ",
};

const LINE_URL = "https://line.me/R/ti/p/@debeauclinic";

export default function CollagenBiostimulatorPage() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#e8e7e5" }}>
        {/* ── Sculpt TDC Feature Banner ── */}
        <section className="pt-24 lg:pt-28 pb-0">
          <div className="relative w-full" style={{ aspectRatio: "21/9" }}>
            <Image
              src="/images/collagen/sculpt-tdc-banner.jpg"
              alt="Sculpt TDC Technique — เทคนิค ฝังคอลลาเจน 3 ทิศทาง by หมอโบ เดอโบคลินิก"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>

        {/* ── Hero ── */}
        <section
          className="relative pt-16 lg:pt-20 pb-24 px-6 overflow-hidden"
          style={{ backgroundColor: "#69554a" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, #c38789, transparent)",
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at top right, #c38789 0%, transparent 60%)",
            }}
          />

          <div className="max-w-5xl mx-auto relative z-10">
            <nav
              className="flex items-center gap-2 text-sm tracking-wider mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <Link
                href="/"
                className="hover:text-white transition-colors cursor-pointer"
              >
                หน้าแรก
              </Link>
              <ChevronRight size={12} />
              <span style={{ color: "#c38789" }}>Collagen Biostimulator</span>
            </nav>

            <span
              className="inline-block text-sm tracking-[0.3em] uppercase font-medium px-5 py-2 rounded-full mb-7"
              style={{
                backgroundColor: "rgba(195,135,137,0.2)",
                color: "#c38789",
              }}
            >
              Collagen Regeneration
            </span>

            <h1
              className="font-sans text-[2.5rem] lg:text-6xl font-light leading-[1.1] tracking-wide mb-5"
              style={{ color: "#fff" }}
            >
              Sculptra & HArmonyCa
            </h1>

            <p
              className="text-base lg:text-lg tracking-[0.15em] uppercase mb-8"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              ฟื้นฟูผิวระดับโครงสร้าง สู่ความอ่อนเยาว์ที่ยั่งยืน
            </p>

            <p
              className="text-lg lg:text-xl font-light leading-relaxed max-w-3xl"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              นวัตกรรมฟื้นฟูผิวจากภายใน ด้วยการกระตุ้นให้ร่างกาย
              สร้างคอลลาเจนและอีลาสตินใหม่อย่างต่อเนื่อง
              เน้น "การฟื้นฟูโครงสร้างผิว" ให้แข็งแรงและยืดหยุ่นในระยะยาว
              ไม่ใช่แค่การเติมเต็มชั่วคราวแบบฟิลเลอร์ทั่วไป
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary cursor-pointer text-base"
              >
                ปรึกษาหมอโบฟรี
                <ArrowRight size={18} />
              </a>
              <a
                href="#sculptra"
                className="btn-outline cursor-pointer text-base"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
              >
                ดูรายละเอียดตัวยา
              </a>
            </div>
          </div>
        </section>

        {/* ── Two Products Quick Nav ── */}
        <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label mb-3">Our Products</p>
                <h2
                  className="font-sans text-3xl lg:text-4xl font-light"
                  style={{ color: "#3a2e2b" }}
                >
                  ตัวยาที่เราให้บริการ
                </h2>
                <div className="divider-rose mt-4" />
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  id: "sculptra",
                  name: "Sculptra®",
                  subtitle: "Poly-L-Lactic Acid (PLLA)",
                  desc: "กระตุ้นการสร้างคอลลาเจนใหม่ (Collagen Type 1) สูงสุด 66.5% ผลลัพธ์แบบธรรมชาติ",
                  duration: "2-3 ปี",
                  price: "29,000 บาท / ขวด",
                  priceNote: "จากราคาปกติ 60,000",
                },
                {
                  id: "harmonyca",
                  name: "HArmonyCa™",
                  subtitle: "HA + CaHA (Dual Effect)",
                  desc: "นวัตกรรม X2 — เห็นผลยกกระชับทันที + กระตุ้นคอลลาเจนระยะยาว",
                  duration: "18 เดือน",
                  price: "35,000 บาท / Syringe",
                  priceNote: "Allergan Aesthetics",
                },
              ].map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="group p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    backgroundColor: "#f5f2ef",
                    border: "1px solid #e0ddd9",
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3
                        className="font-sans text-2xl lg:text-3xl font-light mb-1"
                        style={{ color: "#3a2e2b" }}
                      >
                        {p.name}
                      </h3>
                      <p
                        className="text-sm tracking-wider uppercase"
                        style={{ color: "#c38789" }}
                      >
                        {p.subtitle}
                      </p>
                    </div>
                    <ArrowRight
                      size={22}
                      className="transition-transform group-hover:translate-x-1"
                      style={{ color: "#c38789" }}
                    />
                  </div>
                  <p
                    className="text-[15px] leading-relaxed font-light mb-6"
                    style={{ color: "#69554a" }}
                  >
                    {p.desc}
                  </p>
                  <div className="flex items-end justify-between pt-5 border-t" style={{ borderColor: "#d9d3cc" }}>
                    <div>
                      <p className="text-xs tracking-wider uppercase" style={{ color: "#8b7f7c" }}>
                        ผลอยู่นาน
                      </p>
                      <p className="text-xl font-medium mt-1" style={{ color: "#69554a" }}>
                        {p.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-medium" style={{ color: "#c38789" }}>
                        {p.price}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#8b7f7c" }}>
                        {p.priceNote}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* ═══════════════════  SCULPTRA SECTION  ═══════════════════ */}
        {/* ========================================================== */}
        <section
          id="sculptra"
          className="py-24 px-6 scroll-mt-20"
          style={{ backgroundColor: "#f5f2ef" }}
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="section-label mb-3">Part 1</p>
                <h2
                  className="font-sans text-4xl lg:text-5xl font-light mb-4"
                  style={{ color: "#3a2e2b" }}
                >
                  Sculptra<sup className="text-xl">®</sup>
                </h2>
                <p
                  className="text-sm tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#c38789" }}
                >
                  นวัตกรรมกระตุ้นคอลลาเจนจาก Galderma
                </p>
                <div className="divider-rose mb-6" />
                <p
                  className="max-w-2xl mx-auto text-lg font-light leading-relaxed"
                  style={{ color: "#69554a" }}
                >
                  Biostimulator ตัวแรกของโลกที่ได้รับการรับรองว่าสามารถ
                  กระตุ้นการสร้างคอลลาเจนตามธรรมชาติ ผ่านการรับรองจาก US FDA
                  ใช้จริงมากว่า 20 ปีในอเมริกาและยุโรป
                </p>
              </div>
            </ScrollReveal>

            {/* Sculptra Overview + Image */}
            <div className="grid lg:grid-cols-2 gap-10 mb-20 items-center">
              <ScrollReveal direction="left">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src="/images/collagen/sculptra-mechanism.jpg"
                    alt="กลไกการทำงานของ Sculptra — PLLA กระตุ้น Fibroblast สร้างคอลลาเจนใหม่"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <p className="section-label mb-3">Sculptra คืออะไร?</p>
                <h3
                  className="font-sans text-2xl lg:text-3xl font-light mb-5"
                  style={{ color: "#3a2e2b" }}
                >
                  สารกำเนิดคอลลาเจนในรูปแบบฉีด
                </h3>
                <p
                  className="text-base leading-relaxed font-light mb-5"
                  style={{ color: "#69554a" }}
                >
                  <strong style={{ color: "#3a2e2b" }}>Sculptra</strong>{" "}
                  คือสาร Biostimulator ที่ใช้สาร{" "}
                  <strong>Poly-L-Lactic Acid (PLLA)</strong> เข้าไปกระตุ้นเซลล์{" "}
                  <strong>Fibroblast</strong>{" "}
                  ให้สร้างคอลลาเจนใหม่ด้วยตัวเอง
                </p>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ color: "#69554a" }}
                >
                  แตกต่างจากฟิลเลอร์ทั่วไปตรงที่{" "}
                  <strong>ไม่ได้เติมเต็มจากภายนอก</strong> แต่เน้น
                  การฟื้นฟูโครงสร้างผิวจากภายใน
                  ร่างกายสร้างคอลลาเจนได้สูงถึง{" "}
                  <strong style={{ color: "#c38789" }}>66.5%</strong>
                </p>
              </ScrollReveal>
            </div>

            {/* Sculpt TDC Technique */}
            <ScrollReveal>
              <div
                className="p-10 lg:p-14 mb-20"
                style={{ backgroundColor: "#69554a" }}
              >
                <div className="text-center mb-10">
                  <p
                    className="text-sm tracking-[0.3em] uppercase mb-3"
                    style={{ color: "#c38789" }}
                  >
                    Exclusive Technique
                  </p>
                  <h3
                    className="font-sans text-2xl lg:text-4xl font-light mb-3"
                    style={{ color: "#fff" }}
                  >
                    Sculpt TDC
                  </h3>
                  <p
                    className="text-base lg:text-lg font-light"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Triple Direction Collagenesis — เอกสิทธิ์เฉพาะที่ Debeau Clinic
                  </p>
                </div>
                <p
                  className="max-w-2xl mx-auto text-center text-base leading-relaxed font-light mb-10"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  คุณหมอโบคำนวณเวกเตอร์ของแรงใน 3 ทิศทางหลัก
                  เพื่อให้ผิวเกิดการยกตัวแบบ "Lift & Tighten"
                  เหมือนการขึงผ้าใบให้ตึง หลีกเลี่ยงการทำให้หน้าอูม
                </p>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    {
                      num: "01",
                      title: "แนวขมับ",
                      en: "Temporal Area",
                      desc: "ยกใบหน้าส่วนบน ดึงหางตา แก้ขมับตอบ ทำให้หน้าดูสดชื่นขึ้นทันที",
                    },
                    {
                      num: "02",
                      title: "แนวหน้าหู",
                      en: "Preauricular Area",
                      desc: "สร้างแรงดึงกรอบหน้าให้ชัดเจน ยกแก้มส่วนล่างที่หย่อนคล้อย",
                    },
                    {
                      num: "03",
                      title: "แนวโหนกแก้ม",
                      en: "Submalar Area",
                      desc: "อิ่มฟูธรรมชาติ ลดร่องมุมปาก รูขุมขนกระชับ ผิวฉ่ำวาว",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="p-6"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(195,135,137,0.2)",
                      }}
                    >
                      <p
                        className="font-sans text-3xl font-light mb-3"
                        style={{ color: "#c38789" }}
                      >
                        {item.num}
                      </p>
                      <p
                        className="text-lg font-medium mb-1"
                        style={{ color: "#fff" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-xs tracking-wider uppercase mb-4"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {item.en}
                      </p>
                      <p
                        className="text-sm leading-relaxed font-light"
                        style={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Why Collagen */}
            <ScrollReveal>
              <div className="mb-20">
                <div className="text-center mb-12">
                  <p className="section-label mb-3">Science Behind</p>
                  <h3
                    className="font-sans text-2xl lg:text-3xl font-light"
                    style={{ color: "#3a2e2b" }}
                  >
                    ทำไมคอลลาเจนถึงสำคัญ?
                  </h3>
                  <div className="divider-rose mt-4" />
                </div>
                <p
                  className="max-w-3xl mx-auto text-center text-base leading-relaxed font-light mb-10"
                  style={{ color: "#69554a" }}
                >
                  คอลลาเจนคือโปรตีนโครงสร้างหลักของผิวหนังสูงถึง{" "}
                  <strong>75%</strong> ทำหน้าที่เป็น "ตาข่าย" ยึดโยงให้ผิวกระชับ
                  ยืดหยุ่น และเต่งตึง เมื่ออายุมากขึ้น
                  ร่างกายผลิตคอลลาเจนลดลงอย่างต่อเนื่อง
                </p>
                <div className="grid sm:grid-cols-3 gap-5">
                  {[
                    { age: "25+", lose: "1%/ปี", desc: "ร่างกายเริ่มผลิตคอลลาเจนลดลง" },
                    { age: "40", lose: "20%", desc: "คอลลาเจนหายไป 1 ใน 5" },
                    { age: "50", lose: "33%", desc: "คอลลาเจนหายไป 1 ใน 3" },
                  ].map((s) => (
                    <div
                      key={s.age}
                      className="p-8 text-center"
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #e0ddd9",
                      }}
                    >
                      <p
                        className="text-sm tracking-wider uppercase mb-2"
                        style={{ color: "#8b7f7c" }}
                      >
                        อายุ {s.age}
                      </p>
                      <p
                        className="font-sans text-4xl lg:text-5xl font-light mb-3"
                        style={{ color: "#c38789" }}
                      >
                        {s.lose}
                      </p>
                      <p
                        className="text-sm leading-relaxed font-light"
                        style={{ color: "#69554a" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal>
              <div className="mb-20">
                <div className="text-center mb-12">
                  <p className="section-label mb-3">Results Timeline</p>
                  <h3
                    className="font-sans text-2xl lg:text-3xl font-light"
                    style={{ color: "#3a2e2b" }}
                  >
                    กระบวนการทำงานใต้ชั้นผิว
                  </h3>
                  <div className="divider-rose mt-4" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      time: "2-3 วันแรก",
                      icon: <Droplets size={22} />,
                      desc: "ใบหน้าอาจดูอิ่มฟูจากน้ำผสมตัวยา ค่อยๆ ยุบลง",
                    },
                    {
                      time: "3-4 สัปดาห์",
                      icon: <Sparkles size={22} />,
                      desc: "กระบวนการสร้างคอลลาเจนใหม่เริ่มทำงานเต็มที่ ผิวหนาตัวขึ้น",
                    },
                    {
                      time: "3 เดือน",
                      icon: <Award size={22} />,
                      desc: "เห็นผลชัดที่สุด ผิวแน่น ยืดหยุ่น ยกกระชับธรรมชาติ",
                    },
                    {
                      time: "2-3 ปี",
                      icon: <Shield size={22} />,
                      desc: "ผลลัพธ์คงทน คอลลาเจนที่สร้างใหม่ยังคงอยู่",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-6"
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #e0ddd9",
                      }}
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center mb-4"
                        style={{ backgroundColor: "rgba(195,135,137,0.15)", color: "#c38789" }}
                      >
                        {item.icon}
                      </div>
                      <p
                        className="text-lg font-medium mb-2"
                        style={{ color: "#69554a" }}
                      >
                        {item.time}
                      </p>
                      <p
                        className="text-sm leading-relaxed font-light"
                        style={{ color: "#8b7f7c" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 5-5-5 Care Rule */}
            <ScrollReveal>
              <div
                className="p-10 lg:p-14 mb-16"
                style={{ backgroundColor: "#fff", border: "1px solid #e0ddd9" }}
              >
                <div className="text-center mb-10">
                  <p
                    className="text-sm tracking-[0.3em] uppercase mb-3"
                    style={{ color: "#c38789" }}
                  >
                    Aftercare Protocol
                  </p>
                  <h3
                    className="font-sans text-3xl lg:text-4xl font-light"
                    style={{ color: "#3a2e2b" }}
                  >
                    กฎเลข 5-5-5
                  </h3>
                  <p
                    className="mt-4 text-base lg:text-lg font-light"
                    style={{ color: "#8b7f7c" }}
                  >
                    หัวใจของความสำเร็จหลังฉีด Sculptra — นวดเพื่อกระจายอนุภาค PLLA ให้สม่ำเสมอ
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
                  {[
                    { big: "5", unit: "วัน", label: "นวดต่อเนื่อง" },
                    { big: "5", unit: "ครั้ง", label: "ต่อวัน" },
                    { big: "5", unit: "นาที", label: "ต่อครั้ง" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <p
                        className="font-sans text-7xl lg:text-8xl font-light"
                        style={{ color: "#c38789" }}
                      >
                        {item.big}
                      </p>
                      <p
                        className="text-lg font-medium mt-1"
                        style={{ color: "#69554a" }}
                      >
                        {item.unit}
                      </p>
                      <p
                        className="text-sm tracking-wider uppercase mt-2"
                        style={{ color: "#8b7f7c" }}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Promo Pricing */}
            <ScrollReveal>
              <div
                className="p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
                style={{ backgroundColor: "#c38789" }}
              >
                <div>
                  <p
                    className="text-sm tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    Promotion
                  </p>
                  <p
                    className="font-sans text-2xl lg:text-3xl font-light mb-1"
                    style={{ color: "#fff" }}
                  >
                    Sculptra ราคาพิเศษ
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                    จองวันนี้ รับสิทธิ์ถึงสิ้นปี 2026
                  </p>
                </div>
                <div className="text-center lg:text-right">
                  <p
                    className="text-sm line-through"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    ปกติ 60,000 บาท
                  </p>
                  <p
                    className="font-sans text-4xl lg:text-5xl font-light"
                    style={{ color: "#fff" }}
                  >
                    29,000 บาท
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                    / ขวด (10 cc)
                  </p>
                </div>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 text-base font-medium cursor-pointer shrink-0"
                  style={{ backgroundColor: "#fff", color: "#c38789" }}
                >
                  จองคิวผ่าน LINE
                  <ArrowRight size={18} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ========================================================== */}
        {/* ═══════════════════  HARMONYCA SECTION  ══════════════════ */}
        {/* ========================================================== */}
        <section
          id="harmonyca"
          className="py-24 px-6 scroll-mt-20"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="section-label mb-3">Part 2</p>
                <h2
                  className="font-sans text-4xl lg:text-5xl font-light mb-4"
                  style={{ color: "#3a2e2b" }}
                >
                  HArmonyCa<sup className="text-xl">™</sup>
                </h2>
                <p
                  className="text-sm tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#c38789" }}
                >
                  Harmony Skin by Allergan Aesthetics
                </p>
                <div className="divider-rose mb-6" />
                <p
                  className="max-w-2xl mx-auto text-lg font-light leading-relaxed"
                  style={{ color: "#69554a" }}
                >
                  เพื่อผิวอ่อนเยาว์ เฟิร์ม และยกกระชับ
                  <br />
                  ให้สมดุลลงตัวอย่างธรรมชาติ <strong>ในครั้งเดียว</strong>
                </p>
              </div>
            </ScrollReveal>

            {/* Dual Effect — HA + CaHA */}
            <ScrollReveal>
              <div className="mb-20">
                <div className="text-center mb-10">
                  <p className="section-label mb-3">Dual Effect</p>
                  <h3
                    className="font-sans text-2xl lg:text-3xl font-light"
                    style={{ color: "#3a2e2b" }}
                  >
                    นวัตกรรมความงามแบบ <span style={{ color: "#c38789" }}>X2</span>
                  </h3>
                  <p
                    className="mt-4 max-w-2xl mx-auto text-base font-light leading-relaxed"
                    style={{ color: "#69554a" }}
                  >
                    สองผลลัพธ์ในหนึ่งเดียว — ผสาน 2 สารออกฤทธิ์ใน syringe เดียว
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div
                    className="p-8"
                    style={{
                      backgroundColor: "#f5f2ef",
                      border: "1px solid #e0ddd9",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center"
                        style={{
                          backgroundColor: "rgba(195,135,137,0.2)",
                          color: "#c38789",
                        }}
                      >
                        <TrendingUp size={22} />
                      </div>
                      <p
                        className="text-xs tracking-[0.25em] uppercase font-medium"
                        style={{ color: "#c38789" }}
                      >
                        Immediate Lift
                      </p>
                    </div>
                    <h4
                      className="font-sans text-xl lg:text-2xl font-light mb-3"
                      style={{ color: "#3a2e2b" }}
                    >
                      ยกกระชับทันที
                    </h4>
                    <p
                      className="text-base font-medium mb-3"
                      style={{ color: "#c38789" }}
                    >
                      Hyaluronic Acid (HA)
                    </p>
                    <p
                      className="text-sm leading-relaxed font-light"
                      style={{ color: "#69554a" }}
                    >
                      ช่วยเติมเต็มและพยุงโครงสร้างผิว ให้ผลลัพธ์ชัดเจน
                      <strong> ทันทีหลังการรักษา</strong>
                    </p>
                  </div>

                  <div
                    className="p-8"
                    style={{
                      backgroundColor: "#69554a",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center"
                        style={{
                          backgroundColor: "rgba(195,135,137,0.25)",
                          color: "#c38789",
                        }}
                      >
                        <Layers size={22} />
                      </div>
                      <p
                        className="text-xs tracking-[0.25em] uppercase font-medium"
                        style={{ color: "#c38789" }}
                      >
                        Long-term Improvement
                      </p>
                    </div>
                    <h4
                      className="font-sans text-xl lg:text-2xl font-light mb-3"
                      style={{ color: "#fff" }}
                    >
                      ฟื้นฟูผิวระยะยาว
                    </h4>
                    <p
                      className="text-base font-medium mb-3"
                      style={{ color: "#c38789" }}
                    >
                      Calcium Hydroxyapatite (CaHA)
                    </p>
                    <p
                      className="text-sm leading-relaxed font-light"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      โครงร่างกระตุ้นการสร้างคอลลาเจนของร่างกาย
                      ให้ผิวเฟิร์มแน่นคอลลาเจน
                      <strong style={{ color: "#fff" }}> อย่างยาวนาน</strong>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 4 Key Benefits */}
            <ScrollReveal>
              <div className="mb-20">
                <div className="text-center mb-10">
                  <p className="section-label mb-3">Why HArmonyCa</p>
                  <h3
                    className="font-sans text-2xl lg:text-3xl font-light"
                    style={{ color: "#3a2e2b" }}
                  >
                    4 จุดเด่นของ HArmonyCa
                  </h3>
                  <div className="divider-rose mt-4" />
                </div>
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      icon: <Leaf size={22} />,
                      title: "กระตุ้นคอลลาเจน",
                      desc: "ผิวเฟิร์มและยกกระชับตั้งแต่ครั้งแรกที่ได้รับ",
                    },
                    {
                      icon: <Heart size={22} />,
                      title: "ผลลัพธ์ธรรมชาติ",
                      desc: "กลมกลืนและสมดุล ฟื้นฟูใบหน้าอ่อนเยาว์ลงตัว",
                    },
                    {
                      icon: <Target size={22} />,
                      title: "คนไข้ >90% พึงพอใจ",
                      desc: "ได้ผลลัพธ์ดีขึ้นอย่างมีนัยสำคัญ อยากรักษาซ้ำ",
                    },
                    {
                      icon: <Shield size={22} />,
                      title: "ปลอดภัยระยะยาว",
                      desc: "ผ่านการพิสูจน์ด้วยผลการศึกษาทางคลินิก",
                    },
                  ].map((b, i) => (
                    <StaggerItem key={i}>
                      <div
                        className="p-6 h-full"
                        style={{
                          backgroundColor: "#f5f2ef",
                          border: "1px solid #e0ddd9",
                        }}
                      >
                        <div
                          className="w-11 h-11 flex items-center justify-center mb-4"
                          style={{
                            backgroundColor: "rgba(195,135,137,0.2)",
                            color: "#c38789",
                          }}
                        >
                          {b.icon}
                        </div>
                        <p
                          className="text-base font-medium mb-2"
                          style={{ color: "#69554a" }}
                        >
                          {b.title}
                        </p>
                        <p
                          className="text-sm leading-relaxed font-light"
                          style={{ color: "#8b7f7c" }}
                        >
                          {b.desc}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>

            {/* Pinch Test */}
            <ScrollReveal>
              <div
                className="p-10 lg:p-14 mb-20"
                style={{
                  background:
                    "linear-gradient(135deg, #c38789 0%, #b07274 100%)",
                }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p
                      className="text-sm tracking-[0.3em] uppercase mb-3"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      Self-Assessment
                    </p>
                    <h3
                      className="font-sans text-3xl lg:text-4xl font-light mb-4"
                      style={{ color: "#fff" }}
                    >
                      ทดสอบตัวเอง
                    </h3>
                    <p
                      className="text-base lg:text-lg font-light leading-relaxed mb-5"
                      style={{ color: "rgba(255,255,255,0.92)" }}
                    >
                      ใช้นิ้วหนีบข้างแก้ม แล้วดึงออก
                    </p>
                    <p
                      className="text-sm font-light"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      ถ้าผิวยืดง่าย คุณคือคนที่ใช่สำหรับ HArmonyCa
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {[
                      "ผิวยืด",
                      "ผิวหย่อน",
                      "ผิวไม่กระชับ",
                      "ผิวหลวม",
                    ].map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-3 py-3 px-5"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <CheckCircle size={18} style={{ color: "#fff" }} />
                        <span
                          className="text-base font-medium"
                          style={{ color: "#fff" }}
                        >
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* HArmonyCa Timeline */}
            <ScrollReveal>
              <div className="mb-20">
                <div className="text-center mb-10">
                  <p className="section-label mb-3">Results Timeline</p>
                  <h3
                    className="font-sans text-2xl lg:text-3xl font-light"
                    style={{ color: "#3a2e2b" }}
                  >
                    จากวันแรกสู่ผลลัพธ์ที่ยั่งยืน
                  </h3>
                  <div className="divider-rose mt-4" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      day: "Day 0",
                      title: "ทันทีหลังฉีด",
                      desc: "HA ทำงาน ยกกระชับเห็นผลทันที",
                    },
                    {
                      day: "Day 30",
                      title: "HA ผสานสมบูรณ์",
                      desc: "Neocollagenesis เริ่มทำงาน",
                    },
                    {
                      day: "Day 90",
                      title: "คอลลาเจนสะสม",
                      desc: "ผิวแน่นขึ้นอย่างต่อเนื่อง",
                    },
                    {
                      day: "Day 180",
                      title: "คอลลาเจนสูงสุด",
                      desc: "Full integration + ผลลัพธ์ถึง 18 เดือน",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-6"
                      style={{
                        backgroundColor: i === 3 ? "#c38789" : "#f5f2ef",
                        border: "1px solid",
                        borderColor: i === 3 ? "#c38789" : "#e0ddd9",
                      }}
                    >
                      <p
                        className="text-xs tracking-[0.2em] uppercase mb-3"
                        style={{
                          color: i === 3 ? "rgba(255,255,255,0.8)" : "#8b7f7c",
                        }}
                      >
                        {item.day}
                      </p>
                      <p
                        className="text-lg font-medium mb-2"
                        style={{ color: i === 3 ? "#fff" : "#69554a" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed font-light"
                        style={{
                          color: i === 3 ? "rgba(255,255,255,0.85)" : "#8b7f7c",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 24/48 Hour Aftercare */}
            <ScrollReveal>
              <div>
                <div className="text-center mb-10">
                  <p className="section-label mb-3">Aftercare</p>
                  <h3
                    className="font-sans text-2xl lg:text-3xl font-light"
                    style={{ color: "#3a2e2b" }}
                  >
                    การดูแลตัวเองหลังการรักษา
                  </h3>
                  <div className="divider-rose mt-4" />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    {
                      time: "24",
                      unit: "ชั่วโมง",
                      title: "หลีกเลี่ยงสัมผัส",
                      desc: "ห้ามสัมผัส นวด หรือกดบริเวณที่รักษา",
                    },
                    {
                      time: "48",
                      unit: "ชั่วโมง",
                      title: "งดออกกำลังกายหนัก",
                      desc: "และการสัมผัสความร้อนสูง ซาวน่า สตรีม",
                    },
                    {
                      time: "7",
                      unit: "วัน",
                      title: "อาการบวมจะหาย",
                      desc: "รอยแดง บวม ปวด ดีขึ้นใน 24-48 ชั่วโมง หายสนิทใน 1 สัปดาห์",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-7 text-center"
                      style={{
                        backgroundColor: "#f5f2ef",
                        border: "1px solid #e0ddd9",
                      }}
                    >
                      <p
                        className="font-sans text-6xl lg:text-7xl font-light"
                        style={{ color: "#c38789" }}
                      >
                        {item.time}
                      </p>
                      <p
                        className="text-sm tracking-wider uppercase mt-1 mb-4"
                        style={{ color: "#8b7f7c" }}
                      >
                        {item.unit}
                      </p>
                      <p
                        className="text-base font-medium mb-2"
                        style={{ color: "#69554a" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed font-light"
                        style={{ color: "#8b7f7c" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ========================================================== */}
        {/* ═══════════════  BEFORE / AFTER GALLERY  ═════════════════ */}
        {/* ========================================================== */}
        <section
          className="py-24 px-6"
          style={{ backgroundColor: "#e8e7e5" }}
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label mb-3">Real Results</p>
                <h2
                  className="font-sans text-3xl lg:text-4xl font-light mb-4"
                  style={{ color: "#3a2e2b" }}
                >
                  ก่อน / หลัง ทำ HArmonyCa
                </h2>
                <div className="divider-rose mt-4" />
                <p
                  className="mt-6 max-w-2xl mx-auto text-base font-light leading-relaxed"
                  style={{ color: "#69554a" }}
                >
                  ผลลัพธ์จริงจากคนไข้เดอโบคลินิก
                  *รูปรีวิวที่ใช้รีวิวได้รับการอนุญาตเรียบร้อยแล้ว
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-5">
              {[
                {
                  src: "/images/collagen/harmonyca-review-01.jpg",
                  alt: "Before & After HArmonyCa Case 1",
                  label: "Case 1 — 7 วันหลังทำ",
                },
                {
                  src: "/images/collagen/harmonyca-review-02.jpg",
                  alt: "Before & After HArmonyCa Case 2",
                  label: "Case 2 — 7 วันหลังทำ",
                },
              ].map((item) => (
                <StaggerItem key={item.src}>
                  <div>
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: "1/1" }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                    <p
                      className="text-sm text-center mt-4 font-medium tracking-wider uppercase"
                      style={{ color: "#69554a" }}
                    >
                      {item.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <p
              className="mt-10 text-center text-xs font-light"
              style={{ color: "#8b7f7c" }}
            >
              *ผลลัพธ์ขึ้นอยู่กับความแตกต่างของแต่ละบุคคล
            </p>
          </div>
        </section>

        {/* ========================================================== */}
        {/* ═══════════════  COMPARISON TABLE  ═══════════════════════ */}
        {/* ========================================================== */}
        <section
          className="py-24 px-6"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label mb-3">Comparison</p>
                <h2
                  className="font-sans text-3xl lg:text-4xl font-light mb-4"
                  style={{ color: "#3a2e2b" }}
                >
                  เลือก Sculptra, HArmonyCa หรือ Filler?
                </h2>
                <div className="divider-rose mt-4" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="overflow-x-auto">
                <table className="w-full text-left" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#69554a" }}>
                      <th className="p-5 text-sm tracking-wider uppercase font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                        หัวข้อ
                      </th>
                      <th className="p-5 text-sm font-medium" style={{ color: "#c38789" }}>
                        Sculptra (PLLA)
                      </th>
                      <th className="p-5 text-sm font-medium" style={{ color: "#c38789" }}>
                        HArmonyCa (HA + CaHA)
                      </th>
                      <th className="p-5 text-sm font-medium" style={{ color: "#c38789" }}>
                        Filler (HA)
                      </th>
                      <th className="p-5 text-sm font-medium" style={{ color: "#c38789" }}>
                        Thermage / Ulthera
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        label: "หลักการทำงาน",
                        sculptra: "กระตุ้นคอลลาเจนเอง",
                        harmony: "เติมเต็ม + กระตุ้นคอลลาเจน",
                        filler: "เติมเต็มปริมาตรทันที",
                        energy: "ความร้อนยกกระชับ",
                      },
                      {
                        label: "ความเร็วของผลลัพธ์",
                        sculptra: "3-4 สัปดาห์",
                        harmony: "ทันที + ค่อยๆ ดีขึ้น",
                        filler: "ทันทีหลังฉีด",
                        energy: "ทันที + ชัดใน 3 เดือน",
                      },
                      {
                        label: "ความคงทน",
                        sculptra: "24-36 เดือน",
                        harmony: "18 เดือน",
                        filler: "6-12 เดือน",
                        energy: "12-18 เดือน",
                      },
                      {
                        label: "จุดเด่น",
                        sculptra: "ผิวแน่น สุขภาพดี ธรรมชาติสุด",
                        harmony: "X2 ทันที + ยาวนาน",
                        filler: "ปรับรูปหน้าคม",
                        energy: "ยกลึกถึงชั้น SMAS",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          backgroundColor: i % 2 === 0 ? "#fff" : "#f5f2ef",
                          borderBottom: "1px solid #e0ddd9",
                        }}
                      >
                        <td
                          className="p-5 text-sm font-medium"
                          style={{ color: "#3a2e2b" }}
                        >
                          {row.label}
                        </td>
                        <td
                          className="p-5 text-sm font-light leading-relaxed"
                          style={{ color: "#69554a" }}
                        >
                          {row.sculptra}
                        </td>
                        <td
                          className="p-5 text-sm font-light leading-relaxed"
                          style={{ color: "#69554a" }}
                        >
                          {row.harmony}
                        </td>
                        <td
                          className="p-5 text-sm font-light leading-relaxed"
                          style={{ color: "#8b7f7c" }}
                        >
                          {row.filler}
                        </td>
                        <td
                          className="p-5 text-sm font-light leading-relaxed"
                          style={{ color: "#8b7f7c" }}
                        >
                          {row.energy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ========================================================== */}
        {/* ═══════════════  WHO SHOULD CHOOSE  ══════════════════════ */}
        {/* ========================================================== */}
        <section
          className="py-24 px-6"
          style={{ backgroundColor: "#e8e7e5" }}
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label mb-3">Suitable For</p>
                <h2
                  className="font-sans text-3xl lg:text-4xl font-light mb-4"
                  style={{ color: "#3a2e2b" }}
                >
                  ใครเหมาะกับการรักษานี้?
                </h2>
                <div className="divider-rose mt-4" />
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "ผู้ที่ต้องการความเป็นธรรมชาติ ไม่อยากให้ใครรู้ว่าทำอะไรมา",
                "ผู้มีสัญญาณแห่งวัย โดยเฉพาะอายุ 35 ปีขึ้นไป",
                "ผู้ที่มีใบหน้าตอบ แก้มตอบ ขมับตอบ มีร่องลึก",
                "ผิวขาดความยืดหยุ่น หย่อนคล้อย ไม่กระชับ",
                "ผู้ที่ต้องการผลลัพธ์คุ้มค่า ไม่ต้องทำบ่อย",
                "ผู้ที่อยากเห็นผลทันทีและอยู่ได้นาน (เลือก HArmonyCa)",
                "ผู้ต้องการผลลัพธ์สูงสุด เสริมกับ Thermage / Ulthera ได้",
                "เหมาะกับผู้หญิง ผู้ชาย และทุกเพศ",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5"
                  style={{ backgroundColor: "#fff", border: "1px solid #e0ddd9" }}
                >
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#c38789" }}
                  />
                  <span
                    className="text-[15px] leading-relaxed font-light"
                    style={{ color: "#69554a" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Dr. Beau ── */}
        <section className="py-24 px-6" style={{ backgroundColor: "#69554a" }}>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Why Choose Us</p>
              <h2
                className="font-sans text-3xl lg:text-4xl font-light leading-snug mb-6"
                style={{ color: "#fff" }}
              >
                ทำไมต้อง
                <br />
                <span style={{ color: "#c38789" }}>หมอโบ เดอโบคลินิก?</span>
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  "แพทย์เฉพาะทางด้านผิวหนัง จบจากรามาธิบดี + Boston University",
                  "ประสบการณ์ 15+ ปี ดูแลคนไข้ 30,000+ เคส",
                  "ดูแลเองทุกเคส ไม่ส่งต่อให้พยาบาล",
                  "เทคนิค Sculpt TDC เอกสิทธิ์เฉพาะที่เดอโบ",
                  "ใช้ผลิตภัณฑ์แท้ นำเข้าจากยุโรป ผ่าน อย. ไทย",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                      style={{ color: "#c38789" }}
                    />
                    <span
                      className="text-[15px] font-light leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-8 text-center flex flex-col items-center gap-5"
              style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            >
              <div
                className="w-24 h-24 relative overflow-hidden border-2"
                style={{ borderColor: "rgba(195,135,137,0.4)" }}
              >
                <Image
                  src="/images/doctor-working-1.jpg"
                  alt="หมอโบ พญ.ปาริฉัตร ตัณชวนิชย์"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <p
                  className="font-sans text-xl font-light"
                  style={{ color: "#fff" }}
                >
                  หมอโบ
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  พญ. ปาริฉัตร ตัณชวนิชย์
                </p>
              </div>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium cursor-pointer"
                style={{ backgroundColor: "#c38789", color: "#fff" }}
              >
                ปรึกษาหมอโบฟรี ผ่าน LINE
              </a>
              <Link
                href="/about-dr-beau"
                className="text-sm font-light transition-opacity hover:opacity-70 cursor-pointer"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                อ่านประวัติหมอโบ →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Related Services ── */}
        <section
          className="py-16 px-6"
          style={{ backgroundColor: "#e8e7e5" }}
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="section-label text-center mb-8">
              บริการที่เกี่ยวข้อง
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "ฟิลเลอร์", href: "/filler" },
                { label: "Skin Booster", href: "/skin-booster" },
                { label: "Ulthera ยกกระชับ", href: "/ulthera" },
                { label: "Mesotherapy", href: "/mesotherapy" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-6 py-3 text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    backgroundColor: "#fff",
                    color: "#69554a",
                    border: "1px solid #e0ddd9",
                  }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingLine />
    </>
  );
}
