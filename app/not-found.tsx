import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-offwhite flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <h1
          className="text-[8rem] sm:text-[10rem] font-light leading-none text-primary select-none"
          style={{ letterSpacing: "0.05em" }}
        >
          404
        </h1>

        {/* Divider */}
        <div className="divider-rose my-8" />

        {/* Messages */}
        <h2 className="text-2xl sm:text-3xl font-light text-accent tracking-wide mb-4">
          ไม่พบหน้าที่คุณต้องการ
        </h2>
        <p className="text-text-muted font-light leading-relaxed mb-10">
          หน้าที่คุณกำลังค้นหาอาจถูกย้ายหรือไม่มีอยู่แล้ว
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            กลับหน้าแรก
          </Link>
          <Link href="/contact-us" className="btn-outline">
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </main>
  );
}
