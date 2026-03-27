"use client";

import Image from "next/image";
import { ArrowRight, Star, Check } from "lucide-react";
import { motion } from "framer-motion";

const luxuryEase = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cover.jpg"
          alt="Luxury beauty clinic interior"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay เข้มขึ้นบน mobile เพื่ออ่านง่าย */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(58,46,43,0.7) 0%, rgba(58,46,43,0.45) 40%, rgba(58,46,43,0.15) 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(58,46,43,0.65) 0%, rgba(58,46,43,0.4) 50%, rgba(58,46,43,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(58,46,43,0.3) 0%, transparent 30%)",
          }}
        />
      </div>

      {/* Decorative lines — ซ่อนบน mobile */}
      <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-[#c38789]/15 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-[#c38789]/10 to-transparent hidden xl:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 lg:pt-36 pb-24 lg:pb-28">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: luxuryEase, type: "tween" }}
          >
            <div className="w-10 lg:w-16 h-px bg-[#c38789]" />
            <span className="font-sans text-[11px] lg:text-[14px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-[#c38789]">
              Aesthetic & Wellness Center
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-sans text-[2.5rem] lg:text-7xl font-light text-white leading-[1.1] lg:leading-[1.05] mb-5 lg:mb-8 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: luxuryEase, type: "tween" }}
          >
            ศิลปะแห่ง
            <br />
            <span className="text-[#c38789] italic">ความงาม</span>
            <br />
            เฉพาะคุณ
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[15px] lg:text-[17px] font-light text-white/60 mb-8 lg:mb-12 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: luxuryEase, type: "tween" }}
          >
            ผู้เชี่ยวชาญด้านการฉีดฟิลเลอร์แก้ปัญหาใต้ตา และปรับรูปหน้า
            โดยเน้นที่ผลลัพธ์สวยงาม อยู่นานและปลอดภัย ด้วยประสบการณ์กว่า 16 ปี
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-10 lg:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: luxuryEase, type: "tween" }}
          >
            <a
              href="https://line.me/R/ti/p/@debeauclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center justify-center"
            >
              นัดปรึกษาฟรี
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="btn-outline text-center justify-center"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
            >
              ดูบริการทั้งหมด
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 lg:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: luxuryEase, type: "tween" }}
          >
            <div className="flex items-center gap-3 px-4 lg:px-5 py-2.5 lg:py-3 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#c38789" color="#c38789" />
                ))}
              </div>
              <span className="text-[12px] lg:text-[13px] tracking-wide text-white/70">
                5,000+ เคสที่ไว้วางใจ
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-[12px] lg:text-[13px] tracking-wide text-white/50">
                <Check size={14} className="text-[#c38789]" />
                แพทย์ดูแลทุกเคส
              </div>
              <div className="flex items-center gap-2 text-[12px] lg:text-[13px] tracking-wide text-white/50">
                <Check size={14} className="text-[#c38789]" />
                ประสบการณ์ 16+ ปี
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-[#69554a]/90 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: luxuryEase, type: "tween" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-5 grid grid-cols-4 gap-2 lg:gap-6">
          {[
            { num: "16+", label: "ปีประสบการณ์" },
            { num: "5,000+", label: "เคสที่ดูแล" },
            { num: "98%", label: "ลูกค้าพึงพอใจ" },
            { num: "6", label: "บริการครบครัน" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + idx * 0.1, ease: luxuryEase, type: "tween" }}
            >
              <div className="font-sans text-lg lg:text-3xl font-light text-[#c38789]">
                {stat.num}
              </div>
              <div className="text-[10px] lg:text-[11px] tracking-wider uppercase text-white/50 mt-0.5 lg:mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
