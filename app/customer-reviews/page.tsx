"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Quote, ArrowRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

const categories = ["ทั้งหมด", "ฟิลเลอร์ใต้ตา", "ฟิลเลอร์ปาก", "Botox", "Ulthera", "Laser"];

const reviews = [
  { name: "คุณเอมี่", age: 36, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "มีปัญหาเบ้าตาลึก ทำให้ใบหน้าดูโทรม หลังทำฟิลเลอร์ใต้ตากับหมอโบ ผลลัพธ์ดีมากค่ะ ใบหน้าดูสดใสขึ้นเยอะเลย บอกต่อทุกคนเลยค่ะ", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-amy.jpg" },
  { name: "คุณนุช", age: 29, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "หมอโบใจดีมาก อธิบายทุกขั้นตอนก่อนทำ ผลลัพธ์เป็นธรรมชาติ ไม่โอเวอร์ ประทับใจมากค่ะ", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-nuch.jpg" },
  { name: "คุณซีอิ๊ว", age: 32, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "ทำมาหลายที่แล้วค่ะ แต่ที่นี่ดีที่สุด หมอดูแลละเอียดมาก ฟิลเลอร์แท้ แกะกล่องหน้าเราเลย มั่นใจมากค่ะ", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-siew.jpg" },
  { name: "คุณยู", age: 27, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "ตาหวานขึ้นเยอะเลยค่ะ ผลลัพธ์เกินคาด บอกต่อเพื่อนไปหลายคนแล้ว ทุกคนพอใจหมด", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-yu.jpg" },
  { name: "คุณลิเบีย", age: 25, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "ผิวใต้ตาดีขึ้นมากเลยค่ะ ไม่มีรอยช้ำ ไม่บวม หมอดูแลดีมาก บรรยากาศคลินิกน่ารัก อบอุ่น", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-libia.jpg" },
  { name: "คุณเจน", age: 30, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "ทำซ้ำมาแล้ว 3 ครั้งค่ะ ไว้ใจหมอโบมากที่สุด ดูแลดีทุกครั้ง ผลลัพธ์คงที่และสวยมาก", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-jane.jpg" },
  { name: "คุณน้ำหอม", age: 26, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "หน้าดูสดชื่นขึ้นมากค่ะ เพื่อนถามตลอดว่านอนหลับพอขึ้นหรือเปล่า 555 ผลลัพธ์เป็นธรรมชาติมากๆ", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-namhom.jpg" },
  { name: "คุณวรรณ", age: 43, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "มีปัญหาใต้ตาคล้ำมานาน หมอโบวิเคราะห์ปัญหาให้ละเอียดมาก ผลลัพธ์ออกมาดีมากค่ะ ใต้ตาสว่างขึ้นชัดเจน", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-wan.jpg" },
  { name: "คุณปอ", age: 28, service: "ฟิลเลอร์ใต้ตา", rating: 5, text: "ฟิลเลอร์ใต้ตาครั้งแรกค่ะ หมอโบอธิบายทุกอย่างชัดเจน ไม่ต้องกังวลเลย ผลลัพธ์เป็นธรรมชาติมากค่ะ", tag: "ฟิลเลอร์ใต้ตา", image: "/images/reviews/review-por.jpg" },
  { name: "คุณจ๊ะจ๋า", age: 34, service: "ฟิลเลอร์ปาก", rating: 5, text: "ทำฟิลเลอร์ปากมาหลายที่ แต่ที่นี่ดีที่สุดเลยค่ะ ปากดูอิ่มขึ้นแต่เป็นธรรมชาติมากๆ ไม่แข็ง ไม่บวม", tag: "ฟิลเลอร์ปาก" },
  { name: "คุณแนนนี่", age: 28, service: "Ulthera", rating: 5, text: "Girly Berry — ทำ Ulthera ยกกระชับหน้า หน้าตึงขึ้นชัดเจนหลังทำ หมอโบเป็นกันเองมากค่ะ คุยง่าย ราคาก็ยุติธรรม", tag: "Ulthera" },
  { name: "คุณอั๋น ชยพล", age: 38, service: "Botox ลดริ้วรอย", rating: 5, text: "มาฉีดโบท็อกซ์ลดริ้วรอย หมอโบเชี่ยวชาญมากครับ ผลลัพธ์เป็นธรรมชาติ หน้าดูอ่อนเยาว์ขึ้นเยอะ มาซ้ำทุก 4 เดือนเลยครับ", tag: "Botox" },
  { name: "คุณแน๊ตตี้ นาตาชา", age: 33, service: "Laser รักษาฝ้า", rating: 5, text: "ทำ Laser รักษาฝ้า กระ ผิวหน้าใสขึ้นมากค่ะ หมอวางแผนการรักษาให้เฉพาะตัว ผิวดีขึ้นตั้งแต่ครั้งแรก", tag: "Laser" },
];

export default function CustomerReviewsPage() {
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");

  const filtered = activeCategory === "ทั้งหมด"
    ? reviews
    : reviews.filter(r => r.tag === activeCategory);

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
            Customer Reviews
          </span>
          <h1 className="text-4xl lg:text-5xl font-light mb-4" style={{ color: "#fff" }}>
            รีวิวจากลูกค้าจริง
          </h1>
          <p className="text-base font-light max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
            เสียงจากผู้ใช้จริง ความพึงพอใจที่บอกต่อ ดูแลกว่า 5,000+ เคส
          </p>
          {/* Summary stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "5.0", label: "คะแนนเฉลี่ย", stars: true },
              { value: "5,000+", label: "เคสที่ดูแล", stars: false },
              { value: "98%", label: "ลูกค้าพึงพอใจ", stars: false },
              { value: "90%+", label: "แนะนำต่อ", stars: false },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-sans font-light mb-1" style={{ color: "#c38789" }}>{s.value}</div>
                {s.stars && (
                  <div className="flex gap-0.5 justify-center mb-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="#c38789" color="#c38789" />)}
                  </div>
                )}
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-12 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-8"
          style={{ backgroundColor: "#e8e7e5" }}>
          <div>
            <p className="text-sm font-medium" style={{ color: "#69554a" }}>ดูรีวิววิดีโอจากลูกค้าจริง</p>
            <p className="text-xs font-light mt-1" style={{ color: "#8b7f7c" }}>
              คุณจ๊ะจ๋า · คุณกิ๊ฟ · คุณแนนนี่ · คุณอั๋น ชยพล · คุณแน๊ตตี้ นาตาชา และอีกมากมาย
            </p>
          </div>
          <a href="https://www.youtube.com/channel/UCf7ypqqydxl4-ycyPLKmjVw"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium shrink-0 transition-all duration-200 hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "#FF0000", color: "#fff" }}>
            <Play size={16} fill="white" /> ดูบน YouTube
          </a>
        </div>
      </section>

      {/* Filter + Reviews Grid */}
      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: activeCategory === cat ? "#c38789" : "#e8e7e5",
                  color: activeCategory === cat ? "#fff" : "#69554a",
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Reviews grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((review, i) => (
              <div key={i} className="flex flex-col gap-0 overflow-hidden"
                style={{ backgroundColor: "#e8e7e5", border: "1px solid #e0ddd9" }}>
                {/* รูป Before/After */}
                {review.image && (
                  <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
                    <Image
                      src={review.image}
                      alt={`Review ${review.service} ${review.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 text-[10px] tracking-wider uppercase font-medium"
                      style={{ backgroundColor: "#c38789", color: "#fff" }}>
                      DE BEAU
                    </div>
                  </div>
                )}
                {/* Content */}
                <div className="flex flex-col gap-4 p-7">
                  <div className="flex items-center justify-between">
                    <Quote size={18} style={{ color: "#c38789" }} />
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} size={13} fill="#c38789" color="#c38789" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-sm font-medium" style={{ color: "#69554a" }}>
                    Review {review.service} {review.name} BY DE BEAU CLINIC
                  </h3>
                  <p className="text-sm leading-relaxed font-light flex-1" style={{ color: "#8b7f7c" }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <span className="self-start text-xs px-3 py-1"
                    style={{ backgroundColor: "rgba(195,135,137,0.1)", color: "#c38789" }}>
                    {review.service}
                  </span>
                  <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "#e0ddd9" }}>
                    <div className="w-9 h-9 flex items-center justify-center text-sm font-medium shrink-0"
                      style={{ backgroundColor: "#c7bfb5", color: "#69554a" }}>
                      {review.name.charAt(2) || review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#69554a" }}>{review.name}</p>
                      <p className="text-xs" style={{ color: "#8b7f7c" }}>อายุ {review.age} ปี</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "#e8e7e5" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-light mb-4" style={{ color: "#69554a" }}>
            อยากเป็นส่วนหนึ่งของครอบครัว De Beau?
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: "#8b7f7c" }}>
            ปรึกษาหมอโบฟรี เพื่อวางแผนการรักษาที่เหมาะกับคุณ
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
