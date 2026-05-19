import { Play } from "lucide-react";
import { ScrollReveal } from "./MotionWrapper";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

const videos = [
  {
    id: "iRvCrvnZz44",
    title: "DE BEAU Clinic Presentation",
    subtitle: "พาชมคลินิกและบริการ",
  },
  {
    id: "Kk_yzGesB5s",
    title: "หมอโบ X Woody",
    subtitle: "สัมภาษณ์พิเศษ",
  },
  {
    id: "v9Y2MKYTdtM",
    title: "DE BEAU Clinic",
    subtitle: "วิดีโอแนะนำเพิ่มเติม",
  },
];

export default function Videos() {
  return (
    <section
      id="videos"
      className="py-24 lg:py-28 px-6"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label mb-3">Video</p>
            <h2 className="section-heading mb-5">คลิปแนะนำเดอโบคลินิก</h2>
            <div className="divider-rose mb-6" />
            <p className="max-w-xl mx-auto text-[17px] lg:text-[18px] leading-relaxed font-light text-[#4a3a2f]">
              ทำความรู้จักคลินิก และฟังเรื่องราวจากหมอโบโดยตรง
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((v) => (
            <StaggerItem key={v.id}>
              <div className="group">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16/9", backgroundColor: "#3a2e2b" }}
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <div
                    className="w-10 h-10 shrink-0 flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(195,135,137,0.15)",
                      color: "#c38789",
                    }}
                  >
                    <Play size={16} fill="#c38789" />
                  </div>
                  <div>
                    <h3
                      className="text-[18px] lg:text-[20px] font-semibold leading-snug"
                      style={{ color: "#3a2e2b" }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="mt-1 text-[14px] lg:text-[15px] font-light"
                      style={{ color: "#5d524f" }}
                    >
                      {v.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
