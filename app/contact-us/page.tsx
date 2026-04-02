import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle, ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

export const metadata: Metadata = {
  title: "ติดต่อเรา | DE BEAU CLINIC",
  description:
    "ติดต่อ De Beau Clinic ผ่าน LINE @debeauclinic หรือโทร ปรึกษาหมอโบฟรี นัดหมายได้เลย",
};

const channels = [
  {
    icon: MessageCircle,
    label: "LINE Official",
    value: "@debeauclinic",
    sub: "ตอบกลับภายใน 24 ชั่วโมง",
    href: "https://line.me/R/ti/p/@debeauclinic",
    color: "#c38789",
  },
  {
    icon: Phone,
    label: "โทรศัพท์",
    value: "097-426-6956, 097-429-5645",
    sub: "จันทร์–เสาร์ 10:00–19:00 น.",
    href: "tel:097-426-6956",
    color: "#c38789",
  },
  {
    icon: Mail,
    label: "อีเมล",
    value: "info@debeauclinic.com",
    sub: "สอบถามข้อมูลทั่วไป",
    href: "mailto:info@debeauclinic.com",
    color: "#8b7f7c",
  },
  {
    icon: MapPin,
    label: "ที่ตั้งคลินิก",
    value: "กรุงเทพมหานคร",
    sub: "ดูแผนที่และรายละเอียดเพิ่มเติม",
    href: "/contact-us",
    color: "#69554a",
  },
  {
    icon: Clock,
    label: "เวลาทำการ",
    value: "จันทร์–เสาร์",
    sub: "10:00–19:00 น. (หยุดวันอาทิตย์)",
    href: null,
    color: "#c7bfb5",
  },
];

const faqs = [
  {
    q: "ต้องนัดล่วงหน้าไหม?",
    a: "แนะนำให้นัดล่วงหน้าผ่าน LINE เพื่อให้หมอโบสามารถจัดเวลาดูแลทุกเคสอย่างเต็มที่ ลดเวลารอคอย",
  },
  {
    q: "ปรึกษาก่อนทำได้ไหม?",
    a: "ได้เลยค่ะ! หมอโบยินดีให้คำปรึกษาฟรีก่อนตัดสินใจ ติดต่อผ่าน LINE หรือมาพบที่คลินิกได้เลย",
  },
  {
    q: "ราคาเริ่มต้นเท่าไร?",
    a: "ราคาขึ้นอยู่กับบริเวณที่รักษาและปริมาณที่ใช้ สอบถามราคาเฉพาะเคสได้ผ่าน LINE @debeauclinic",
  },
  {
    q: "มีการ์ดผ่อนชำระได้ไหม?",
    a: "รับบัตรเครดิตและมีแผนผ่อนชำระ สอบถามรายละเอียดเพิ่มเติมได้ที่คลินิก",
  },
  {
    q: "ดูแลหลังทำอย่างไร?",
    a: "หมอโบจะแนะนำการดูแลหลังทำเป็นรายเคส พร้อมติดตามผลและรับคำปรึกษาหลังทำตลอด",
  },
  {
    q: "ปลอดภัยแค่ไหน?",
    a: "De Beau Clinic ใช้ผลิตภัณฑ์มาตรฐาน ผ่าน อย. ไทย ดูแลโดยแพทย์เฉพาะทางโดยตรง ปลอดภัยสูง",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden" style={{ backgroundColor: "#69554a" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at top right, #c38789 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: "rgba(195,135,137,0.2)", color: "#c38789" }}>
            Contact Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-light mb-4" style={{ color: "#fff" }}>
            ติดต่อเรา
          </h1>
          <p className="text-base font-light max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            พร้อมให้คำปรึกษาและดูแลคุณ ติดต่อหมอโบได้หลายช่องทาง
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-heading">ช่องทางติดต่อ</h2>
            <div className="divider-rose mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              const content = (
                <div
                  className={`flex flex-col gap-4 p-7 transition-all duration-300 h-full ${ch.href ? "hover:-translate-y-1 hover:shadow-lg cursor-pointer" : ""}`}
                  style={{ backgroundColor: "#e8e7e5", border: "1px solid #e0ddd9" }}
                >
                  <div className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: `${ch.color}18` }}>
                    <Icon size={22} style={{ color: ch.color }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#8b7f7c" }}>
                      {ch.label}
                    </p>
                    <p className="text-base font-medium" style={{ color: "#69554a" }}>{ch.value}</p>
                    <p className="text-xs mt-1 font-light" style={{ color: "#8b7f7c" }}>{ch.sub}</p>
                  </div>
                  {ch.href && (
                    <div className="flex items-center gap-1 text-xs font-medium mt-auto"
                      style={{ color: ch.color }}>
                      ติดต่อเลย <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              );

              return ch.href ? (
                <a key={i} href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="cursor-pointer">
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LINE CTA Banner */}
      <section className="py-16 px-6" style={{ backgroundColor: "#e8e7e5" }}>
        <div className="max-w-3xl mx-auto p-10 text-center"
          style={{ backgroundColor: "#69554a" }}>
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: "#c38789" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
          </div>
          <h2 className="text-2xl font-light mb-2" style={{ color: "#fff" }}>ปรึกษาหมอโบฟรี!</h2>
          <p className="text-sm font-light mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
            ADD LINE เพื่อนัดปรึกษา ถามเรื่องการรักษา หรือสอบถามราคา<br />
            หมอโบตอบเองทุกเคส ตอบกลับภายใน 24 ชั่วโมง
          </p>
          <a href="https://line.me/R/ti/p/@debeauclinic" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 text-base font-medium transition-all duration-300 hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "#c38789", color: "#fff" }}>
            ADD LINE @debeauclinic
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="section-heading">คำถามที่พบบ่อย</h2>
            <div className="divider-rose mt-4" />
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6" style={{ backgroundColor: "#e8e7e5" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "#69554a" }}>
                  Q: {faq.q}
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#8b7f7c" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-16 px-6" style={{ backgroundColor: "#e8e7e5" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.15em] uppercase mb-6" style={{ color: "#8b7f7c" }}>บริการของเรา</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "ฟิลเลอร์", href: "/filler" },
              { label: "ลดริ้วรอย", href: "/botox" },
              { label: "ยกกระชับ Ulthera", href: "/ulthera" },
              { label: "Laser หน้าใส", href: "/laser" },
              { label: "Mesotherapy", href: "/mesotherapy" },
              { label: "Facial Treatments", href: "/facial-treatments" },
            ].map((s) => (
              <Link key={s.href} href={s.href}
                className="px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer"
                style={{ backgroundColor: "#fff", color: "#69554a", border: "1px solid #e0ddd9" }}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingLine />
    </>
  );
}
