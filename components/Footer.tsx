"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "บริการ",
    links: [
      { label: "ฟิลเลอร์", href: "/filler" },
      { label: "ลดริ้วรอย (Botox)", href: "/botox" },
      { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
      { label: "Laser หน้าใส", href: "/laser" },
      { label: "Mesotherapy", href: "/mesotherapy" },
      { label: "Facial Treatment", href: "/facial-treatments" },
    ],
  },
  {
    title: "เกี่ยวกับเรา",
    links: [
      { label: "เกี่ยวกับหมอโบ", href: "/about-dr-beau" },
      { label: "รีวิวลูกค้า", href: "/customer-reviews" },
      { label: "โปรโมชั่น", href: "/promotion" },
      { label: "บทความ", href: "/blog" },
      { label: "ติดต่อเรา", href: "/contact-us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#3a2e2b" }}>
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c38789]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Image
            src="/logo.png"
            alt="DE BEAU CLINIC"
            width={180}
            height={65}
            className="brightness-0 invert opacity-90"
            style={{ display: "block", width: "180px", height: "auto" }}
          />
          <p className="text-[14px] leading-[1.9] font-light text-white/40 max-w-sm">
            คลินิกความงาม ดูแลโดยแพทย์ผู้เชี่ยวชาญ ประสบการณ์กว่า 16 ปี
            บริการครบครัน ปลอดภัย ได้มาตรฐาน ผลลัพธ์สวยงาม อยู่นานและเป็นธรรมชาติ
          </p>
          <div className="flex items-center gap-3 text-[12px] text-white/30">
            <span>249 อาคาร 24 house ชั้น 1</span>
            <span className="w-1 h-1 rounded-full bg-[#c38789]/40" />
            <span>บางกะปิ กรุงเทพฯ</span>
          </div>
          <a
            href="https://line.me/R/ti/p/@debeauclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-fit px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium transition-opacity hover:opacity-80 cursor-pointer"
            style={{ backgroundColor: "#06C755", color: "#fff" }}
          >
            LINE @debeauclinic
          </a>
        </div>

        {/* Links */}
        {footerLinks.map((col) => (
          <div key={col.title} className="flex flex-col gap-5">
            <h4 className="text-[11px] tracking-[0.25em] uppercase font-medium text-[#c38789]">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-light text-white/40 hover:text-white/80 transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-light text-white/20">
            © 2026 De Beau Clinic. All rights reserved.
          </p>
          <p className="text-[11px] font-light text-white/20">
            De Beau Beauty Clinic · Aesthetic & Wellness Center
          </p>
        </div>
      </div>
    </footer>
  );
}
