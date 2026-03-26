import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Radio } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

export const metadata: Metadata = {
  title: "บริการเลเซอร์ | DE BEAU CLINIC",
  description:
    "บริการเลเซอร์ครบวงจร ทั้งเลเซอร์หน้าใส ฝ้ากระ (Picosure, Helios) และเลเซอร์ยกกระชับหน้า (Ulthera) โดยแพทย์เฉพาะทางประสบการณ์กว่า 16 ปี",
};

const LINE_URL = "https://line.me/R/ti/p/@debeauclinic";

const laserCategories = [
  {
    icon: <Zap size={24} />,
    title: "เลเซอร์หน้าใส ฝ้ากระ",
    titleEn: "Skin Brightening Laser",
    description:
      "รักษาฝ้า กระ จุดด่างดำ รอยสิว ผิวหมองคล้ำ ด้วยเทคโนโลยี Picosure และ Helios ที่ได้ผลลัพธ์แม่นยำ รวดเร็ว ปลอดภัย",
    machines: ["Picosure", "Helios"],
    href: "/laser/skin-brightening",
    accent: "#c38789",
  },
  {
    icon: <Radio size={24} />,
    title: "เลเซอร์ยกกระชับหน้า",
    titleEn: "Skin Tightening",
    description:
      "ยกกระชับใบหน้าโดยไม่ต้องผ่าตัด กระตุ้นคอลลาเจนชั้นลึก ด้วยเทคโนโลยี Ulthera คลื่นเสียงความถี่สูง เห็นผลชัดเจน อยู่นานถึง 1 ปี",
    machines: ["Ulthera"],
    href: "/laser/skin-tightening",
    accent: "#69554a",
  },
];

export default function LaserHubPage() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#e8e7e5" }}>
        {/* ── Hero ── */}
        <section
          className="relative pt-36 pb-20 px-6 overflow-hidden"
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

            <span
              className="inline-block text-xs tracking-[0.3em] uppercase font-medium px-4 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(195,135,137,0.2)",
                color: "#c38789",
              }}
            >
              Laser Treatments
            </span>

            <h1
              className="font-sans text-4xl lg:text-6xl font-light leading-tight tracking-wide mb-4"
              style={{ color: "#fff" }}
            >
              บริการเลเซอร์
            </h1>

            <p
              className="text-sm tracking-[0.2em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Laser — Advanced Skin Solutions
            </p>

            <p
              className="text-base lg:text-lg font-light leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              บริการเลเซอร์ครบวงจร ทั้งหน้าใสลดฝ้ากระ
              และยกกระชับหน้าโดยไม่ต้องผ่าตัด ดูแลโดยหมอโบเองทุกเคส
              ด้วยเทคโนโลยีระดับสากล
            </p>
          </div>
        </section>

        {/* ── Category Cards ── */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
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
                เลือกบริการที่ตรงกับความต้องการ
              </h2>
              <div
                className="w-12 h-[2px] mx-auto mt-5"
                style={{
                  background: "linear-gradient(to right, #c38789, #69554a)",
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {laserCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative flex flex-col bg-white overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid #e0ddd9" }}
                >
                  {/* Top accent line */}
                  <div
                    className="h-[3px]"
                    style={{
                      background: `linear-gradient(to right, ${cat.accent}, ${cat.accent}80)`,
                    }}
                  />

                  <div className="p-8 lg:p-10 flex flex-col gap-5 flex-1">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 flex items-center justify-center"
                      style={{
                        backgroundColor: `${cat.accent}12`,
                        color: cat.accent,
                      }}
                    >
                      {cat.icon}
                    </div>

                    {/* Title */}
                    <div>
                      <p
                        className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1"
                        style={{ color: cat.accent }}
                      >
                        {cat.titleEn}
                      </p>
                      <h3
                        className="font-sans text-xl lg:text-2xl font-light"
                        style={{ color: "#69554a" }}
                      >
                        {cat.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed font-light flex-1"
                      style={{ color: "#8b7f7c" }}
                    >
                      {cat.description}
                    </p>

                    {/* Machine tags */}
                    <div className="flex flex-wrap gap-2">
                      {cat.machines.map((m) => (
                        <span
                          key={m}
                          className="text-[11px] tracking-wider px-3 py-1.5 font-medium"
                          style={{
                            backgroundColor: `${cat.accent}10`,
                            color: cat.accent,
                            border: `1px solid ${cat.accent}25`,
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-2 text-[12px] tracking-wider uppercase font-medium transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: cat.accent }}
                    >
                      ดูรายละเอียด <ArrowRight size={14} />
                    </div>
                  </div>

                  {/* Bottom hover line */}
                  <div
                    className="h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                      background: `linear-gradient(to right, ${cat.accent}, transparent)`,
                    }}
                  />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <p
                className="text-sm font-light mb-5"
                style={{ color: "#8b7f7c" }}
              >
                ไม่แน่ใจว่าบริการไหนเหมาะกับคุณ?
                ปรึกษาหมอโบฟรีได้เลยค่ะ
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3 text-sm tracking-wider cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#c38789", color: "#fff" }}
              >
                ปรึกษาหมอโบฟรี
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingLine />
    </>
  );
}
