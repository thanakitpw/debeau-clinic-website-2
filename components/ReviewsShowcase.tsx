import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { ScrollReveal } from "./MotionWrapper";
import { reviewCases } from "@/lib/review-cases";

const FEATURED_SLUGS = ["nan", "maneewan", "grace"];

// Homepage-only override: show the beauty shot as the "after" image
// (the /customer-reviews page still uses the plain after.webp).
const HOMEPAGE_AFTER: Record<string, string> = {
  nan: "/images/cases/30-39/nan/beauty-1.webp",
  maneewan: "/images/cases/40-49/maneewan/beauty.webp",
  grace: "/images/cases/50-59/grace/beauty.webp",
};

export default function ReviewsShowcase() {
  const featured = FEATURED_SLUGS.map((slug) =>
    reviewCases.find((c) => c.slug === slug),
  ).filter((c): c is NonNullable<typeof c> => c !== undefined);

  return (
    <section className="py-28 px-6" style={{ backgroundColor: "#f5f2ef" }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Real Results</p>
            <h2 className="section-heading mb-5">ผลลัพธ์จริงจากลูกค้าจริง</h2>
            <div className="divider-rose mb-6" />
            <p className="max-w-lg mx-auto text-[15px] leading-relaxed font-light text-[#8b7f7c]">
              ก่อนและหลังจากการดูแลกับหมอโบ ลากซ้ายขวาเพื่อเปรียบเทียบผลลัพธ์
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((c) => (
            <div key={c.slug}>
              <BeforeAfterSlider
                before={c.before}
                after={HOMEPAGE_AFTER[c.slug] ?? c.after}
                altBefore={`Before — ${c.treatment}`}
                altAfter={`After — ${c.treatment}`}
              />
              <p
                className="text-[15px] lg:text-[16px] font-semibold text-center mt-4"
                style={{ color: "#3a2e2b" }}
              >
                {c.treatment}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/customer-reviews"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm tracking-wider font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg cursor-pointer"
            style={{ backgroundColor: "#c38789", color: "#fff" }}
          >
            ดูรีวิวทั้งหมด <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
