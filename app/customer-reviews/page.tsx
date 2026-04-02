"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Play, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const highlightCases = [
  {
    before: "/images/reviews/case-1-before.jpg",
    after: "/images/reviews/case-1-after.jpg",
    name: "คุณมุก",
    service: "ฟิลเลอร์ใต้ตา",
  },
  {
    before: "/images/reviews/case-2-before.jpg",
    after: "/images/reviews/case-2-after.jpg",
    name: "คุณแอน",
    service: "ฟิลเลอร์ใต้ตา",
  },
  {
    before: "/images/reviews/case-3-before.jpg",
    after: "/images/reviews/case-3-after.jpg",
    name: "คุณนุช",
    service: "ฟิลเลอร์ใต้ตา",
  },
  {
    before: "/images/reviews/case-4-before.jpg",
    after: "/images/reviews/case-4-after.jpg",
    name: "คุณซีอิ๊ว",
    service: "ฟิลเลอร์ใต้ตา",
  },
  {
    before: "/images/reviews/case-5-before.jpg",
    after: "/images/reviews/case-5-after.jpg",
    name: "คุณยู",
    service: "ฟิลเลอร์ใต้ตา",
  },
  {
    before: "/images/reviews/case-6-before.jpg",
    after: "/images/reviews/case-6-after.jpg",
    name: "คุณลิเบีย",
    service: "ฟิลเลอร์ใต้ตา",
  },
];

const googleReviews = [
  {
    name: "Suparat Padsanada",
    rating: 5,
    time: "3 เดือนที่แล้ว",
    text: "หมอโบ แนะนำดีค่ะ ใส่ใจคนไข้มากเลย ผลลัพธ์สวยค่ะ ชอบมาก แนะนำเลยค่ะ",
    avatar: "S",
  },
  {
    name: "Kae Kaei",
    rating: 5,
    time: "64 รีวิว",
    text: "หมอทำงานดี พูดจาละเอียดอ่อน คนไข้ทุกคนได้รับการดูแลเป็นอย่างดี ชื่นชมค่ะ",
    avatar: "K",
  },
  {
    name: "Pacharaporn Tuayanonda",
    rating: 5,
    time: "6 เดือนที่แล้ว",
    text: "พอใจมากค่ะ ฟิลเลอร์ใต้ตาสวยมาก ไม่ปวด ไม่บวม แนะนำค่ะ หมอโบเก่งมาก",
    avatar: "P",
  },
  {
    name: "Laddasawan",
    rating: 5,
    time: "4 เดือนที่แล้ว",
    text: "มาทำฟิลเลอร์ใต้ตาครั้งแรก ผลลัพธ์ดีมากค่ะ เป็นธรรมชาติ ไม่โอเวอร์",
    avatar: "L",
  },
];

