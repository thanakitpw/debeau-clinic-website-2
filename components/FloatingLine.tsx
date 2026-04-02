"use client";

import { Phone } from "lucide-react";

export default function FloatingLine() {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3">
      {/* Phone button */}
      <a
        href="tel:097-426-6956"
        aria-label="โทรนัดหมาย"
        className="group flex items-center gap-0 overflow-hidden shadow-2xl transition-all duration-300 hover:gap-2 hover:pr-5 hover:shadow-[0_8px_30px_rgba(105,85,74,0.3)] cursor-pointer"
        style={{
          backgroundColor: "#69554a",
          color: "#fff",
          paddingLeft: "16px",
          paddingRight: "16px",
          height: "52px",
        }}
      >
        <Phone size={18} strokeWidth={1.5} />
        <span className="text-[12px] tracking-wider font-light whitespace-nowrap max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-[120px]">
          โทรนัดหมาย
        </span>
      </a>

      {/* LINE button */}
      <a
        href="https://line.me/R/ti/p/@debeauclinic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ปรึกษาฟรีผ่าน LINE"
        className="group flex items-center gap-0 overflow-hidden shadow-2xl transition-all duration-300 hover:gap-2 hover:pr-5 hover:shadow-[0_8px_30px_rgba(6,199,85,0.3)] cursor-pointer"
        style={{
          backgroundColor: "#c38789",
          color: "#fff",
          paddingLeft: "16px",
          paddingRight: "16px",
          height: "52px",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0"
        >
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        <span className="text-[12px] tracking-wider font-light whitespace-nowrap max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-[120px]">
          ปรึกษาฟรี
        </span>
      </a>
    </div>
  );
}
