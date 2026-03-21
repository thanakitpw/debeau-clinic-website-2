import type { Metadata } from "next";
import { Syringe, Zap, Clock, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "ฟิลเลอร์ปรับรูปหน้า | DE BEAU CLINIC",
  description:
    "ฉีดฟิลเลอร์ (Filler) เพื่อผิวสวยใส เติมเต็มใต้ตา ขมับตอบ แก้มตอบ ร่องแก้ม คาง ริมฝีปาก กับหมอโบ เดอโบคลินิก",
};

export default function FillerPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Hyaluronic Acid Filler"
        title="ฟิลเลอร์"
        titleEn="Filler — Face Contouring"
        heroDesc="สารเติมเต็มคุณภาพสูง นำเข้าจากยุโรป เติมเต็มทุกบริเวณที่ขาด Volume บนใบหน้า ผลลัพธ์เป็นธรรมชาติ เห็นผลทันที"
        whatIs="ฟิลเลอร์ คือ สารเติมเต็มประเภทไฮยาลูโรนิกแอซิด (Hyaluronic Acid) ที่ผ่านการรับรองจาก อย. ใช้ฉีดเติมเต็มเพื่อแก้ไขปัญหาร่องลึกหรือบริเวณที่ขาด Volume บนใบหน้า มีลักษณะคล้ายเจล ความคงตัวสูง สลายเองได้ตามธรรมชาติ หมอโบใช้เฉพาะยี่ห้อ JUVEDERM และ RESTYLANE นำเข้าจากยุโรปแท้ แกะกล่องต่อหน้าคนไข้ทุกครั้ง"
        features={[
          { icon: <Syringe size={18} />, title: "HA Filler แท้ 100%", desc: "JUVEDERM & RESTYLANE นำเข้าจากยุโรป" },
          { icon: <Zap size={18} />, title: "เห็นผลทันที", desc: "เห็นผลลัพธ์หลังฉีดเสร็จทันที" },
          { icon: <Clock size={18} />, title: "อยู่นาน 1-2 ปี", desc: "ขึ้นอยู่กับบริเวณที่ฉีดและโครงสร้างหน้า" },
          { icon: <ShieldCheck size={18} />, title: "ปลอดภัย สลายได้", desc: "สลายได้ด้วยเอ็นไซม์ ไม่ต้องผ่าตัด" },
        ]}
        areas={[
          { title: "ฟิลเลอร์ใต้ตา", desc: "เติมเต็มร่องใต้ตาลึก ลดรอยคล้ำ ใบหน้าดูสดชื่น อ่อนเยาว์ขึ้น อยู่ได้ 1-2 ปี" },
          { title: "ฟิลเลอร์ขมับ", desc: "ขมับตอบทำให้หน้าหย่อนคล้อย การเติมเต็มช่วยให้กรอบหน้าละมุน อ่อนเยาว์ อยู่ได้ 2 ปี" },
          { title: "ฟิลเลอร์ร่องแก้ม", desc: "ลดร่องแก้มลึก หน้าดูเด็กลง ทำครั้งเดียวอยู่นาน 2 ปี" },
          { title: "ฟิลเลอร์แก้มตอบ", desc: "เติมเต็มแก้มให้ดูมีชีวิตชีวา กรอบหน้าสวยมีมิติ" },
          { title: "ฟิลเลอร์คาง", desc: "ปรับคางให้ได้สัดส่วน หน้าเรียวสวยแบบ V-Shape" },
          { title: "ฟิลเลอร์ริมฝีปาก", desc: "เติมเต็มริมฝีปากบาง ให้ดูอิ่มเต็ม เซ็กซี่ เป็นธรรมชาติ" },
        ]}
        suitableFor={[
          "ผู้ที่มีร่องใต้ตาลึก ตาคล้ำ ดูเหนื่อยล้า",
          "ผู้ที่มีขมับตอบ แก้มตอบ หน้าหย่อนคล้อย",
          "ผู้ที่ต้องการปรับรูปหน้าให้ได้สัดส่วน",
          "ผู้ที่ต้องการเพิ่ม Volume ริมฝีปากหรือคาง",
          "ผู้ที่อยากดูอ่อนเยาว์โดยไม่ต้องผ่าตัด",
        ]}
        relatedServices={[
          { label: "ลดริ้วรอย (Botox)", href: "/botox" },
          { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
          { label: "ฉีดสลายฟิลเลอร์", href: "/filler/dissolving" },
          { label: "Mesotherapy", href: "/mesotherapy" },
        ]}
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
