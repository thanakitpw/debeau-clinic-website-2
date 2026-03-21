import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, BookOpen, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "ไม่พบบทความ" };
  return {
    title: `${post.title} | DE BEAU CLINIC`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-0 px-6"
          style={{ background: `linear-gradient(135deg, ${post.gradientFrom} 0%, ${post.gradientTo} 100%)` }}
        >
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70 cursor-pointer"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <ArrowLeft size={14} /> กลับหน้าบทความ
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}
              >
                <Tag size={9} className="inline mr-1" />
                {post.category}
              </span>
              <span className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                <Clock size={11} /> {post.readTime}
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                {post.date}
              </span>
            </div>

            <h1
              className="text-3xl lg:text-4xl font-light leading-snug mb-6"
              style={{ color: "#fff" }}
            >
              {post.title}
            </h1>

            <p className="text-base font-light leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
              {post.excerpt}
            </p>

            {/* Cover image placeholder */}
            <div
              className="w-full flex flex-col items-center justify-center gap-4 overflow-hidden"
              style={{
                minHeight: "300px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderBottom: "none",
              }}
            >
              <BookOpen size={52} style={{ color: "rgba(255,255,255,0.4)" }} />
              <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.35)" }}>
                ใส่รูปภาพประกอบบทความ
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                Cover Image · {post.titleEn}
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-3xl mx-auto">

            {/* Intro */}
            <div
              className="p-6 mb-10 border-l-4"
              style={{ backgroundColor: "#f9f8f7", borderColor: post.accentColor }}
            >
              <p className="text-base font-light leading-relaxed" style={{ color: "#69554a" }}>
                {post.content.intro}
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-12">
              {post.content.sections.map((section, i) => (
                <div key={i} className="flex flex-col gap-4">
                  {/* In-article image placeholder */}
                  {i === 1 && (
                    <div
                      className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed mb-2"
                      style={{ minHeight: "200px", borderColor: "#e0ddd9", backgroundColor: "#f9f8f7" }}
                    >
                      <BookOpen size={28} style={{ color: "#c7bfb5" }} />
                      <p className="text-xs" style={{ color: "#c7bfb5" }}>ใส่รูปภาพประกอบ</p>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${post.accentColor}18` }}
                    >
                      <span className="text-xs font-semibold" style={{ color: post.accentColor }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="text-xl font-medium pt-0.5" style={{ color: "#69554a" }}>
                      {section.heading}
                    </h2>
                  </div>
                  <p className="text-sm font-light leading-[1.9]" style={{ color: "#8b7f7c" }}>
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div
              className="mt-12 p-7 flex flex-col gap-3"
              style={{ backgroundColor: `${post.accentColor}0f`, border: `1px solid ${post.accentColor}25` }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={18} style={{ color: post.accentColor }} />
                <p className="text-sm font-semibold" style={{ color: post.accentColor }}>
                  สรุป
                </p>
              </div>
              <p className="text-sm font-light leading-relaxed" style={{ color: "#69554a" }}>
                {post.content.conclusion}
              </p>
            </div>

            {/* CTA */}
            <div
              className="mt-10 p-8 flex flex-col items-center text-center gap-4"
              style={{ backgroundColor: "#69554a" }}
            >
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(195,135,137,0.8)" }}>
                ปรึกษาฟรี
              </p>
              <h3 className="text-xl font-light" style={{ color: "#fff" }}>
                สนใจเข้ารับบริการ?
              </h3>
              <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.6)" }}>
                ปรึกษาหมอโบก่อนได้เลย ไม่มีค่าใช้จ่าย
              </p>
              <a
                href="https://line.me/R/ti/p/@debeauclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: "#c38789", color: "#fff" }}
              >
                ปรึกษาผ่าน LINE <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="pb-20 px-6" style={{ backgroundColor: "#f9f8f7" }}>
            <div className="max-w-3xl mx-auto">
              <div className="pt-12 pb-8 border-t" style={{ borderColor: "#e0ddd9" }}>
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-8" style={{ color: "#8b7f7c" }}>
                  บทความที่เกี่ยวข้อง
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                      style={{ border: "1px solid #e0ddd9", backgroundColor: "#fff" }}
                    >
                      <div
                        className="h-32 flex items-center justify-center relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${rel.gradientFrom}, ${rel.gradientTo})` }}
                      >
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-15" style={{ backgroundColor: "#fff" }} />
                        <BookOpen size={28} style={{ color: "rgba(255,255,255,0.8)" }} />
                      </div>
                      <div className="p-4 flex flex-col gap-2">
                        <span
                          className="text-[11px] px-2 py-0.5 rounded-full self-start font-medium"
                          style={{ backgroundColor: `${rel.accentColor}15`, color: rel.accentColor }}
                        >
                          {rel.category}
                        </span>
                        <h4 className="text-sm font-medium leading-snug group-hover:opacity-75 transition-opacity" style={{ color: "#69554a" }}>
                          {rel.title}
                        </h4>
                        <span className="text-xs flex items-center gap-1 mt-1" style={{ color: rel.accentColor }}>
                          อ่านต่อ <ArrowRight size={11} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingLine />
    </>
  );
}
