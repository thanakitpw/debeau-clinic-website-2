import type { Metadata } from "next";
import { FlaskConical, Target, Layers, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

// Metadata จากเว็บเดิม debeauclinic.com/mesotherapy/
export const metadata: Metadata = {
  title: "เมโสเทอราปี (Mesotherapy) คืออะไร | DE BEAU CLINIC",
  description:
    "MesoTherapy คือ การฉีดวิตามินบำบัดเฉพาะจุด เพื่อผิวขาวใส แก้ปัญหาฝ้า กระ รักษาสิว สลายไขมัน โดยหมอโบ เดอโบคลินิก",
};

export default function MesotherapyPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Vitamin Cocktail Injection"
        title="เมโสเทอราปี"
        titleEn="Mesotherapy — Skin Brightening & Fat Dissolving"
        heroDesc="การฉีดวิตามินและสารบำรุงเฉพาะจุดเข้าสู่ผิวหนังชั้นในโดยตรง ด้วยเข็มขนาดเล็ก 27-30G เพื่อผิวขาวใส ลดฝ้า กระ สลายไขมัน ลดเหนียง เห็นผลเร็ว ปลอดภัย"
        whatIs="MesoTherapy คือ การฉีดวิตามินบำบัดเฉพาะจุด โดยใช้เข็มขนาดเล็กพิเศษ (27-30 Gauge) ฉีดสารอาหารที่จำเป็นต่อสุขภาพผิวเข้าสู่ผิวหนังชั้นในโดยตรง ไม่ว่าจะเป็นวิตามิน Coenzyme Q10 แร่ธาตุ และกรดอะมิโน เพื่อรักษาปัญหาผิวได้หลากหลายรูปแบบ ทั้งทำให้ผิวกระจ่างใส ลดรอยฝ้ากระ และสลายไขมันส่วนเกินเฉพาะจุด หมอโบจะเลือกส่วนผสมวิตามินที่เหมาะสมเฉพาะบุคคลเพื่อผลลัพธ์ที่ดีที่สุด"
        features={[
          {
            icon: <FlaskConical size={18} />,
            title: "วิตามินเฉพาะบุคคล",
            desc: "ผสมสูตรเฉพาะตามปัญหาและสภาพผิวของแต่ละคน",
          },
          {
            icon: <Target size={18} />,
            title: "เข้าถึงชั้นผิวโดยตรง",
            desc: "ออกฤทธิ์ได้รวดเร็วกว่าครีมทาหน้าทั่วไปมาก",
          },
          {
            icon: <Layers size={18} />,
            title: "หลากหลายจุดประสงค์",
            desc: "หน้าใส สลายไขมัน ลดเหนียง รักษาฝ้ากระ รักษาสิว",
          },
          {
            icon: <RefreshCw size={18} />,
            title: "ทำซ้ำสม่ำเสมอ",
            desc: "แนะนำทุก 1-2 สัปดาห์เพื่อผลที่ต่อเนื่องและยั่งยืน",
          },
        ]}
        areas={[
          {
            title: "MESO หน้าใส",
            desc: "ฉีดวิตามินบำรุงผิว ลดฝ้า กระ จุดด่างดำ กำจัดเม็ดสีเมลานิน ทำให้รอยฝ้ากระจางลง ผิวกระจ่างใส สม่ำเสมอ ทำการรักษาทุก 1-2 สัปดาห์",
          },
          {
            title: "MESO สลายไขมัน",
            desc: "ฉีดสารสลายไขมันเฉพาะจุด เช่น แก้ม ใต้คาง เหนียง แขน หน้าท้อง และต้นขา รูปร่างกระชับขึ้นอย่างเป็นธรรมชาติ เห็นผลชัดหลัง 3-5 ครั้ง",
          },
          {
            title: "MESO ลดเหนียง",
            desc: "เน้นบริเวณใต้คาง ลดเหนียงคางสองชั้น หน้าเรียวขึ้น กรอบหน้าชัดเจนขึ้น ทำซ้ำรายสัปดาห์เพื่อผลลัพธ์ที่ดีที่สุด",
          },
          {
            title: "MESO บำรุงผิว",
            desc: "ฉีดวิตามินผสม Coenzyme Q10 แร่ธาตุ และกรดอะมิโน เพิ่มความชุ่มชื้น ผิวฉ่ำวาว อ่อนเยาว์ สุขภาพผิวดีขึ้นอย่างเห็นได้ชัด",
          },
        ]}
        suitableFor={[
          "ผู้ที่มีปัญหาฝ้า กระ จุดด่างดำ ผิวคล้ำหมองไม่สม่ำเสมอ",
          "ผู้ที่ต้องการสลายไขมันส่วนเกินเฉพาะจุดโดยไม่ผ่าตัด",
          "ผู้ที่มีปัญหาเหนียง คางสองชั้น ต้องการหน้าเรียวขึ้น",
          "ผู้ที่ต้องการบำรุงผิวให้ชุ่มชื้น กระจ่างใส เปล่งปลั่ง",
          "ผู้ที่ต้องการทางเลือกที่ปลอดภัย ไม่ต้องผ่าตัด ไม่ต้องพักฟื้น",
        ]}
        sections={[
          {
            title: "ดูแลตัวเองหลังทำ Mesotherapy อย่างไร?",
            content:
              "หลีกเลี่ยงการสัมผัสบริเวณที่ฉีดโดยตรงเป็นเวลา 4 ชั่วโมงหลังทำ งดออกกำลังกายหนักและอาบน้ำร้อน 24 ชั่วโมง ทาครีมกันแดดทุกวันเพื่อป้องกันฝ้ากระและรักษาผลลัพธ์ที่ดี หลีกเลี่ยงการดื่มแอลกอฮอล์และอาหารรสจัดในช่วงแรกหลังทำ",
            image: "/images/scraped/mesotherapy/Meso-Template-No.02-1024x427.jpg",
            imageAlt: "ดูแลหลังทำ Mesotherapy เดอโบคลินิก",
          },
        ]}
        relatedServices={[
          { label: "Laser หน้าใส", href: "/laser" },
          { label: "Facial Treatment", href: "/facial-treatments" },
          { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
          { label: "ฟิลเลอร์ปรับรูปหน้า", href: "/filler" },
        ]}
        heroImage="/images/scraped/mesotherapy/Meso-Template-No.01-1024x427.jpg"
        heroImageAlt="เมโสเทอราปี Mesotherapy ฉีดวิตามินหน้าใส สลายไขมัน เดอโบคลินิก"
        accentColor="#8b7f7c"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
