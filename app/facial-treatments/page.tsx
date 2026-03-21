import type { Metadata } from "next";
import { Gem, Droplets, Snowflake, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Facial Treatments บำรุงผิวหน้าลึกถึงชั้นผิว | DE BEAU CLINIC",
  description:
    "Facial treatments การบำรุงผิวหน้าให้กระจ่างใสขั้นสุดลึก Diamond Peel, Infusion, CryoBright ผิวสวย ชุ่มชื้น เห็นผลทันที",
};

export default function FacialTreatmentsPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Advanced Facial Care"
        title="Facial Treatments"
        titleEn="Facial Treatments — Deep Skin Renewal"
        heroDesc="การบำรุงผิวหน้าให้กระจ่างใสขั้นสุดลึกจนถึงชั้นผิว ผลัดเซลล์ผิวเก่า ฟื้นฟูเซลล์ผิวใหม่ คืนความอ่อนเยาว์ให้ผิว เห็นผลได้ตั้งแต่ครั้งแรก"
        whatIs="Facial Treatments คือการบำรุงผิวหน้าในระดับลึกที่ผสมผสานเทคโนโลยีหลากหลายเข้าด้วยกัน เพื่อช่วยให้ผิวหน้าดูสวย กระจ่างใส และชุ่มชื้นอย่างรวดเร็ว ที่ De Beau Clinic เรามีโปรแกรม Diamond Peel, Infusion (Meso No Needle) และ CryoBright เพื่อตอบโจทย์ทุกสภาพผิว"
        features={[
          { icon: <Gem size={18} />, title: "Diamond Peel", desc: "ผลัดเซลล์ผิวด้วยหัว Diamond ร่วมกับ Vacuum Suction" },
          { icon: <Droplets size={18} />, title: "Infusion (Meso No Needle)", desc: "นำส่งสารบำรุงเข้าผิวโดยไม่ใช้เข็ม" },
          { icon: <Snowflake size={18} />, title: "CryoBright", desc: "ลดการอักเสบ กระจ่างใส ด้วยความเย็นบำบัด" },
          { icon: <Sparkles size={18} />, title: "เห็นผลทันที", desc: "ผิวสดชื่น กระจ่างใสตั้งแต่ครั้งแรก" },
        ]}
        areas={[
          {
            title: "Diamond Peel",
            desc: "เทคโนโลยี Microdermabrasion ใช้หัว Diamond ร่วมกับ Vacuum ผลัดเซลล์ผิวชั้นหนังกำพร้าอย่างมีประสิทธิภาพ เห็นผลทันที แนะนำ 6-8 ครั้ง ห่างกัน 14 วัน",
          },
          {
            title: "Infusion (Meso No Needle)",
            desc: "นำส่งวิตามินและสารบำรุงเข้าสู่ผิวด้วยเทคโนโลยีพิเศษ ไม่ต้องใช้เข็ม เหมาะสำหรับผู้ที่ต้องการผิวชุ่มชื้น กระจ่างใส โดยไม่เจ็บ",
          },
          {
            title: "CryoBright",
            desc: "ใช้ความเย็นบำบัดเพื่อลดการอักเสบ ลดรอยแดง เพิ่มความกระจ่างใสให้ผิว เหมาะสำหรับผิวแพ้ง่ายหรือมีสิวอักเสบ",
          },
        ]}
        suitableFor={[
          "ผู้ที่เป็นสิวอุดตันบ่อยๆ หรือมีรูขุมขนกว้าง",
          "ผู้ที่มีสีผิวไม่สม่ำเสมอ ผิวคล้ำ หมองไม่มีชีวิตชีวา",
          "ผู้ที่มีรอยแผลเป็นจากสิว หรือผิวไม่เรียบเนียน",
          "ผู้ที่เริ่มมีริ้วรอยรอบตา มุมปาก หน้าผาก",
          "ผู้ที่ต้องการผิวชุ่มชื้น กระจ่างใส ก่อนงานสำคัญ",
          "ผู้ที่ต้องการ Skincare ระดับ Medical Grade",
        ]}
        sections={[
          {
            title: "หลังทำ Facial Treatment ดูแลอย่างไร?",
            content: "หลังทำ Diamond Peel จะเห็นผิวมีสีชมพูระเรื่อเล็กน้อย จางหายภายใน 2-3 ชั่วโมง ทาครีมบำรุงเพิ่มความชุ่มชื้น และทาครีมกันแดด SPF 30+ ทุกวัน หลีกเลี่ยงการสครับผิว 1 สัปดาห์",
          },
          {
            title: "ทำบ่อยแค่ไหนถึงเห็นผล?",
            content: "แนะนำทำ 6-8 ครั้ง ห่างกันทุก 14 วัน เพื่อผลลัพธ์ที่ดีที่สุด หลังจากนั้นปรับเป็นบำรุงรักษาทุก 4-6 สัปดาห์ หมอโบจะออกแบบโปรแกรมให้เหมาะกับสภาพผิวของแต่ละบุคคล",
          },
        ]}
        relatedServices={[
          { label: "Mesotherapy หน้าใส", href: "/mesotherapy" },
          { label: "Laser หน้าใส", href: "/laser" },
          { label: "ฟิลเลอร์ปรับรูปหน้า", href: "/filler" },
          { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
        ]}
        accentColor="#c7bfb5"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
