import type { Metadata } from "next";
import Link from "next/link";
import { Tag, ArrowRight, Sparkles, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

export const metadata: Metadata = {
  title: "โปรโมชั่นพิเศษ | DE BEAU CLINIC",
  description:
    "โปรโมชั่นพิเศษจาก De Beau Clinic สอบถามราคาและรายละเอียดได้ผ่าน LINE @debeauclinic",
};

const promos = [
  {
    badge: "BEST SELLER",
    title: "โปรแกรมฟิลเลอร์ใต้ตา",
    subtitle: "เติมเต็ม ลดรอยหมองคล้ำ คืนความสดใส",
    desc: "เติมเต็มร่องใต้ตาด้วยฟิลเลอร์แท้ JUVEDERM / RESTYLANE นำเข้าจากยุโรป แกะกล่องต่อหน้าคนไข้ ผลลัพธ์เป็นธรรมชาติ อยู่ได้ 1-2 ปี",
    details: ["ฟิลเลอร์แท้ นำเข้าจากยุโรป", "ดูแลโดยหมอโบโดยตรง", "เห็นผลทันทีหลังฉีด"],
    service: "ฟิลเลอร์ใต้ตา",
    href: "/filler",
    accentColor: "#c38789",
    bgColor: "#fff",
  },
  {
    badge: "HOT DEAL",
    title: "โปรแกรม Ulthera ยกกระชับหน้า",
    subtitle: "ยกหน้า กระชับ ไม่ต้องผ่าตัด",
    desc: "เทคโนโลยี MFU-V ระดับ Medical Grade ยกกระชับหน้าโดยไม่ต้องผ่าตัด กระตุ้นคอลลาเจน เห็นผลหลัง 2-3 เดือน อยู่นาน 1 ปี",
    details: ["MFU-V Technology", "ไม่ต้องพักฟื้น", "อยู่นานถึง 1 ปี"],
    service: "Ulthera",
    href: "/ulthera",
    accentColor: "#69554a",
    bgColor: "#69554a",
  },
  {
    badge: "POPULAR",
    title: "Mesotherapy Cocktail หน้าใส",
    subtitle: "วิตามินบำรุงผิวเข้มข้น หน้าใสออร่า",
    desc: "สูตรวิตามินผสม Hyaluronic Acid เฉพาะ De Beau Clinic ผิวใส ชุ่มชื้น ลดจุดด่างดำ เห็นผลตั้งแต่ครั้งแรก",
    details: ["สูตรเฉพาะ De Beau", "ผิวใสตั้งแต่ครั้งแรก", "ลดฝ้า กระ จุดด่างดำ"],
    service: "Mesotherapy",
    href: "/mesotherapy",
    accentColor: "#8b7f7c",
    bgColor: "#fff",
  },
  {
    badge: "NEW",
    title: "โปรแกรม Laser รักษาฝ้า กระ",
    subtitle: "MELASMA PROGRAM เฉพาะบุคคล",
    desc: "ออกแบบโปรแกรม Laser เฉพาะตามสภาพผิว ผสมผสาน Q-Switch ND YAG + Fraxel เพื่อผลลัพธ์ที่ดีที่สุด",
    details: ["Q-Switch + Fraxel", "วางแผนเฉพาะบุคคล", "ผิวใสสม่ำเสมอ"],
    service: "Laser",
    href: "/laser",
    accentColor: "#c38789",
    bgColor: "#fff",
  },
  {
    badge: "RECOMMENDED",
    title: "โปรแกรมโบท็อกลดกราม",
    subtitle: "หน้าเรียว V-Shape โดยไม่ผ่าตัด",
    desc: "ฉีดโบท็อกลดกล้ามเนื้อกรามที่ใหญ่เกินไป ให้หน้าดูเรียวสวย มีสัดส่วน ผลลัพธ์เป็นธรรมชาติ อยู่ 4-6 เดือน",
    details: ["ไม่ต้องผ่าตัด", "เห็นผลใน 1 สัปดาห์", "ทำซ้ำทุก 4-6 เดือน"],
    service: "Botox ลดกราม",
    href: "/botox",
    accentColor: "#8b7f7c",
    bgColor: "#fff",
  },
  {
    badge: "SPECIAL",
    title: "Diamond Peel Facial Treatment",
    subtitle: "ผิวใส กระจ่าง เนียนนุ่ม",
    desc: "ผลัดเซลล์ผิวเก่าด้วย Diamond Tip + Vacuum พร้อม Infusion วิตามิน ผิวสดชื่น กระจ่างใสทันที",
    details: ["Diamond Tip Technology", "เห็นผลทันที", "เหมาะก่อนงานสำคัญ"],
    service: "Facial Treatment",
    href: "/facial-treatments",
    accentColor: "#c7bfb5",
    bgColor: "#fff",
  },
];

export default function PromotionPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden" style={{ backgroundColor: "#c38789" }}>
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at bottom left, #69554a 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Sparkles size={32} className="mx-auto mb-4" style={{ color: "rgba(255,255,255,0.8)" }} />
          <h1 className="text-4xl lg:text-5xl font-light mb-4" style={{ color: "#fff" }}>
            โปรโมชั่นพิเศษ
          </h1>
          <p className="text-base font-light max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            ข้อเสนอพิเศษจาก De Beau Clinic สอบถามราคาและรายละเอียดเพิ่มเติมได้ผ่าน LINE
          </p>
          <p className="text-xs mt-4 font-light" style={{ color: "rgba(255,255,255,0.6)" }}>
            * ราคาและโปรโมชั่นอาจเปลี่ยนแปลงได้ สอบถามรายละเอียดล่าสุดผ่าน LINE @debeauclinic
          </p>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-20 px-6" style={{ backgroundColor: "#e8e7e5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.map((promo, idx) => (
              <div
                key={idx}
                className="relative flex flex-col gap-5 p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: promo.bgColor,
                  border: "1px solid",
                  borderColor: promo.bgColor === "#69554a" ? "transparent" : "#e0ddd9",
                }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: promo.accentColor }} />

                {/* Badge */}
                <div className="flex items-center gap-2">
                  <Tag size={13} style={{ color: promo.accentColor }} />
                  <span className="text-xs tracking-[0.2em] font-bold uppercase"
                    style={{ color: promo.bgColor === "#69554a" ? "#c38789" : promo.accentColor }}>
                    {promo.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="text-lg font-medium leading-snug"
                    style={{ color: promo.bgColor === "#69554a" ? "#fff" : "#69554a" }}>
                    {promo.title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: promo.accentColor }}>
                    {promo.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed font-light mt-1"
                    style={{ color: promo.bgColor === "#69554a" ? "rgba(255,255,255,0.75)" : "#8b7f7c" }}>
                    {promo.desc}
                  </p>
                </div>

                {/* Detail bullets */}
                <ul className="flex flex-col gap-1.5">
                  {promo.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs"
                      style={{ color: promo.bgColor === "#69554a" ? "rgba(255,255,255,0.7)" : "#8b7f7c" }}>
                      <Check size={11} style={{ color: promo.accentColor, flexShrink: 0 }} /> {d}
                    </li>
                  ))}
                </ul>

                {/* Service tag */}
                <span className="self-start text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: promo.bgColor === "#69554a" ? "rgba(195,135,137,0.25)" : `${promo.accentColor}18`,
                    color: promo.bgColor === "#69554a" ? "#fff" : promo.accentColor,
                  }}>
                  {promo.service}
                </span>

                {/* CTA */}
                <div className="flex gap-3 flex-wrap">
                  <a href="https://line.me/R/ti/p/@debeauclinic" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 transition-all duration-200 hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: "#06C755", color: "#fff" }}>
                    สอบถามราคา LINE
                  </a>
                  <Link href={promo.href}
                    className="flex items-center gap-1 text-xs font-medium transition-colors duration-200 cursor-pointer"
                    style={{ color: promo.bgColor === "#69554a" ? "rgba(255,255,255,0.6)" : promo.accentColor }}>
                    ดูรายละเอียด <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: "#69554a" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-4" style={{ color: "#fff" }}>
            ไม่แน่ใจว่าโปรแกรมไหนเหมาะกับคุณ?
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            ADD LINE ปรึกษาหมอโบฟรี หมอจะวางแผนการรักษาที่เหมาะสมกับปัญหาและงบประมาณของคุณ
          </p>
          <a href="https://line.me/R/ti/p/@debeauclinic" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg cursor-pointer"
            style={{ backgroundColor: "#06C755", color: "#fff" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            ADD LINE @debeauclinic ปรึกษาฟรี
          </a>
        </div>
      </section>

      <Footer />
      <FloatingLine />
    </>
  );
}
