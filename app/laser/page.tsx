import type { Metadata } from "next";
import { Star, Zap, Sun, Scissors } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Laser หน้าใส ลดฝ้า กระ รอยสิว | DE BEAU CLINIC",
  description:
    "รักษาด้วย Laser ครอบคลุมทุกปัญหาผิว ฝ้า กระ จุดด่างดำ รอยสิว รอยแผลเป็น กำจัดขน โดยแพทย์เฉพาะทางประสบการณ์กว่า 10 ปี",
};

export default function LaserPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Medical Grade Laser"
        title="Laser หน้าใส"
        titleEn="Laser — Skin Brightening"
        heroDesc="รักษาปัญหาผิวครบทุกรูปแบบด้วย Laser ระดับ Medical Grade ฝ้า กระ จุดด่างดำ รอยสิว รอยแผลเป็น กำจัดขน โดยแพทย์เฉพาะทางที่มีประสบการณ์กว่า 10 ปี"
        whatIs="การทำ Laser เป็นทางเลือกที่ได้รับความนิยมสำหรับผู้ที่มีปัญหาผิวหลากหลายรูปแบบ ที่ De Beau Clinic เราใช้เครื่อง Laser ระดับ Medical Grade หลายประเภทเพื่อตอบโจทย์ทุกปัญหาผิว ไม่ว่าจะเป็น Q-Switch ND YAG สำหรับฝ้ากระ Fraxel สำหรับรอยแผลเป็น หรือ Hair Removal สำหรับกำจัดขน ทุกการรักษาดูแลโดยหมอโบโดยตรง"
        features={[
          { icon: <Star size={18} />, title: "Q-Switch ND YAG", desc: "รักษาฝ้า กระ จุดด่างดำ ด้วย HELIOS Technology" },
          { icon: <Zap size={18} />, title: "Fraxel Laser", desc: "รักษารอยแผลเป็น หลุมสิว ผิวกระจ่างใส" },
          { icon: <Sun size={18} />, title: "LUMENIS ONE", desc: "รักษารอยแดง ฆ่าเชื้อสิว ผิวเรียบเนียน" },
          { icon: <Scissors size={18} />, title: "Hair Removal", desc: "กำจัดขนถาวร ทุกส่วนของร่างกาย" },
        ]}
        areas={[
          {
            title: "MELASMA PROGRAM โปรแกรมรักษาฝ้า",
            desc: "ออกแบบโปรแกรมเฉพาะบุคคล ผสมผสาน Q-Switch ND YAG และ Fraxel เพื่อรักษาฝ้าทั้งชั้นตื้นและลึก",
          },
          {
            title: "Q-Switch ND YAG / HELIOS",
            desc: "เทคโนโลยี FRACTIONAL DOE LENS ลดผลข้างเคียง รักษาเม็ดสีเมลานินในผิวชั้นลึก ผ่านมาตรฐาน US FDA",
          },
          {
            title: "FRAXEL Laser",
            desc: "รักษารอยแผลเป็น หลุมสิว รอยนูน ด้วยเทคโนโลยี Fractional แบ่งรักษาเป็นโซนย่อย ฟื้นฟูผิวได้ลึกและมีประสิทธิภาพ",
          },
          {
            title: "LUMENIS ONE IPL",
            desc: "รักษารอยแดง รอยอักเสบจากสิว ฆ่าเชื้อแบคทีเรียที่ก่อสิว ผิวเรียบเนียนขึ้นอย่างเห็นได้ชัด",
          },
          {
            title: "HAIR REMOVAL",
            desc: "กำจัดขนอย่างถาวรด้วย Laser ทุกส่วนของร่างกาย ปลอดภัย ไม่เจ็บ เหมาะกับทุกสีผิว",
          },
          {
            title: "โปรแกรมผิวกระจ่างใส",
            desc: "ผสมผสานหลายเทคโนโลยีเพื่อผิวใส สม่ำเสมอ ออกแบบเฉพาะตามสภาพผิวของแต่ละคน",
          },
        ]}
        suitableFor={[
          "ผู้ที่มีปัญหาฝ้า กระ จุดด่างดำ สีผิวไม่สม่ำเสมอ",
          "ผู้ที่มีรอยแผลเป็นจากสิว หลุมสิว รอยนูน",
          "ผู้ที่ต้องการกำจัดขนแบบถาวร",
          "ผู้ที่มีรอยแดงจากสิวหรือผิวอักเสบ",
          "ผู้ที่ต้องการผิวกระจ่างใสอย่างรวดเร็ว",
        ]}
        sections={[
          {
            title: "ดูแลผิวหลังทำ Laser",
            content: "หลังยิง Laser ผิวจะแห้งเล็กน้อย ควรทาครีมบำรุงเพิ่มความชุ่มชื้นและครีมกันแดด SPF 50+ ทุกวัน หลีกเลี่ยงแสงแดดจัด และงดสครับผิวอย่างน้อย 1 สัปดาห์",
          },
          {
            title: "ควรทำบ่อยแค่ไหน?",
            content: "แนะนำทำทุก 2-4 สัปดาห์สม่ำเสมอเพื่อผลการรักษาที่ดีที่สุด จำนวนครั้งขึ้นอยู่กับความเข้มและความลึกของปัญหาผิว หมอโบจะวางแผนการรักษาเฉพาะบุคคลให้ทุกเคส",
          },
        ]}
        relatedServices={[
          { label: "Mesotherapy หน้าใส", href: "/mesotherapy" },
          { label: "Facial Treatment", href: "/facial-treatments" },
          { label: "ลดริ้วรอย (Botox)", href: "/botox" },
          { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
        ]}
        accentColor="#c38789"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
