import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Crown, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

export const metadata: Metadata = {
  title: "โปรเซตผิวดารา | DE BEAU CLINIC",
  description:
    "โปรเซตผิวดารา Program Supreme Skin 4 ระดับจาก De Beau Clinic เริ่มต้น 19,900 บ. สอบถามรายละเอียดผ่าน LINE @debeauclinic",
};

type PackageItem = { name: string; desc?: string };
type Package = {
  letter: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  image: string;
  badge?: string;
  featured?: boolean;
  items: PackageItem[];
};

const packages: Package[] = [
  {
    letter: "A",
    name: "Aurora Skin",
    subtitle: "โปรเซตผิวดารา",
    price: "19,900",
    originalPrice: "38,000",
    image: "/images/promotions/promotion_5.jpg",
    badge: "เริ่มต้น",
    items: [
      { name: "Baby pore", desc: "กระชับรูขุมขน" },
      { name: "Vel Luxe skin", desc: "ผิวฉ่ำน้ำ กลาสสกิน" },
      { name: "Snow white therapy", desc: "ลดความหมอง เพิ่มความกระจ่างใส" },
      { name: "Crystal Glow", desc: "บำรุงผิวทั่วเรือนร่าง" },
      { name: "Refreshing calming Mask", desc: "มาสก์หน้าบำรุงผิว" },
    ],
  },
  {
    letter: "B",
    name: "Glowe' Skin",
    subtitle: "โปรเซตผิวดารา",
    price: "39,900",
    originalPrice: "80,000",
    image: "/images/promotions/promotion_4.jpg",
    badge: "POPULAR",
    items: [
      { name: "Baby pore", desc: "กระชับรูขุมขน" },
      { name: "Vel Luxe skin", desc: "ผิวฉ่ำน้ำ กลาสสกิน" },
      { name: "Snow white therapy", desc: "ลดความหมอง เพิ่มความกระจ่างใส" },
      { name: "Crystal Glow", desc: "บำรุงผิวทั่วเรือนร่าง" },
      { name: "Refreshing calming Mask", desc: "มาสก์หน้าบำรุงผิว" },
      { name: "Glass & glow", desc: "ชุ่มชื้นยาวนาน ผิวเรียบเนียน" },
      { name: "Program Lumi-Glow", desc: "ลดจุดด่างดำ กระตุ้นคอลลาเจน" },
    ],
  },
  {
    letter: "C",
    name: "De beau signature",
    subtitle: "โปรเซตผิวดารา",
    price: "59,900",
    originalPrice: "120,000",
    image: "/images/promotions/promotion_2.jpg",
    badge: "SIGNATURE",
    featured: true,
    items: [
      { name: "Baby pore (Meso Botox)", desc: "กระชับรูขุมขน" },
      { name: "Vel Luxe skin (Meso Chanel)", desc: "ผิวฉ่ำน้ำ กลาสสกิน" },
      { name: "Snow white therapy (Meso หน้าใส)", desc: "ลดความหมอง เพิ่มความกระจ่างใส" },
      { name: "Crystal Glow (IV drip)", desc: "บำรุงผิวทั่วเรือนร่าง" },
      { name: "Refreshing calming Mask", desc: "มาสก์หน้าบำรุงผิว" },
      { name: "Glass & glow (Rejuran PN PDRN)", desc: "ชุ่มชื้นยาวนาน ผิวเรียบเนียน" },
      { name: "Program Pico Sure (Laser ผิวใส)", desc: "ลดฝ้า กระ จุดด่างดำระดับลึก" },
      { name: "Hydra vive (Skinvive 1cc)", desc: "บำรุงผิวชุ่มชื้นยาวนาน 6-8 เดือน" },
      { name: "Juve Luxe (Juvelook)", desc: "กระตุ้นคอลลาเจน ผิวฉ่ำน้ำ กระจ่างใส" },
    ],
  },
  {
    letter: "D",
    name: "De beau prestige skin therapy",
    subtitle: "โปรเซตผิวดารา",
    price: "99,900",
    originalPrice: "180,000",
    image: "/images/promotions/promotion_3.jpg",
    badge: "PRESTIGE",
    items: [
      { name: "Baby pore (Meso Botox)", desc: "กระชับรูขุมขน" },
      { name: "Vel Luxe skin (Meso Chanel)", desc: "ผิวฉ่ำน้ำ กลาสสกิน" },
      { name: "Snow white therapy (Meso หน้าใส)", desc: "ลดความหมอง เพิ่มความกระจ่างใส" },
      { name: "Crystal Glow (IV drip)", desc: "บำรุงผิวทั่วเรือนร่าง" },
      { name: "Refreshing calming Mask", desc: "มาสก์หน้าบำรุงผิว" },
      { name: "Glass & glow (Rejuran PN PDRN)", desc: "ชุ่มชื้นยาวนาน ผิวเรียบเนียน" },
      { name: "Program Pico Sure (Laser ผิวใส)", desc: "ลดฝ้า กระ จุดด่างดำระดับลึก" },
      { name: "Hydra vive (Skinvive 1cc)", desc: "บำรุงผิวชุ่มชื้นยาวนาน 6-8 เดือน" },
      { name: "Juve Luxe (Juvelook)", desc: "กระตุ้นคอลลาเจน ผิวฉ่ำน้ำ กระจ่างใส" },
      { name: "Sculptra", desc: "กระชับผิวแน่น สร้างคอลลาเจน ผิวเด็กอ่อนเยาว์" },
      { name: "Derma Reborn (Growth Factor)", desc: "ผิวกำเนิดใหม่ ย้อนวัยให้ผิวอิ่มฟู" },
    ],
  },
];

