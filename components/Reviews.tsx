"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./MotionWrapper";

const reviews = [
  {
    name: "คุณจ๊ะจ๋า",
    handle: "@jaja",
    rating: 5,
    text: "ประทับใจมากค่ะ หมอโบดูแลละเอียดมาก อธิบายทุกขั้นตอนก่อนทำ ผลลัพธ์ออกมาสวยมาก เป็นธรรมชาติ ไม่โอเวอร์ บอกต่อเพื่อนหลายคนเลยค่ะ",
    service: "ฟิลเลอร์ใต้ตา",
  },
  {
    name: "คุณกิ๊ฟ",
    handle: "G20",
    rating: 5,
    text: "ทำฟิลเลอร์ปากมาหลายที่ แต่ที่นี่ดีที่สุดเลยค่ะ หมอใส่ใจและดูแลหลังทำด้วย ผลลัพธ์สวยมาก ปากดูอิ่มขึ้นแต่เป็นธรรมชาติมากๆ",
    service: "ฟิลเลอร์ปาก",
  },
  {
    name: "คุณแนนนี่",
    handle: "Girly Berry",
    rating: 5,
    text: "ทำ Ulthera ยกกระชับหน้า รู้สึกหน้าตึงขึ้นชัดเจนหลังทำ หมอโบเป็นกันเองมากค่ะ คุยง่าย ให้คำแนะนำดี ราคาก็ยุติธรรม",
    service: "Ulthera ยกกระชับหน้า",
  },
  {
    name: "คุณอั๋น",
    handle: "ชยพล บุนนาค",
    rating: 5,
    text: "มาฉีดโบท็อกซ์ลดริ้วรอย หมอโบเชี่ยวชาญมากครับ ผลลัพธ์เป็นธรรมชาติ หน้าดูอ่อนเยาว์ขึ้นเยอะ ไม่แข็งทื่อ มาซ้ำทุก 4 เดือนเลยครับ",
    service: "ลดริ้วรอย Botox",
  },
  {
    name: "คุณแน๊ตตี้",
    handle: "นาตาชา",
    rating: 5,
    text: "ทำ Laser รักษาฝ้า กระ ผิวหน้าใสขึ้นมากค่ะ หมอวางแผนการรักษาให้เฉพาะตัว ผิวดีขึ้นตั้งแต่ครั้งแรก แนะนำมากๆ เลยค่ะ",
    service: "Laser หน้าใส",
  },
  {
    name: "คุณชยพล",
    handle: "",
    rating: 5,
    text: "มาทำ Mesotherapy ผิวหน้าชุ่มชื้นขึ้นมากครับ ลดรอยด่างดำได้ผลชัดเจน หมอดูแลดีมาก คลินิกสะอาด บรรยากาศดี มาอีกแน่ๆ ครับ",
    service: "Mesotherapy",
  },
];

const luxuryEase = [0.25, 0.1, 0.25, 1] as const;

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    reviews[current % total],
    reviews[(current + 1) % total],
    reviews[(current + 2) % total],
  ];

  return (
    <section
      id="reviews"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "#69554a" }}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c38789]/30 to-transparent" />
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #c38789 0%, transparent 50%)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4" style={{ color: "#c38789" }}>
              Testimonials
            </p>
            <h2 className="section-heading text-white mb-5">รีวิวจากลูกค้าจริง</h2>
            <div className="divider-rose mb-6" />
            <p className="text-[15px] font-light text-white/50 max-w-md mx-auto">
              ด้วยใต้ตาที่เติมเต็ม ปรับรูปหน้าให้สวยเป๊ะ ความมั่นใจสูงขึ้น
            </p>
          </div>
        </ScrollReveal>

        {/* Rating summary */}
        <ScrollReveal delay={0.15}>
          <div className="flex justify-center mb-14">
            <div className="flex items-center gap-6 px-8 py-4 border border-white/10">
              <div className="text-center">
                <div className="font-sans text-5xl font-light text-white">5.0</div>
                <div className="flex gap-0.5 justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#c38789" color="#c38789" />
                  ))}
                </div>
              </div>
              <div className="w-px h-14 bg-white/10" />
              <div className="text-[13px] font-light text-white/60 flex flex-col gap-1">
                <p>จาก 5,000+ รีวิว</p>
                <p>ลูกค้าพึงพอใจ 98%</p>
                <p>บอกต่อ 90%+</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {visible.map((review, idx) => (
            <motion.div
              key={`${current}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: luxuryEase,
                type: "tween",
              }}
              className={`relative flex flex-col gap-5 p-8 transition-all duration-500 ${
                idx === 1
                  ? "bg-white scale-[1.02] shadow-2xl -translate-y-2"
                  : "bg-white/5 backdrop-blur-sm border border-white/10"
              }`}
            >
              {/* Quote */}
              <Quote
                size={28}
                strokeWidth={1}
                style={{
                  color: idx === 1 ? "#c38789" : "rgba(195,135,137,0.3)",
                }}
              />

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill={idx === 1 ? "#c38789" : "#c38789"}
                    color={idx === 1 ? "#c38789" : "#c38789"}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-[15px] leading-[1.9] font-light flex-1"
                style={{ color: idx === 1 ? "#69554a" : "rgba(255,255,255,0.8)" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Service tag */}
              <span
                className="self-start text-[11px] tracking-wider uppercase px-3 py-1.5"
                style={{
                  backgroundColor:
                    idx === 1
                      ? "rgba(195,135,137,0.1)"
                      : "rgba(195,135,137,0.15)",
                  color: idx === 1 ? "#c38789" : "#c38789",
                }}
              >
                {review.service}
              </span>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{
                  borderColor: idx === 1 ? "#e8e7e5" : "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center font-sans text-lg font-light"
                  style={{
                    backgroundColor:
                      idx === 1 ? "#f5f2ef" : "rgba(195,135,137,0.15)",
                    color: idx === 1 ? "#c38789" : "#c38789",
                  }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-[13px] font-medium"
                    style={{ color: idx === 1 ? "#69554a" : "#fff" }}
                  >
                    {review.name}
                  </p>
                  {review.handle && (
                    <p
                      className="text-[11px]"
                      style={{
                        color: idx === 1 ? "#8b7f7c" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {review.handle}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-11 h-11 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-[#c38789] hover:border-[#c38789] text-white/60 hover:text-white cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "3px",
                    backgroundColor:
                      i === current ? "#c38789" : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-[#c38789] hover:border-[#c38789] text-white/60 hover:text-white cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
