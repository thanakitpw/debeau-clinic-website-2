import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight, CheckCircle, ChevronRight, UserRound } from "lucide-react";

export interface ServiceSection {
  title: string;
  content: string;
}

export interface ServiceFeature {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface ServiceArea {
  title: string;
  desc: string;
}

export interface ServicePageProps {
  badge: string;
  title: string;
  titleEn: string;
  heroDesc: string;
  whatIs: string;
  features: ServiceFeature[];
  areas?: ServiceArea[];
  suitableFor?: string[];
  sections?: ServiceSection[];
  ctaText?: string;
  relatedServices?: { label: string; href: string }[];
  accentColor?: string;
}

const LINE_URL = "https://line.me/R/ti/p/@debeauclinic";

export default function ServicePageLayout({
  badge,
  title,
  titleEn,
  heroDesc,
  whatIs,
  features,
  areas,
  suitableFor,
  sections,
  ctaText = "ปรึกษาหมอโบฟรี",
  relatedServices,
  accentColor = "#c38789",
}: ServicePageProps) {
  return (
    <div style={{ backgroundColor: "#e8e7e5" }}>
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: "#69554a" }}
      >
        {/* Decorative top line gradient */}
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, #c38789, transparent)",
          }}
        />
        {/* BG decorative gradient overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at top right, #c38789 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{ backgroundColor: "rgba(199,191,181,0.2)" }}
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
            <ChevronRight size={12} />
            <span style={{ color: "#c38789" }}>{title}</span>
          </nav>

          {/* Badge pill (keeps rounded-full) */}
          <span
            className="inline-block text-xs tracking-[0.3em] uppercase font-medium px-4 py-1.5 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(195,135,137,0.2)",
              color: accentColor,
            }}
          >
            {badge}
          </span>

          <h1
            className="font-sans text-4xl lg:text-6xl font-light leading-tight tracking-wide mb-4"
            style={{ color: "#fff" }}
          >
            {title}
          </h1>

          <p
            className="text-sm tracking-[0.2em] uppercase mb-6"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {titleEn}
          </p>

          <p
            className="text-base lg:text-lg font-light leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {heroDesc}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cursor-pointer"
            >
              {ctaText}
              <ArrowRight size={16} />
            </a>
            <Link
              href="/#services"
              className="btn-outline cursor-pointer"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "#fff",
              }}
            >
              ดูบริการทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* ── What Is ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label" style={{ textAlign: "left" }}>
              เกี่ยวกับการรักษา
            </p>
            <h2
              className="section-heading text-2xl lg:text-3xl mt-2 mb-5"
              style={{ color: "#69554a" }}
            >
              {title} คืออะไร?
            </h2>
            <div
              className="w-10 h-0.5 mb-6"
              style={{
                background: `linear-gradient(to right, ${accentColor}, #8b7f7c)`,
              }}
            />
            <p
              className="text-sm leading-relaxed font-light"
              style={{ color: "#8b7f7c" }}
            >
              {whatIs}
            </p>
          </div>

          {/* Feature cards — sharp edges, no border-radius */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-5 flex flex-col gap-2"
                style={{
                  backgroundColor: i % 2 === 0 ? "#e8e7e5" : "#fff",
                  border: "1px solid #e0ddd9",
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center"
                  style={{ backgroundColor: `${accentColor}18` }}
                >
                  <span style={{ color: accentColor }}>{f.icon}</span>
                </div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "#69554a" }}
                >
                  {f.title}
                </p>
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "#8b7f7c" }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Section ── */}
      <section className="px-6 pb-0" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="w-full overflow-hidden"
            style={{ minHeight: "320px", position: "relative" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80"
              alt="De Beau Clinic treatment"
              fill
              className="object-cover img-zoom"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* ── Areas / Suitable For ── */}
      {(areas || suitableFor) && (
        <section
          className="py-20 px-6"
          style={{ backgroundColor: "#e8e7e5" }}
        >
          <div className="max-w-5xl mx-auto">
            {areas && (
              <>
                <div className="text-center mb-12">
                  <p className="section-label">บริเวณที่รักษาได้</p>
                  <h2 className="section-heading mt-2">
                    ฉีดบริเวณไหนได้บ้าง?
                  </h2>
                  <div className="divider-rose mt-4" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {areas.map((area, i) => (
                    <div
                      key={i}
                      className="p-6"
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #e0ddd9",
                      }}
                    >
                      <div
                        className="font-sans w-8 h-8 flex items-center justify-center text-sm font-semibold mb-3"
                        style={{
                          backgroundColor: `${accentColor}20`,
                          color: accentColor,
                        }}
                      >
                        {i + 1}
                      </div>
                      <h3
                        className="text-base font-medium mb-2"
                        style={{ color: "#69554a" }}
                      >
                        {area.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed font-light"
                        style={{ color: "#8b7f7c" }}
                      >
                        {area.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {suitableFor && (
              <div className={areas ? "mt-16" : ""}>
                <div className="text-center mb-12">
                  <p className="section-label">ใครเหมาะกับการรักษานี้?</p>
                  <h2 className="section-heading mt-2">เหมาะสำหรับ</h2>
                  <div className="divider-rose mt-4" />
                </div>
                <div className="max-w-2xl mx-auto flex flex-col gap-3">
                  {suitableFor.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{ color: accentColor }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "#69554a" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Extra Sections ── */}
      {sections && sections.length > 0 && (
        <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-5xl mx-auto flex flex-col gap-12">
            {sections.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row gap-8 ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Sharp-edged number box */}
                <div
                  className="lg:w-1/3 p-6 flex items-center justify-center"
                  style={{
                    backgroundColor: "#e8e7e5",
                    minHeight: "120px",
                  }}
                >
                  <span
                    className="font-sans text-4xl font-light text-center"
                    style={{ color: accentColor }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="lg:w-2/3 flex flex-col justify-center gap-3">
                  <h3
                    className="text-xl font-medium"
                    style={{ color: "#69554a" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed font-light"
                    style={{ color: "#8b7f7c" }}
                  >
                    {s.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Why Dr. Beau ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#69554a" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Why Choose Us</p>
            <h2
              className="font-sans text-3xl font-light leading-snug mb-5"
              style={{ color: "#fff" }}
            >
              ทำไมต้อง
              <br />
              <span style={{ color: "#c38789" }}>
                หมอโบ เดอโบคลินิก?
              </span>
            </h2>
            <div className="flex flex-col gap-4">
              {[
                "แพทย์เฉพาะทางด้านผิวหนัง จบจากรามาธิบดี + Boston University",
                "ประสบการณ์มากกว่า 15 ปี ดูแลคนไข้ 5,000+ ราย/ปี",
                "ดูแลเองทุกเคส ไม่ส่งต่อให้พยาบาล",
                "ใช้ผลิตภัณฑ์นำเข้าจากยุโรป ผ่าน อย. ไทย",
                "Top 5 คลินิกฉีดฟิลเลอร์ของไทย 3 ปีซ้อน",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#c38789" }}
                  />
                  <span
                    className="text-sm font-light"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sharp-edged doctor card */}
          <div
            className="p-8 text-center flex flex-col items-center gap-5"
            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
          >
            <div
              className="w-20 h-20 flex items-center justify-center border-2"
              style={{
                borderColor: "rgba(195,135,137,0.4)",
                backgroundColor: "rgba(195,135,137,0.1)",
              }}
            >
              <UserRound size={36} style={{ color: "#c38789" }} />
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
              style={{ backgroundColor: "#06C755", color: "#fff" }}
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
      {relatedServices && relatedServices.length > 0 && (
        <section
          className="py-16 px-6"
          style={{ backgroundColor: "#e8e7e5" }}
        >
          <div className="max-w-5xl mx-auto">
            <h3
              className="section-label text-center mb-8"
            >
              บริการที่เกี่ยวข้อง
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
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
      )}
    </div>
  );
}
