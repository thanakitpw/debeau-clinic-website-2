"use client";

import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { ScrollReveal } from "./MotionWrapper";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-28 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="section-label mb-4">Knowledge Hub</p>
              <h2 className="section-heading">บทความความงาม</h2>
              <div className="w-12 h-px bg-gradient-to-r from-[#c38789] to-transparent mt-5" />
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase font-medium text-[#c38789] hover:gap-3 transition-all duration-300 shrink-0 cursor-pointer"
            >
              ดูบทความทั้งหมด <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Posts Grid */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-[#f5f2ef] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer h-full"
              >
                {/* Gradient Cover Image */}
                <div
                  className="relative h-56 overflow-hidden flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-15"
                      style={{ backgroundColor: "#fff" }}
                    />
                    <div
                      className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10"
                      style={{ backgroundColor: "#fff" }}
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-[0.05]"
                      style={{ backgroundColor: "#fff" }}
                    />
                  </div>

                  {/* Center icon and text */}
                  <div className="relative z-10 text-center px-6">
                    <Sparkles
                      size={36}
                      className="mx-auto mb-3 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    />
                    <p
                      className="text-[11px] tracking-[0.25em] uppercase font-medium"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {post.titleEn}
                    </p>
                  </div>

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase font-medium px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#69554a] rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-7 flex-1">
                  <div className="flex items-center gap-3 text-[11px] text-[#c7bfb5]">
                    <Clock size={11} />
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-base font-light text-[#69554a] leading-snug group-hover:text-[#c38789] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[14px] font-light leading-relaxed text-[#8b7f7c] line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-[#c38789] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300 mt-2">
                    อ่านต่อ <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
