"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import { blogPosts } from "@/lib/blog-data";

const categories = ["ทั้งหมด", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");

  const filteredPosts =
    activeCategory === "ทั้งหมด"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#69554a" }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <span
              className="inline-block text-xs tracking-[0.35em] uppercase font-medium px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(195,135,137,0.25)", color: "#c38789" }}
            >
              Knowledge Hub
            </span>
            <h1
              className="text-4xl lg:text-5xl font-light leading-tight mb-4"
              style={{ color: "#fff" }}
            >
              บทความความงาม
            </h1>
            <p
              className="text-base font-light max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              ความรู้จากแพทย์ผู้เชี่ยวชาญ เพื่อให้คุณตัดสินใจได้อย่างมั่นใจ
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6 sticky top-20 z-30 border-b" style={{ backgroundColor: "#fff", borderColor: "#e0ddd9" }}>
          <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="shrink-0 px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer rounded-full"
                style={{
                  backgroundColor: cat === activeCategory ? "#c38789" : "transparent",
                  color: cat === activeCategory ? "#fff" : "#8b7f7c",
                  border: cat === activeCategory ? "1px solid #c38789" : "1px solid #d9d3cc",
                  boxShadow: cat === activeCategory ? "0 2px 8px rgba(195,135,137,0.35)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Content */}
        {filteredPosts.length === 0 ? (
          <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
            <div className="max-w-5xl mx-auto text-center">
              <BookOpen size={48} style={{ color: "#c7bfb5" }} className="mx-auto mb-4" />
              <p className="text-lg font-light" style={{ color: "#8b7f7c" }}>
                ยังไม่มีบทความในหมวดหมู่นี้
              </p>
            </div>
          </section>
        ) : (
          <>
            {/* Featured Post */}
            <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
              <div className="max-w-5xl mx-auto">
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: "#c38789" }}>
                  บทความแนะนำ
                </p>
                <Link href={`/blog/${featured.slug}`} className="group block cursor-pointer">
                  <div
                    className="overflow-hidden grid lg:grid-cols-2 gap-0 transition-all duration-300 hover:shadow-xl"
                    style={{ border: "1px solid #e0ddd9" }}
                  >
                    {/* Image */}
                    <div className="relative h-72 lg:h-auto min-h-[280px] overflow-hidden">
                      {featured.image ? (
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${featured.gradientFrom}, ${featured.gradientTo})` }}
                        >
                          <BookOpen size={48} style={{ color: "rgba(255,255,255,0.9)" }} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center gap-4" style={{ backgroundColor: "#faf9f8" }}>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ backgroundColor: `${featured.accentColor}18`, color: featured.accentColor }}
                        >
                          {featured.category}
                        </span>
                        <span className="text-xs flex items-center gap-1" style={{ color: "#8b7f7c" }}>
                          <Clock size={11} /> {featured.readTime}
                        </span>
                      </div>
                      <h2
                        className="text-2xl lg:text-3xl font-light leading-snug group-hover:opacity-80 transition-opacity"
                        style={{ color: "#69554a" }}
                      >
                        {featured.title}
                      </h2>
                      <p className="text-sm font-light leading-relaxed line-clamp-3" style={{ color: "#8b7f7c" }}>
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs" style={{ color: "#c7bfb5" }}>{featured.date}</span>
                        <span
                          className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all duration-200"
                          style={{ color: featured.accentColor }}
                        >
                          อ่านต่อ <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            {/* All Posts Grid */}
            {rest.length > 0 && (
              <section className="pb-20 px-6" style={{ backgroundColor: "#fff" }}>
                <div className="max-w-5xl mx-auto">
                  <p className="text-xs tracking-[0.25em] uppercase font-medium mb-8" style={{ color: "#8b7f7c" }}>
                    บทความทั้งหมด
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                        style={{ border: "1px solid #e0ddd9", backgroundColor: "#faf9f8" }}
                      >
                        {/* Card Image */}
                        <div className="relative h-44 overflow-hidden">
                          {post.image ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})` }}
                            >
                              <BookOpen size={32} style={{ color: "rgba(255,255,255,0.85)" }} />
                            </div>
                          )}
                        </div>

                        {/* Card Content */}
                        <div className="flex flex-col gap-3 p-5 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                              style={{ backgroundColor: `${post.accentColor}15`, color: post.accentColor }}
                            >
                              <Tag size={9} className="inline mr-1" />
                              {post.category}
                            </span>
                            <span className="text-[11px] flex items-center gap-1" style={{ color: "#c7bfb5" }}>
                              <Clock size={10} /> {post.readTime}
                            </span>
                          </div>
                          <h3
                            className="text-base font-medium leading-snug group-hover:opacity-75 transition-opacity"
                            style={{ color: "#69554a" }}
                          >
                            {post.title}
                          </h3>
                          <p className="text-xs font-light leading-relaxed line-clamp-2 flex-1" style={{ color: "#8b7f7c" }}>
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "#e8e7e5" }}>
                            <span className="text-[11px]" style={{ color: "#c7bfb5" }}>{post.date}</span>
                            <span
                              className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                              style={{ color: post.accentColor }}
                            >
                              อ่านต่อ <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}

                    {/* Placeholder card for future posts */}
                    <div
                      className="flex flex-col items-center justify-center gap-3 p-8"
                      style={{
                        background: "linear-gradient(135deg, rgba(195,135,137,0.08), rgba(105,85,74,0.08))",
                        border: "1px solid #e0ddd9",
                        minHeight: "280px",
                      }}
                    >
                      <BookOpen size={28} style={{ color: "#c7bfb5" }} />
                      <p className="text-sm font-medium text-center" style={{ color: "#c7bfb5" }}>
                        บทความใหม่กำลังมาเร็วๆ นี้
                      </p>
                      <p className="text-xs text-center" style={{ color: "#e0ddd9" }}>
                        Stay tuned
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {/* CTA Banner */}
        <section className="py-16 px-6" style={{ backgroundColor: "#e8e7e5" }}>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c38789" }}>
              ปรึกษาฟรี
            </p>
            <h2 className="text-2xl font-light" style={{ color: "#69554a" }}>
              มีคำถามเพิ่มเติม?<br />
              <span style={{ color: "#c38789" }}>ปรึกษาหมอโบได้เลย</span>
            </h2>
            <p className="text-sm font-light" style={{ color: "#8b7f7c" }}>
              ไม่แน่ใจว่าต้องทำอะไร ปรึกษาก่อนได้เลย ไม่มีค่าใช้จ่าย
            </p>
            <a
              href="https://line.me/R/ti/p/@debeauclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cursor-pointer"
            >
              ปรึกษาผ่าน LINE <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingLine />
    </>
  );
}
