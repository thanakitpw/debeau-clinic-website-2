import type { Metadata } from "next";
import { Radio, Sparkles, CalendarCheck, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Ulthera ยกกระชับหน้าโดยไม่ผ่าตัด | DE BEAU CLINIC",
  description:
    "ULTHERA เทคนิคยกกระชับใบหน้าด้วยคลื่นเสียงความถี่สูง ไม่ต้องผ่าตัด ไม่ต้องพักฟื้น เห็นผลหลัง 3 เดือน อยู่นานถึง 1 ปี",
};

export default function UltheraPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Micro-Focused Ultrasound (MFU-V)"
        title="ยกกระชับหน้า"
        titleEn="Ulthera — Non-Surgical Lifting"
        heroDesc="เทคโนโลยีคลื่นเสียงความถี่สูง ยกกระชับใบหน้าโดยไม่ต้องผ่าตัด กระตุ้นการสร้างคอลลาเจน เห็นผลเต็มที่หลัง 3 เดือน อยู่นานถึง 1 ปี"
        whatIs="Ulthera เป็นวิวัฒนาการต่อยอดของนวัตกรรม Ultrasound ที่ช่วยยกกระชับใบหน้าโดยไม่ต้องผ่าตัด ใช้เทคโนโลยีคลื่นเสียงความถี่สูง (Micro Focused Ultrasound Visualization หรือ MFU-V) ส่งความร้อนลงสู่ชั้นพังผืด SMAS ที่ระดับความลึก 3 และ 4.5 มิลลิเมตร กระตุ้นการสร้างคอลลาเจนใหม่ ทำให้ผิวกระชับและยกขึ้น ผู้รับบริการสามารถทำและกลับบ้านได้เลยโดยไม่ต้องพักฟื้น"
        features={[
          { icon: <Radio size={18} />, title: "MFU-V Technology", desc: "คลื่นเสียงความถี่สูง แม่นยำถึงชั้น SMAS" },
          { icon: <Sparkles size={18} />, title: "ไม่ต้องผ่าตัด", desc: "ไม่มีแผล ไม่ต้องพักฟื้น กลับบ้านได้เลย" },
          { icon: <CalendarCheck size={18} />, title: "เห็นผลหลัง 2-3 เดือน", desc: "ผลเต็มที่เมื่อคอลลาเจนสร้างใหม่" },
          { icon: <Clock size={18} />, title: "อยู่นาน 1 ปี", desc: "ผลลัพธ์คงอยู่ยาวนานกว่าร้อยไหม" },
        ]}
        suitableFor={[
          "ผู้ที่ต้องการปรับรูปหน้าให้เรียวสวยขึ้น",
          "ผู้ที่มีผิวหน้าไม่กระชับ หย่อนคล้อยตามอายุ",
          "ผู้ที่หางคิ้วตก หรือต้องการยกกระชับรอบดวงตา",
          "ผู้ที่ต้องการลดเหนียง คางสองชั้น ลำคอเหี่ยวย่น",
          "ผู้ที่มีปัญหารูขุมขนกว้าง ต้องการผิวเนียนขึ้น",
          "ผู้ที่ไม่ต้องการผ่าตัด แต่ต้องการผลลัพธ์ชัดเจน",
        ]}
        sections={[
          {
            title: "ผลข้างเคียงที่อาจเกิดขึ้น",
            content: "ระหว่างทำอาจรู้สึกเจ็บบ้าง (มีให้ยาชาก่อน) หลังทำอาจมีอาการแดงเล็กน้อยที่หายไปภายในไม่กี่ชั่วโมง บางรายอาจมีอาการบวมหรือชาเล็กน้อยที่หายเองได้ภายใน 1-2 สัปดาห์",
          },
          {
            title: "ใช้เวลานานแค่ไหน?",
            content: "ขั้นตอนการรักษาใช้เวลาประมาณ 60-90 นาที ขึ้นอยู่กับบริเวณที่รักษา สามารถกลับไปทำกิจกรรมปกติได้ทันทีหลังทำ ไม่จำเป็นต้องลาหยุดงาน",
          },
          {
            title: "ดูแลหลังทำอย่างไร?",
            content: "หลีกเลี่ยงแสงแดดจัดและทาครีมกันแดด SPF 30+ ทุกวัน งดเครื่องดื่มแอลกอฮอล์และการออกกำลังกายหนัก 24 ชั่วโมง ทาครีมบำรุงเพื่อเพิ่มความชุ่มชื้นให้ผิวสม่ำเสมอ",
          },
        ]}
        relatedServices={[
          { label: "ฟิลเลอร์ปรับรูปหน้า", href: "/filler" },
          { label: "ลดริ้วรอย (Botox)", href: "/botox" },
          { label: "Mesotherapy", href: "/mesotherapy" },
          { label: "Facial Treatment", href: "/facial-treatments" },
        ]}
        accentColor="#69554a"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
