"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { label: "ฟิลเลอร์", href: "/filler" },
  { label: "ลดริ้วรอย (Botox)", href: "/botox" },
  { label: "เลเซอร์หน้าใส ฝ้ากระ", href: "/laser/skin-brightening" },
  { label: "เลเซอร์ยกกระชับหน้า", href: "/laser/skin-tightening" },
  { label: "Mesotherapy", href: "/mesotherapy" },
  { label: "Facial Treatments", href: "/facial-treatments" },
];

const navLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ", href: "/filler", hasDropdown: true },
  { label: "เกี่ยวกับหมอโบ", href: "/about-dr-beau" },
  { label: "รีวิวลูกค้า", href: "/customer-reviews" },
  { label: "โปรโมชั่น", href: "/promotion" },
  { label: "บทความ", href: "/blog" },
  { label: "ติดต่อเรา", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isServiceActive = services.some((s) => pathname.startsWith(s.href));
  const isHomepage = pathname === "/";
  const solidBg = scrolled || !isHomepage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        solidBg
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(195,135,137,0.12)]"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden lg:block transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between text-[11px] tracking-wider">
          <span style={{ color: solidBg ? "#8b7f7c" : "rgba(255,255,255,0.5)" }}>
            249 อาคาร 24 house ชั้น 1 ซอย โยธินพัฒนา1 · บางกะปิ กรุงเทพฯ
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:097-426-6956"
              className="flex items-center gap-1.5 cursor-pointer hover:opacity-70"
              style={{ color: solidBg ? "#8b7f7c" : "rgba(255,255,255,0.5)" }}
            >
              <Phone size={11} />
              097-426-6956
            </a>
            <span style={{ color: solidBg ? "#c38789" : "rgba(195,135,137,0.6)" }}>
              จันทร์–เสาร์ 10:00–19:00 น.
            </span>
          </div>
        </div>
        <div
          className="h-px"
          style={{
            background: solidBg
              ? "linear-gradient(to right, transparent, #d9d3cc, transparent)"
              : "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center cursor-pointer lg:hidden">
          <Image
            src="/logo.png"
            alt="DE BEAU CLINIC"
            width={260}
            height={52}
            className={`h-12 w-auto transition-all duration-500 ${
              !solidBg ? "brightness-0 invert" : ""
            }`}
            style={{ display: "block" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-[12px] tracking-[0.15em] uppercase cursor-pointer transition-colors duration-300"
                  style={{
                    color: isServiceActive
                      ? "#c38789"
                      : solidBg
                      ? "#69554a"
                      : "#fff",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white shadow-2xl overflow-hidden py-2 border border-[#e8e7e5]">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c38789] to-transparent" />
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center px-6 py-3 text-[12px] tracking-wider transition-all duration-200 hover:bg-[#f5f2ef] hover:pl-8 cursor-pointer"
                        style={{
                          color: pathname.startsWith(s.href)
                            ? "#c38789"
                            : "#69554a",
                        }}
                        onClick={() => setServicesOpen(false)}
                      >
                        {pathname.startsWith(s.href) && (
                          <span className="w-1.5 h-1.5 rounded-full mr-2.5 shrink-0 bg-[#c38789]" />
                        )}
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 relative cursor-pointer group"
                style={{
                  color: isActive(link.href)
                    ? "#c38789"
                    : solidBg
                    ? "#69554a"
                    : "#fff",
                }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#c38789] transition-all duration-500 ${
                    isActive(link.href)
                      ? "right-0"
                      : "right-full group-hover:right-0"
                  }`}
                />
              </Link>
            )
          )}
        </nav>

        <a
          href="https://line.me/R/ti/p/@debeauclinic"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2.5 px-7 py-2.5 text-[11px] tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 hover:shadow-lg"
          style={{ backgroundColor: "#c38789", color: "#fff" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          นัดหมาย
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 cursor-pointer"
          style={{ color: solidBg ? "#69554a" : "#fff" }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e7e5] px-8 py-8 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key="services">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-[13px] tracking-[0.12em] cursor-pointer"
                  style={{ color: isServiceActive ? "#c38789" : "#69554a" }}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mb-2 border-l border-[#c38789]/20">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                        className="py-2.5 text-[12px] tracking-[0.1em] cursor-pointer"
                        style={{
                          color: pathname.startsWith(s.href)
                            ? "#c38789"
                            : "#8b7f7c",
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-[13px] tracking-[0.12em] cursor-pointer"
                style={{ color: isActive(link.href) ? "#c38789" : "#69554a" }}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://line.me/R/ti/p/@debeauclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-3.5 text-[13px] tracking-[0.15em] uppercase mt-4 cursor-pointer"
            style={{ backgroundColor: "#c38789", color: "#fff" }}
          >
            นัดหมายปรึกษา
          </a>
        </div>
      )}
    </header>
  );
}
