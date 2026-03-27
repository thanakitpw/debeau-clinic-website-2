import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Award, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

export const metadata: Metadata = {
  title: "เกี่ยวกับหมอโบ พญ.ปาริฉัตร ตัณชวนิชย์ | DE BEAU CLINIC",
  description:
    "Dr.Beau Profile — พญ. ปาริฉัตร ตัณชวนิชย์ ผู้เชี่ยวชาญด้านการปรับรูปหน้า ฉีดฟิลเลอร์ โบท็อก เลเซอร์ ประสบการณ์กว่า 15 ปี จบจากรามาธิบดี + Boston University",
};

const education = [
  { year: "2543", detail: "แพทยศาสตรบัณฑิต คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล" },
  { year: "2549", detail: "วิทยาศาสตรมหาบัณฑิต สาขาโรคผิวหนัง Boston University, USA" },
  { year: "2551", detail: "ประกาศนียบัตรแพทย์ผู้เชี่ยวชาญด้านเวชศาสตร์ความงามและชะลอวัย หลักสูตรอเมริกาและยุโรป" },
];

const experience = [
  { period: "2549 – ปัจจุบัน", detail: "แพทย์ผู้เชี่ยวชาญประจำศูนย์ผิวพรรณและศัลยกรรมความงาม โรงพยาบาลกรุงเทพพัทยา" },
  { period: "2553 – ปัจจุบัน", detail: "แพทย์ผู้เชี่ยวชาญการฉีดฟิลเลอร์ใต้ตาและปรับรูปหน้า ที่เดอโบคลินิก" },
  { period: "10+ ปี", detail: "ประสบการณ์ด้านผิวหนังและความงาม ดูแลลูกค้ามากกว่า 5,000 ราย/ปี" },
  { period: "5,000+/ปี", detail: "ประสบการณ์รักษาปัญหาริ้วรอยด้วย Botox และ Filler มากกว่า 5,000 ราย/ปี" },
];

const certifications = [
  "Certificate in Botox Cosmetic Training (Basic & Advance Techniques)",
  "Certificate in Filler Injection Training (Basic & Advance Techniques)",
  "Certificate in Fraxel Training",
  "Certificate in Thermage Training",
  "Certificate in Mesotherapy Training",
  "Certificate in Laser Intensive Course Training",
  "Certificate in Cosmetic Surgery from Korea (KCCS)",
  "Certificate of Attendance Aesthetic Anatomy Masterclass",
];

