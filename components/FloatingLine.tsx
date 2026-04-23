"use client";

import { Phone } from "lucide-react";

export default function FloatingLine() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 z-50 pointer-events-none">
      <div
        className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 rounded-full px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(15, 34, 48, 0.96)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        {/* Messenger */}
        <a
          href="https://m.me/debeauclinic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ปรึกษาผ่าน Facebook Messenger"
          className="group flex items-center gap-1.5 sm:gap-2 pl-1 pr-3 sm:pr-4 py-1 rounded-full transition-transform duration-200 hover:scale-[1.04] active:scale-95 cursor-pointer"
          style={{ backgroundColor: "#0084FF", color: "#fff" }}
        >
          <span
            className="flex items-center justify-center rounded-full shrink-0"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(255,255,255,0.18)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.561 6.963z" />
            </svg>
          </span>
          <span className="text-[13px] sm:text-[14px] font-semibold whitespace-nowrap">
            Messenger
          </span>
        </a>

        {/* LINE OA */}
        <a
          href="https://line.me/R/ti/p/@debeauclinic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ปรึกษาฟรีผ่าน LINE Official Account"
          className="group flex items-center gap-1.5 sm:gap-2 pl-1 pr-3 sm:pr-4 py-1 rounded-full transition-transform duration-200 hover:scale-[1.04] active:scale-95 cursor-pointer"
          style={{ backgroundColor: "#06C755", color: "#fff" }}
        >
          <span
            className="flex items-center justify-center rounded-full shrink-0"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(255,255,255,0.18)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
          </span>
          <span className="text-[13px] sm:text-[14px] font-semibold whitespace-nowrap">
            LINE OA
          </span>
        </a>

        {/* Call Center */}
        <a
          href="tel:097-426-6956"
          aria-label="โทรหา Call Center"
          className="group flex items-center gap-1.5 sm:gap-2 pl-1 pr-3 sm:pr-4 py-1 rounded-full transition-transform duration-200 hover:scale-[1.04] active:scale-95 cursor-pointer"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <span
            className="flex items-center justify-center rounded-full shrink-0"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(255,255,255,0.14)",
            }}
          >
            <Phone size={15} strokeWidth={2} />
          </span>
          <span className="text-[13px] sm:text-[14px] font-semibold whitespace-nowrap">
            Call Center
          </span>
        </a>
      </div>
    </div>
  );
}
