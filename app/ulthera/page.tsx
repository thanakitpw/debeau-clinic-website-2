import type { Metadata } from "next";
import { Zap, Clock, Activity, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

// Metadata จากเว็บเดิม debeauclinic.com/ulthera/
export const metadata: Metadata = {
  title: "ULTHERA ยกกระชับหน้าโดยไม่ต้องผ่าตัด | DE BEAU CLINIC",
  description:
    "หลายคนอาจจะเคยได้ยินคำว่า Ulthera ยกกระชับ แต่อาจจะยังไม่ทราบว่ามันคืออะไร? หรือสงสัยว่าเหมาะกับตัวเองหรือไม่ หมอโบ เดอโบคลินิก ให้คำตอบทั้งหมด",
};

export default function UltheraPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Micro Focused Ultrasound"
        title="ULTHERA ยกกระชับหน้า"
        titleEn="Ulthera — Non-Surgical Face Lifting"
        heroDesc="เทคนิคยกกระชับใบหน้าด้วยคลื่นอัลตร้าซาวด์ความถี่สูง (MFU-V) ไม่ต้องผ่าตัด ไม่ใช้เข็ม กลับบ้านได้ทันที เห็นผลยกกระชับอยู่นานถึง 1 ปี"
        whatIs="ULTHERA เป็นวิวัฒนาการต่อยอดของนวัตกรรม Ultrasound ซึ่งมีส่วนช่วยในการยกกระชับใบหน้า โดยใช้เทคนิค Micro Focused Ultrasound Visualization (MFU-V) ส่งคลื่นอัลตร้าซาวด์ความถี่สูงเป็นพลังงานความร้อนลงไปยังชั้น SMAS ที่ระดับความลึก 3 และ 4.5 มิลลิเมตร เพื่อกระตุ้นการสร้างคอลลาเจนใหม่ ทำให้ผิวหนังกระชับ ยกขึ้น และดูอ่อนเยาว์มากขึ้น โดยไม่ต้องผ่าตัดหรือใช้เข็ม"
        features={[
          {
            icon: <Zap size={18} />,
            title: "ไม่ต้องผ่าตัด ไม่ใช้เข็ม",
            desc: "ใช้คลื่นอัลตร้าซาวด์ส่งพลังงานลึกถึงชั้น SMAS โดยไม่มีแผล",
          },
          {
            icon: <Clock size={18} />,
            title: "กลับบ้านได้ทันที",
            desc: "หลังทำสามารถทำกิจวัตรประจำวันได้ตามปกติ ไม่ต้องพักฟื้น",
          },
          {
            icon: <Activity size={18} />,
            title: "เห็นผลใน 2-3 เดือน",
            desc: "ผลลัพธ์ที่ดีที่สุดจะปรากฏใน 2-3 เดือน และอยู่นานถึง 1 ปี",
          },
          {
            icon: <ShieldCheck size={18} />,
            title: "แม่นยำ ควบคุมได้",
            desc: "ระบบ Visualization ช่วยให้หมอเห็นชั้นผิวที่รักษาได้อย่างแม่นยำ",
          },
        ]}
        suitableFor={[
          "ผู้ที่มีผิวหย่อนคล้อย ต้องการยกกระชับใบหน้าโดยไม่ผ่าตัด",
          "ผู้ที่มีหางคิ้วตก ทำให้ดูแก่กว่าวัย",
          "ผู้ที่มีปัญหาลำคอเหี่ยว หนังคอหย่อนคล้อย",
          "ผู้ที่มีรูขุมขนกว้าง ต้องการให้ผิวกระชับขึ้น",
          "ผู้ที่ต้องการชะลอความชรา และรักษาความยืดหยุ่นของผิว",
        ]}
        sections={[
          {
            title: "การทำ Ulthera ใช้เวลานานแค่ไหน?",
            content:
              "การทำ Micro-Focused Ultrasound Lifting Treatment สำหรับใบหน้าและลำคอใช้เวลาประมาณ 60-90 นาที สำหรับบริเวณที่เล็กกว่า เช่น หน้าผากหรือรอบดวงตา จะใช้เวลาประมาณ 30 นาที ทั้งนี้ขึ้นอยู่กับขนาดพื้นที่และจำนวน Line ที่ยิง",
            image: "/images/scraped/ulthera/Ulthera-Template-No.01-1024x427.jpg",
            imageAlt: "Ulthera ยกกระชับหน้า เดอโบคลินิก",
          },
          {
            title: "หลังทำต้องหยุดลางานหรือไม่?",
            content:
              "หลังจากทำ Micro-Focused Ultrasound Lifting แล้ว คุณสามารถกลับไปทำกิจวัตรประจำวันได้ตามปกติทันที อาจมีรอยแดงหรืออาการบวมเล็กน้อยซึ่งจะหายไปเองภายใน 7 วัน ถือเป็นข้อดีสำคัญที่ทำให้ Ulthera เป็นที่นิยม",
            image: "/images/scraped/ulthera/Ulthera-Template-No.02-1024x427.jpg",
            imageAlt: "Ulthera ไม่ต้องพักฟื้น เดอโบคลินิก",
          },
        ]}
        relatedServices={[
          { label: "ฟิลเลอร์ปรับรูปหน้า", href: "/filler" },
          { label: "ลดริ้วรอย (Botox)", href: "/botox" },
          { label: "Laser หน้าใส", href: "/laser" },
          { label: "Mesotherapy", href: "/mesotherapy" },
        ]}
        heroImage="/images/scraped/ulthera/ulthera-debeau-clinic.jpg"
        heroImageAlt="ULTHERA ยกกระชับหน้าโดยไม่ต้องผ่าตัด เดอโบคลินิก"
        accentColor="#c38789"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
