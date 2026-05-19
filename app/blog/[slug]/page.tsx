import { promises as fs } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import "../article.css";

type IndexEntry = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  featuredImage: string | null;
};

type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified: string;
  categories: { id: number; slug: string; name: string }[];
  tags: { id: number; slug: string; name: string }[];
  featuredImage: string | null;
  featuredAlt: string;
  yoastDescription: string;
  content: string;
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

async function getIndex(): Promise<IndexEntry[]> {
  const raw = await fs.readFile(path.join(process.cwd(), "data-drive/blog-posts/_index.json"), "utf8");
  return JSON.parse(raw);
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const raw = await fs.readFile(
      path.join(process.cwd(), "data-drive/blog-posts", `${slug}.json`),
      "utf8"
    );
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function formatThaiDate(iso: string) {
  return new Date(iso).toLocaleDateString("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  const raw = await fs.readFile(
    path.join(process.cwd(), "data-drive/blog-posts/_index.json"),
    "utf8"
  );
  const index: IndexEntry[] = JSON.parse(raw);
  return index.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  const description = article.yoastDescription || article.excerpt || "";
  return {
    title: `${article.title} | DE BEAU CLINIC`,
    description,
    openGraph: article.featuredImage
      ? { images: [{ url: article.featuredImage }] }
      : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, index] = await Promise.all([getArticle(slug), getIndex()]);

  if (!article) notFound();

  // Related: same category, excluding current, up to 3
  const slugCats = article.categories.map((c) => c.slug);
  const related = index
    .filter((p) => p.slug !== slug && p.categories.some((c) => slugCats.includes(c)))
    .slice(0, 3);
  const fallback = related.length < 3
    ? index
        .filter((p) => p.slug !== slug && !related.some((r) => r.slug === p.slug))
        .slice(0, 3 - related.length)
    : [];
  const relatedPosts = [...related, ...fallback];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-0" style={{ backgroundColor: "#4a3a2f" }}>
          <div className="max-w-3xl mx-auto px-6 pb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs tracking-wider mb-8 transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              ← ย้อนกลับไปบทความ
            </Link>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.categories
                .filter((c) => c.slug !== "uncategorized")
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/blog?category=${c.slug}`}
                    className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(195,135,137,0.3)", color: "#f5c5c6" }}
                  >
                    {CATEGORY_LABELS[c.slug] ?? c.name}
                  </Link>
                ))}
            </div>

            <h1 className="text-2xl lg:text-3xl font-light leading-snug mb-4" style={{ color: "#fff" }}>
              {article.title}
            </h1>

            <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              เผยแพร่เมื่อ {formatThaiDate(article.date)}
            </p>
          </div>

          {/* Featured image */}
          {article.featuredImage && (
            <div className="relative w-full max-w-3xl mx-auto" style={{ aspectRatio: "16/9" }}>
              <Image
                src={article.featuredImage}
                alt={article.featuredAlt || article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
        </section>

        {/* Article body */}
        <section className="py-14 px-6" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-3xl mx-auto">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </section>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <section className="py-14 px-6" style={{ backgroundColor: "#f5f2ef" }}>
            <div className="max-w-5xl mx-auto">
              <p
                className="text-xs tracking-[0.3em] uppercase font-medium mb-2"
                style={{ color: "#c38789" }}
              >
                บทความที่เกี่ยวข้อง
              </p>
              <h2 className="text-xl font-light mb-8" style={{ color: "#3a2e2b" }}>
                อ่านเพิ่มเติม
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                    style={{ backgroundColor: "#fff", border: "1px solid #e0ddd9" }}
                  >
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
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <div className="flex flex-wrap gap-1">
                        {post.categories
                          .filter((c) => c !== "uncategorized")
                          .map((c) => (
                            <span
                              key={c}
                              className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: "#f5f2ef", color: "#c38789" }}
                            >
                              {CATEGORY_LABELS[c] ?? c}
                            </span>
                          ))}
                      </div>
                      <h3
                        className="text-sm font-medium leading-snug line-clamp-2 flex-1"
                        style={{ color: "#3a2e2b" }}
                      >
                        {post.title}
                      </h3>
                      <span
                        className="text-[11px] font-medium mt-auto group-hover:underline"
                        style={{ color: "#c38789" }}
                      >
                        อ่านต่อ →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl lg:text-2xl font-light mb-3" style={{ color: "#3a2e2b" }}>
              สนใจเข้ารับบริการ?
            </h2>
            <p className="text-sm font-light mb-8" style={{ color: "#5d524f" }}>
              ปรึกษาหมอโบได้โดยตรง ฟรี ไม่มีค่าใช้จ่าย
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://line.me/R/ti/p/@debeauclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary cursor-pointer"
              >
                ปรึกษาผ่าน LINE
              </a>
              <Link href="/blog" className="btn-outline cursor-pointer">
                ดูบทความทั้งหมด
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingLine />
    </>
  );
}
