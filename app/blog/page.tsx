import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

export const metadata: Metadata = {
  title: "บทความ | DE BEAU CLINIC",
  description: "ความรู้ด้านความงามจากแพทย์ผู้เชี่ยวชาญ ฟิลเลอร์ โบท็อกซ์ Sculptra และการดูแลผิว",
};

type IndexEntry = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  featuredImage: string | null;
};

const CATEGORY_LABELS: Record<string, string> = {
  blog: "บทความ",
  "skin-care-tips": "ดูแลผิว",
  filler: "ฟิลเลอร์",
  botox: "โบท็อกซ์",
  ulthera: "อัลเทอร่า",
  mesotherapy: "เมโสเธอราพี",
  laser: "เลเซอร์",
  review: "รีวิว",
  uncategorized: "ทั่วไป",
};

function formatThaiDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" });
}

function getCategoryLabel(slug: string) {
  return CATEGORY_LABELS[slug] ?? slug;
}

const PER_PAGE = 12;

function buildPageHref(category: string | undefined, page: number) {
  const qs = new URLSearchParams();
  if (category) qs.set("category", category);
  if (page > 1) qs.set("page", String(page));
  const s = qs.toString();
  return s ? `/blog?${s}` : "/blog";
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category, page: pageParam } = await searchParams;

  const raw = readFileSync(join(process.cwd(), "data-drive/blog-posts/_index.json"), "utf8");
  const allPosts: IndexEntry[] = JSON.parse(raw);

  const sorted = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const allCats = Array.from(new Set(sorted.flatMap((p) => p.categories))).filter(
    (c) => c !== "uncategorized"
  );

  const filtered = category
    ? sorted.filter((p) => p.categories.includes(category))
    : sorted;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const requestedPage = Number(pageParam) || 1;
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const pageStart = (currentPage - 1) * PER_PAGE;
  const pagedPosts = filtered.slice(pageStart, pageStart + PER_PAGE);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#4a3a2f" }}>
          <div className="max-w-5xl mx-auto text-center">
            <span
              className="inline-block text-xs tracking-[0.35em] uppercase font-medium px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(195,135,137,0.25)", color: "#c38789" }}
            >
              Knowledge Hub
            </span>
            <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-4" style={{ color: "#fff" }}>
              บทความ
            </h1>
            <p className="text-base font-light max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              ความรู้ด้านความงามจากแพทย์ผู้เชี่ยวชาญ เพื่อให้คุณตัดสินใจได้อย่างมั่นใจ
            </p>
          </div>
        </section>

        {/* Category filter chips */}
        <section
          className="py-6 px-6 sticky top-20 z-30 border-b"
          style={{ backgroundColor: "#fff", borderColor: "#e0ddd9" }}
        >
          <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto pb-1">
            <Link
              href="/blog"
              className="shrink-0 px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full"
              style={{
                backgroundColor: !category ? "#c38789" : "transparent",
                color: !category ? "#fff" : "#5d524f",
                border: !category ? "1px solid #c38789" : "1px solid #d9d3cc",
              }}
            >
              ทั้งหมด
            </Link>
            {allCats.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${cat}`}
                className="shrink-0 px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full"
                style={{
                  backgroundColor: category === cat ? "#c38789" : "transparent",
                  color: category === cat ? "#fff" : "#5d524f",
                  border: category === cat ? "1px solid #c38789" : "1px solid #d9d3cc",
                }}
              >
                {getCategoryLabel(cat)}
              </Link>
            ))}
          </div>
        </section>

        {/* Articles grid */}
        <section className="py-16 px-6" style={{ backgroundColor: "#f5f2ef" }}>
          <div className="max-w-5xl mx-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-sm" style={{ color: "#5d524f" }}>
                ยังไม่มีบทความในหมวดหมู่นี้
              </p>
            ) : (
              <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pagedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                    style={{ backgroundColor: "#fff", border: "1px solid #e0ddd9" }}
                  >
                    {/* Image */}
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{ background: "linear-gradient(135deg, #c38789, #4a3a2f)" }}
                        />
                      )}
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-1.5">
                        {post.categories
                          .filter((c) => c !== "uncategorized")
                          .map((c) => (
                            <span
                              key={c}
                              className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: "#f5f2ef", color: "#c38789" }}
                            >
                              {getCategoryLabel(c)}
                            </span>
                          ))}
                      </div>

                      {/* Title */}
                      <h2
                        className="text-sm font-medium leading-snug line-clamp-3"
                        style={{ color: "#3a2e2b" }}
                      >
                        {post.title}
                      </h2>

                      {/* Date + read more */}
                      <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid #e8e7e5" }}>
                        <span className="text-[11px]" style={{ color: "#5d524f" }}>
                          {formatThaiDate(post.date)}
                        </span>
                        <span
                          className="text-[11px] font-medium transition-colors duration-200 group-hover:underline"
                          style={{ color: "#c38789" }}
                        >
                          อ่านต่อ →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <nav
                  className="mt-12 flex items-center justify-center gap-2 flex-wrap"
                  aria-label="หน้าบทความ"
                >
                  <Link
                    href={buildPageHref(category, Math.max(1, currentPage - 1))}
                    aria-disabled={currentPage === 1}
                    tabIndex={currentPage === 1 ? -1 : 0}
                    className="px-3 py-1.5 text-sm rounded-full transition-colors duration-200"
                    style={{
                      border: "1px solid #d9d3cc",
                      color: currentPage === 1 ? "#c7bfb5" : "#5d524f",
                      pointerEvents: currentPage === 1 ? "none" : "auto",
                      backgroundColor: "transparent",
                    }}
                  >
                    ← ก่อนหน้า
                  </Link>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={buildPageHref(category, p)}
                      className="min-w-[36px] px-3 py-1.5 text-sm font-medium rounded-full text-center transition-colors duration-200"
                      style={{
                        backgroundColor: p === currentPage ? "#c38789" : "transparent",
                        color: p === currentPage ? "#fff" : "#5d524f",
                        border: p === currentPage ? "1px solid #c38789" : "1px solid #d9d3cc",
                      }}
                    >
                      {p}
                    </Link>
                  ))}

                  <Link
                    href={buildPageHref(category, Math.min(totalPages, currentPage + 1))}
                    aria-disabled={currentPage === totalPages}
                    tabIndex={currentPage === totalPages ? -1 : 0}
                    className="px-3 py-1.5 text-sm rounded-full transition-colors duration-200"
                    style={{
                      border: "1px solid #d9d3cc",
                      color: currentPage === totalPages ? "#c7bfb5" : "#5d524f",
                      pointerEvents: currentPage === totalPages ? "none" : "auto",
                      backgroundColor: "transparent",
                    }}
                  >
                    ถัดไป →
                  </Link>
                </nav>
              )}
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl lg:text-2xl font-light mb-3" style={{ color: "#3a2e2b" }}>
              มีคำถามเพิ่มเติม?
            </h2>
            <p className="text-sm font-light mb-8" style={{ color: "#5d524f" }}>
              ปรึกษาหมอโบได้โดยตรง ฟรี ไม่มีค่าใช้จ่าย
            </p>
            <a
              href="https://line.me/R/ti/p/@debeauclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cursor-pointer"
            >
              ปรึกษาผ่าน LINE
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingLine />
    </>
  );
}