export default function PromotionPage() {
  return (
    <>
      <Navbar />

      {/* Package Tiers */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-24 px-6" style={{ backgroundColor: "#f7f5f2" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-3" style={{ color: "#c38789" }}>
              Choose Your Tier
            </p>
            <h2 className="text-3xl lg:text-4xl font-light" style={{ color: "#69554a" }}>
              เลือกแพ็กเกจที่เหมาะกับคุณ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <article
                key={pkg.letter}
                className={`relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  pkg.featured ? "ring-2 ring-[#c38789]" : ""
                }`}
                style={{
                  backgroundColor: "#fff",
                  border: pkg.featured ? "none" : "1px solid #e8e4df",
                }}
              >
                {/* Featured ribbon */}
                {pkg.featured && (
                  <div
                    className="absolute top-5 right-0 px-4 py-1.5 text-[10px] tracking-[0.25em] font-semibold uppercase z-20"
                    style={{ backgroundColor: "#c38789", color: "#fff" }}
                  >
                    <Crown size={10} className="inline mr-1.5 -mt-0.5" />
                    Recommended
                  </div>
                )}

                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#f4ecea]">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7 lg:p-9">
                  {/* Letter + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: pkg.featured ? "#c38789" : "#f4ecea",
                        color: pkg.featured ? "#fff" : "#c38789",
                      }}
                    >
                      {pkg.letter}
                    </div>
                    {pkg.badge && (
                      <span
                        className="text-[10px] tracking-[0.25em] font-semibold uppercase px-3 py-1"
                        style={{
                          backgroundColor: "#fdf8f6",
                          color: "#c38789",
                          border: "1px solid #f0dedb",
                        }}
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-2" style={{ color: "#c38789" }}>
                    {pkg.subtitle}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-light mb-5 leading-tight" style={{ color: "#69554a" }}>
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-6 pb-6 border-b" style={{ borderColor: "#ede7e1" }}>
                    <span className="text-4xl lg:text-5xl font-light" style={{ color: "#c38789" }}>
                      {pkg.price}
                    </span>
                    <span className="text-sm font-light" style={{ color: "#8b7f7c" }}>
                      บาท
                    </span>
                    <span className="text-sm font-light line-through ml-auto" style={{ color: "#b3a89f" }}>
                      ปกติ {pkg.originalPrice}
                    </span>
                  </div>

                  {/* Items */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 flex-1">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex gap-2.5">
                        <div
                          className="flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5"
                          style={{ backgroundColor: "#f4ecea" }}
                        >
                          <Check size={11} style={{ color: "#c38789" }} strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-medium leading-snug" style={{ color: "#69554a" }}>
                            {item.name}
                          </p>
                          {item.desc && (
                            <p className="text-[11px] font-light leading-snug mt-0.5" style={{ color: "#8b7f7c" }}>
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://line.me/R/ti/p/@debeauclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-medium transition-all duration-300 hover:opacity-90 cursor-pointer"
                    style={{
                      backgroundColor: pkg.featured ? "#c38789" : "#69554a",
                      color: "#fff",
                    }}
                  >
                    ทักจองคิว / ปรึกษาฟรี
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filler Promo */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-3" style={{ color: "#c38789" }}>
              Also Available
            </p>
            <h2 className="text-3xl lg:text-4xl font-light" style={{ color: "#69554a" }}>
              โปรโมชั่นฟิลเลอร์
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden border" style={{ borderColor: "#ede7e1" }}>
            <div className="relative aspect-square">
              <Image
                src="/images/promotions/promotion_1.jpg"
                alt="โปรโมชั่นฟิลเลอร์"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12" style={{ backgroundColor: "#fdf8f6" }}>
              <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-2" style={{ color: "#c38789" }}>
                Filler Promotion
              </p>
              <h3 className="text-2xl lg:text-3xl font-light mb-5" style={{ color: "#69554a" }}>
                ฟิลเลอร์แท้ นำเข้าจากยุโรป
              </h3>
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-baseline gap-2">
                  <Star size={14} style={{ color: "#c38789" }} fill="#c38789" />
                  <span className="text-sm font-medium" style={{ color: "#69554a" }}>
                    รุ่น 1 ปี
                  </span>
                  <span className="text-sm font-light ml-auto" style={{ color: "#c38789" }}>
                    14,900 – 19,900.- / 1cc
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <Star size={14} style={{ color: "#c38789" }} fill="#c38789" />
                  <span className="text-sm font-medium" style={{ color: "#69554a" }}>
                    รุ่น 2 ปี
                  </span>
                  <span className="text-sm font-light ml-auto" style={{ color: "#c38789" }}>
                    23,900.- / 1cc
                  </span>
                </div>
              </div>
              <p className="text-sm font-light mb-6 leading-relaxed" style={{ color: "#8b7f7c" }}>
                ฟิลเลอร์แท้ JUVEDERM / RESTYLANE แกะกล่องต่อหน้าคนไข้ ดูแลโดยหมอโบโดยตรง
              </p>
              <div className="flex gap-3">
                <a
                  href="https://line.me/R/ti/p/@debeauclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 hover:opacity-90 cursor-pointer"
                  style={{ backgroundColor: "#c38789", color: "#fff" }}
                >
                  สอบถามราคา LINE
                </a>
                <Link
                  href="/filler"
                  className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 border hover:bg-[#f4ecea] cursor-pointer"
                  style={{ borderColor: "#c38789", color: "#c38789" }}
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: "#69554a" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-light mb-4" style={{ color: "#fff" }}>
            ไม่แน่ใจว่าโปรแกรมไหนเหมาะกับคุณ?
          </h2>
          <p className="text-sm font-light mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            ADD LINE ปรึกษาหมอโบฟรี หมอจะวางแผนการรักษาที่เหมาะสมกับปัญหาและงบประมาณของคุณ
          </p>
          <a
            href="https://line.me/R/ti/p/@debeauclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg cursor-pointer"
            style={{ backgroundColor: "#c38789", color: "#fff" }}
          >
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