export default function CustomerReviewsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 lg:pt-36 pb-16 lg:pb-20 px-6 overflow-hidden" style={{ backgroundColor: "#69554a" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at top right, #c38789 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* ซ้าย — ข้อความ */}
            <div>
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium px-4 py-1.5 rounded-full mb-6"
                style={{ backgroundColor: "rgba(195,135,137,0.2)", color: "#c38789" }}>
                Customer Reviews
              </span>
              <h1 className="text-3xl lg:text-5xl font-light leading-tight mb-4" style={{ color: "#fff" }}>
                ความประทับใจลูกค้า
                <br />
                <span style={{ color: "#c38789" }}>คือความภูมิใจของเรา</span>
              </h1>
              <p className="text-sm lg:text-base font-light mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.7)" }}>
                ขอบคุณทุกความไว้วางใจจากลูกค้ากว่า 5,000+ เคส
                ที่เลือกให้ De Beau Clinic ดูแลความงาม
              </p>
              {/* Stats */}
              <div className="flex gap-8">
                {[
                  { value: "5.0", label: "Google Rating" },
                  { value: "5,000+", label: "เคสที่ดูแล" },
                  { value: "98%", label: "พึงพอใจ" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl lg:text-3xl font-light" style={{ color: "#c38789" }}>{s.value}</div>
                    <div className="text-[10px] lg:text-xs tracking-wider uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ขวา — รูป Cover */}
            <div className="relative overflow-hidden hidden lg:block" style={{ aspectRatio: "1/1" }}>
              <Image
                src="/images/reviews/cover.jpg"
                alt="ขอบคุณทุกความประทับใจจากคนไข้จริง"
                fill
                priority
                className="object-cover object-right"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promo Images — โปรแกรมฟิลเลอร์ */}
      <section className="py-12 lg:py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="relative overflow-hidden col-span-2 lg:col-span-1" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/reviews/promo-1.jpg"
                alt="โปรแกรม Under Eye Filler"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/reviews/promo-2.jpg"
                alt="โปรแกรมฟิลเลอร์ปรับใต้ตา"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/reviews/doctor-treatment.jpg"
                alt="หมอโบกำลังทำหัตถการ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Review — Before & After Slider */}
      <section className="py-16 lg:py-20 px-6" style={{ backgroundColor: "#f5f2ef" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase font-medium mb-4 block" style={{ color: "#c38789" }}>
              Highlight Review
            </span>
            <h2 className="text-2xl lg:text-4xl font-light mb-4" style={{ color: "#3a2e2b" }}>
              ผลลัพธ์จริงจากลูกค้าจริง
            </h2>
            <p className="text-sm font-light max-w-xl mx-auto" style={{ color: "#8b7f7c" }}>
              ก่อนและหลังทำฟิลเลอร์ใต้ตากับหมอโบ ลากซ้ายขวาเพื่อเปรียบเทียบผลลัพธ์
            </p>
          </div>

          {/* Slider Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightCases.map((c, i) => (
              <div key={i}>
                <BeforeAfterSlider
                  before={c.before}
                  after={c.after}
                  altBefore={`Before — ${c.name}`}
                  altAfter={`After — ${c.name}`}
                  label={`โปรแกรม${c.service}`}
                />
                <p className="text-sm font-medium text-center mt-2" style={{ color: "#69554a" }}>
                  Review {c.service} {c.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ประสบการณ์จริง — Slider ขนาดใหญ่ */}
      <section className="py-16 lg:py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-light mb-3" style={{ color: "#3a2e2b" }}>
              ประสบการณ์จริงจากผู้ใช้บริการ
            </h2>
            <p className="text-sm font-light max-w-lg mx-auto" style={{ color: "#8b7f7c" }}>
              ภาพ Before & After จริง ไม่ตกแต่ง ไม่ใช้ฟิลเตอร์
              ลากเพื่อเปรียบเทียบผลลัพธ์
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <BeforeAfterSlider
              before="/images/reviews/case-3-before.jpg"
              after="/images/reviews/case-3-after.jpg"
              altBefore="Before — คุณนุช"
              altAfter="After — คุณนุช"
              label="โปรแกรมฟิลเลอร์"
            />
            <BeforeAfterSlider
              before="/images/reviews/case-5-before.jpg"
              after="/images/reviews/case-5-after.jpg"
              altBefore="Before — คุณยู"
              altAfter="After — คุณยู"
              label="โปรแกรมฟิลเลอร์"
            />
          </div>
        </div>
      </section>

      {/* Video Section — เจาะลึกความรู้สึกหลังทำ */}
      <section className="py-16 lg:py-20 px-6" style={{ backgroundColor: "#69554a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase font-medium mb-4 block" style={{ color: "#c38789" }}>
                Video Reviews
              </span>
              <h2 className="text-2xl lg:text-3xl font-light mb-4" style={{ color: "#fff" }}>
                เจาะลึกความรู้สึกหลังทำ
                <br />
                <span style={{ color: "#c38789" }}>ผ่านคำยืนยันจากลูกค้าจริง</span>
              </h2>
              <p className="text-sm font-light mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                ที่ De Beau Clinic เราให้ความสำคัญกับทุกเสียงจากลูกค้า
                เพื่อให้คุณมั่นใจก่อนตัดสินใจดูแลตัวเอง
              </p>
              <a href="https://www.youtube.com/channel/UCf7ypqqydxl4-ycyPLKmjVw"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200 hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: "#c38789", color: "#fff" }}>
                <Play size={16} fill="white" /> ดูรีวิววิดีโอทั้งหมด
              </a>
            </div>
            {/* Video thumbnail */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/reviews/doctor-treatment.jpg"
                alt="วิดีโอรีวิวจากลูกค้าจริง"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <a href="https://www.youtube.com/channel/UCf7ypqqydxl4-ycyPLKmjVw"
                  target="_blank" rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                  style={{ backgroundColor: "rgba(195,135,137,0.9)" }}>
                  <Play size={28} fill="white" color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 lg:py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-light mb-3" style={{ color: "#3a2e2b" }}>
              การันตีความเชื่อมั่นด้วยคะแนนรีวิวจาก Google
            </h2>
            <p className="text-sm font-light max-w-lg mx-auto" style={{ color: "#8b7f7c" }}>
              ขอบคุณทุกรีวิวจากลูกค้าจริงบน Google ที่ไว้วางใจให้ De Beau Clinic ดูแลความงาม
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {googleReviews.map((review, i) => (
              <div key={i} className="p-5 flex flex-col gap-3" style={{ backgroundColor: "#f5f2ef", border: "1px solid #e0ddd9" }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium shrink-0"
                    style={{ backgroundColor: "#c38789", color: "#fff" }}>
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#3a2e2b" }}>{review.name}</p>
                    <p className="text-[10px]" style={{ color: "#8b7f7c" }}>{review.time}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={12} fill="#FBBC04" color="#FBBC04" />
                  ))}
                </div>
                <p className="text-xs font-light leading-relaxed flex-1" style={{ color: "#69554a" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mt-auto">
                  <MapPin size={10} style={{ color: "#8b7f7c" }} />
                  <span className="text-[10px]" style={{ color: "#8b7f7c" }}>Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "#f5f2ef" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-light mb-3" style={{ color: "#3a2e2b" }}>
            อยากมีผลลัพธ์ที่น่าประทับใจแบบนี้บ้างไหม?
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: "#8b7f7c" }}>
            ให้เราช่วยดูแลคุณนะคะ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://line.me/R/ti/p/@debeauclinic" target="_blank" rel="noopener noreferrer"
              className="btn-primary cursor-pointer">
              ปรึกษาหมอโบฟรี <ArrowRight size={16} />
            </a>
            <Link href="/filler" className="btn-outline cursor-pointer">ดูบริการทั้งหมด</Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingLine />
    </>
  );
}
