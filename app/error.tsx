"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-offwhite flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="mb-8">
          <svg
            className="mx-auto w-16 h-16 text-primary opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.8}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        {/* Divider */}
        <div className="divider-rose mb-8" />

        {/* Messages */}
        <h1 className="text-3xl sm:text-4xl font-light text-accent tracking-wide mb-4">
          เกิดข้อผิดพลาด
        </h1>
        <p className="text-text-muted font-light leading-relaxed mb-10">
          ขออภัยในความไม่สะดวก กรุณาลองใหม่อีกครั้ง
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => reset()} className="btn-primary">
            ลองใหม่
          </button>
          <Link href="/" className="btn-outline">
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    </main>
  );
}