const awards = [
  { year: "2016", title: "Filler Leading Clinic", from: "Allergan" },
  { year: "2017", title: "Filler Leading Clinic", from: "Allergan" },
  { year: "2017", title: "Premium Leading Clinic", from: "Galderma" },
  { year: "2018", title: "Filler Leading Clinic", from: "Allergan" },
  { year: "2018", title: "Top 5 Premium Leading Clinic", from: "Galderma" },
  { year: "2016–2018", title: "Top 5 คลินิกฉีดฟิลเลอร์สูงสุดของประเทศไทย 3 ปีซ้อน", from: "Allergan & Galderma" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-36 pb-24 px-6 overflow-hidden"
        style={{ backgroundColor: "#69554a" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at top right, #c38789 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(195,135,137,0.2)", color: "#c38789" }}>
              Dr. Beau Profile
            </span>
            <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-4" style={{ color: "#fff" }}>
              หมอโบ
            </h1>
            <p className="text-lg font-light mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
              พญ. ปาริฉัตร ตัณชวนิชย์
            </p>
            <p className="text-sm tracking-[0.15em] uppercase mb-8" style={{ color: "#c38789" }}>
              Beauty Clinic Specialist
            </p>
            <div className="flex flex-col gap-3">
              {[
                "ผู้เชี่ยวชาญด้านการปรับรูปหน้า",
                "ฉีดฟิลเลอร์ โบท็อก เลเซอร์ทุกชนิด",
                "ประสบการณ์กว่า 15 ปี",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#c38789" }} />
                  <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.85)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://line.me/R/ti/p/@debeauclinic" target="_blank" rel="noopener noreferrer"
                className="btn-primary cursor-pointer">
                ปรึกษาหมอโบฟรี <ArrowRight size={16} />
              </a>
            </div>
          </div>
          {/* Doctor photo + Stats */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full overflow-hidden" style={{ minHeight: "320px" }}>
              <Image
                src="/images/doctor-portrait.jpg"
                alt="หมอโบ พญ.ปาริฉัตร ตัณชวนิชย์"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "15+", label: "ปีประสบการณ์", sub: "ด้านความงาม" },
                { value: "5,000+", label: "ราย/ปี", sub: "Botox & Filler" },
                { value: "2,000+", label: "ราย/ปี", sub: "Laser รักษา" },
                { value: "Top 5", label: "ของประเทศไทย", sub: "3 ปีซ้อน" },
              ].map((s, i) => (
                <div key={i} className="p-4 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                  <div className="text-2xl font-sans font-light mb-1" style={{ color: "#c38789" }}>{s.value}</div>
                  <div className="text-xs font-medium" style={{ color: "#fff" }}>{s.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Background</p>
            <h2 className="section-heading">การศึกษา</h2>
            <div className="divider-rose mt-4" />
          </div>
          <div className="flex flex-col gap-0 max-w-3xl mx-auto">
            {education.map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 z-10"
                    style={{ backgroundColor: "#c38789" }}>
                    <GraduationCap size={16} color="#fff" />
                  </div>
                  {i < education.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ backgroundColor: "#e0ddd9" }} />
                  )}
                </div>
                <div className="pb-8 pt-1.5">
                  <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-2 inline-block"
                    style={{ backgroundColor: "rgba(195,135,137,0.1)", color: "#c38789" }}>
                    {item.year}
                  </span>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "#69554a" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6" style={{ backgroundColor: "#e8e7e5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Career</p>
            <h2 className="section-heading">ประสบการณ์</h2>
            <div className="divider-rose mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {experience.map((item, i) => (
              <div key={i} className="p-6 flex gap-4"
                style={{ backgroundColor: "#fff", border: "1px solid #e0ddd9" }}>
                <Briefcase size={20} className="shrink-0 mt-0.5" style={{ color: "#c38789" }} />
                <div>
                  <span className="text-xs font-semibold" style={{ color: "#c38789" }}>{item.period}</span>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "#69554a" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f5f2ef" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Training</p>
            <h2 className="section-heading">อบรมเพิ่มเติม</h2>
            <div className="divider-rose mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-start gap-3 p-4"
                style={{ backgroundColor: "#fff" }}>
                <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: "#c38789" }} />
                <span className="text-sm font-light leading-relaxed" style={{ color: "#69554a" }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6" style={{ backgroundColor: "#69554a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label" style={{ color: "#c38789" }}>
              Recognition
            </p>
            <h2 className="section-heading" style={{ color: "#fff" }}>รางวัลและความสำเร็จ</h2>
            <div className="divider-rose mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <div key={i} className="p-6 flex flex-col gap-3 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                <Award size={28} className="mx-auto" style={{ color: "#c38789" }} />
                <span className="text-xs tracking-wider uppercase font-semibold"
                  style={{ color: "rgba(255,255,255,0.5)" }}>{award.year}</span>
                <p className="text-sm font-medium leading-snug" style={{ color: "#fff" }}>{award.title}</p>
                <span className="text-xs" style={{ color: "#c38789" }}>จาก {award.from}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "#e8e7e5" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-light mb-4" style={{ color: "#69554a" }}>
            พร้อมให้คุณปรึกษาแบบส่วนตัว
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: "#8b7f7c" }}>
            หมอโบดูแลทุกเคสด้วยตนเอง ปรึกษาฟรีผ่าน LINE ได้เลย
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://line.me/R/ti/p/@debeauclinic" target="_blank" rel="noopener noreferrer"
              className="btn-primary cursor-pointer">
              ADD LINE ปรึกษาฟรี <ArrowRight size={16} />
            </a>
            <Link href="/customer-reviews" className="btn-outline cursor-pointer">ดูรีวิวลูกค้า</Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingLine />
    </>
  );
}
