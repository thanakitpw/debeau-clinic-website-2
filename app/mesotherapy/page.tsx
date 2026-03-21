import type { Metadata } from "next";
import { FlaskConical, Target, Layers, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Mesotherapy เมโสเธอราพี หน้าใส สลายไขมัน | DE BEAU CLINIC",
  description:
    "Mesotherapy การฉีดวิตามินบำบัดเฉพาะจุด หน้าใส ลดฝ้า กระ สลายไขมัน ลดเหนียง โดยหมอโบ เดอโบคลินิก",
};

export default function MesotherapyPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Vitamin Cocktail Injection"
        title="Mesotherapy"
        titleEn="Mesotherapy — Skin Brightening & Fat Dissolving"
        heroDesc="การฉีดวิตามินและสารบำรุงเข้าสู่ผิวหนังชั้นในโดยตรง เพื่อผิวขาวใส ลดฝ้า กระ สลายไขมัน ลดเหนียง เห็นผลเร็ว ปลอดภัย"
        whatIs="Mesotherapy คือ การฉีดวิตามินและสารบำบัดเฉพาะจุดเข้าสู่ผิวหนังชั้นใน เพื่อรักษาปัญหาผิวหลากหลายรูปแบบ ไม่ว่าจะเป็นการทำให้ผิวกระจ่างใส ลดรอยฝ้ากระ สลายไขมันส่วนเกิน หรือลดเหนียง หมอโบจะเลือกส่วนผสมวิตามินที่เหมาะสมเฉพาะบุคคล เพื่อผลลัพธ์ที่ดีที่สุด"
        features={[
          { icon: <FlaskConical size={18} />, title: "วิตามินเฉพาะบุคคล", desc: "ผสมสูตรเฉพาะตามปัญหาและสภาพผิวของแต่ละคน" },
          { icon: <Target size={18} />, title: "เข้าถึงชั้นผิวโดยตรง", desc: "ออกฤทธิ์ได้รวดเร็วกว่าครีมทาหน้าทั่วไป" },
          { icon: <Layers size={18} />, title: "หลากหลายจุดประสงค์", desc: "หน้าใส สลายไขมัน ลดเหนียง รักษาฝ้ากระ" },
          { icon: <RefreshCw size={18} />, title: "ทำซ้ำสม่ำเสมอ", desc: "แนะนำทุก 1-2 สัปดาห์เพื่อผลต่อเนื่อง" },
        ]}
        areas={[
          {
            title: "MESO หน้าใส",
            desc: "ฉีดวิตามินบำรุงผิว ลดฝ้า กระ จุดด่างดำ กำจัดเม็ดสีเมลานิน ผิวกระจ่างใส สม่ำเสมอ ทุก 1-2 สัปดาห์",
          },
          {
            title: "MESO สลายไขมัน",
            desc: "ฉีดสารสลายไขมันเฉพาะจุด เช่น ใต้คาง เหนียง แขน หน้าท้อง รูปร่างกระชับขึ้นอย่างเป็นธรรมชาติ",
          },
          {
            title: "MESO ลดเหนียง",
            desc: "เน้นบริเวณใต้คาง ลดเหนียงคางสองชั้น หน้าเรียวขึ้น กรอบหน้าชัดขึ้น",
          },
          {
            title: "MESO บำรุงผิว",
            desc: "ฉีดวิตามินผสม Hyaluronic Acid เพิ่มความชุ่มชื้น ผิวฉ่ำวาว อ่อนเยาว์",
          },
        ]}
        suitableFor={[
          "ผู้ที่มีปัญหาฝ้า กระ จุดด่างดำ ผิวคล้ำหมองไม่สม่ำเสมอ",
          "ผู้ที่ต้องการสลายไขมันส่วนเกินเฉพาะจุด",
          "ผู้ที่มีปัญหาเหนียง คางสองชั้น",
          "ผู้ที่ต้องการบำรุงผิวให้ชุ่มชื้น กระจ่างใส",
          "ผู้ที่ต้องการทางเลือกที่ปลอดภัย ไม่ต้องผ่าตัด",
        ]}
        sections={[
          {
            title: "ดูแลตัวเองหลังทำ Mesotherapy",
            content: "หลีกเลี่ยงการสัมผัสบริเวณที่ฉีดโดยตรง 4 ชั่วโมงหลังทำ งดออกกำลังกายหนักและอาบน้ำร้อน 24 ชั่วโมง ทาครีมกันแดดทุกวันเพื่อผลลัพธ์ที่ดีและยั่งยืน",
          },
          {
            title: "ต้องทำบ่อยแค่ไหน?",
            content: "แนะนำทำทุก 1-2 สัปดาห์ในช่วงแรก จำนวน 4-6 ครั้ง เพื่อผลลัพธ์ที่ชัดเจน จากนั้นปรับเป็นบำรุงรักษาทุก 1 เดือน หมอโบจะวางแผนโปรแกรมให้เหมาะกับแต่ละบุคคล",
          },
        ]}
        relatedServices={[
          { label: "Laser หน้าใส", href: "/laser" },
          { label: "Facial Treatment", href: "/facial-treatments" },
          { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
          { label: "ฟิลเลอร์ปรับรูปหน้า", href: "/filler" },
        ]}
        accentColor="#8b7f7c"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
