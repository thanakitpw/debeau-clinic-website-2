import type { Metadata } from "next";
import { Eye, Sparkles, Clock, ShieldCheck, Sun, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

// Metadata ตรงตามเว็บเดิม debeauclinic.com/filler/under-eye-filler/
export const metadata: Metadata = {
  title: "คืนความอ่อนเยาว์ให้ใบหน้าด้วยฟิลเลอร์ใต้ตา | DE BEAU CLINIC",
  description:
    "ฉีดฟิลเลอร์ใต้ตา ลดริ้วรอย ลดอายุ ลดรอยหมองคล้ำใต้ตา แก้ถุงใต้ตา เบ้าตาลึก ด้วย Hyaluronic Acid แท้จากยุโรป เห็นผลทันที ไม่ต้องผ่าตัด โดยหมอโบ เดอโบคลินิก ประสบการณ์กว่า 16 ปี",
  keywords: [
    "ฟิลเลอร์ใต้ตา",
    "under eye filler",
    "ฉีดฟิลเลอร์ใต้ตา",
    "ลดรอยคล้ำใต้ตา",
    "แก้ถุงใต้ตา",
    "เบ้าตาลึก",
    "ร่องใต้ตา",
    "เดอโบคลินิก",
    "หมอโบ",
  ],
};

export default function FillerUnderEyePage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Under Eye Filler"
        title="ฟิลเลอร์ใต้ตา"
        titleEn="Under Eye Filler — Rejuvenation"
        // ตรงตาม H1 ของเว็บเดิม
        heroDesc="ฉีดฟิลเลอร์ใต้ตา ลดริ้วรอย ลดอายุ การฉีดฟิลเลอร์ใต้ตาถือเป็นทางเลือกยอดนิยมสำหรับการลดอายุและเพิ่มความสดใสอ่อนเยาว์ ช่วยลดเลือนริ้วรอย แก้ปัญหาถุงใต้ตาและใต้ตาคล้ำ ให้ผลลัพธ์ทันทีและไม่ต้องผ่าตัด"
        // คำอธิบาย ตรงตาม section "ฟิลเลอร์ใต้ตาคืออะไร อันตรายไหม" จากเว็บเดิม
        whatIs="ฟิลเลอร์ คือ สารเติมเต็ม Hyaluronic Acid ที่ใช้ฉีดเติมเต็มเพื่อแก้ไขปัญหาบริเวณต่างๆ บนใบหน้า เมื่อฉีดเข้าไปที่บริเวณร่องลึกใต้ตา จะช่วยเติมเต็มและลดเงาดำใต้ตาได้ ฟิลเลอร์ประเภทกรดไฮยาลูโรนิกถือเป็นสารที่ไม่ก่อให้เกิดอันตรายกับร่างกาย สามารถสลายหมดได้เองตามธรรมชาติโดยไม่ทิ้งสารตกค้าง โดยทั่วไปการฉีดฟิลเลอร์บริเวณใต้ตาจะใช้ฟิลเลอร์ประมาณ 2-4 CC ผลลัพธ์อยู่ได้นานประมาณ 6-24 เดือน ขึ้นอยู่กับรุ่นและยี่ห้อของฟิลเลอร์"
        parentBreadcrumb={{ label: "ฟิลเลอร์", href: "/filler" }}
        features={[
          {
            icon: <Eye size={18} />,
            title: "ลดรอยหมองคล้ำใต้ตา",
            desc: "เติมเต็มร่องใต้ตาลึก ทำให้รอยคล้ำจางลงอย่างเห็นได้ชัด ใบหน้าดูสดชื่น",
          },
          {
            icon: <Sparkles size={18} />,
            title: "แก้ถุงใต้ตา",
            desc: "ปรับพื้นผิวใต้ตาให้เรียบเนียน ลดอาการบวมนูน",
          },
          {
            icon: <Sun size={18} />,
            title: "แก้เบ้าตาลึก",
            desc: "เติมเต็มบริเวณเบ้าตาที่ลึกกว่าปกติ ใบหน้าดูสดชื่นขึ้นทันที",
          },
          {
            icon: <Clock size={18} />,
            title: "ลดริ้วรอยรอบดวงตา",
            desc: "ช่วยให้ผิวรอบดวงตาเรียบเนียน ดูอ่อนเยาว์ มีชีวิตชีวา",
          },
          {
            icon: <Heart size={18} />,
            title: "เพิ่มความสดใส",
            desc: "ดวงตาดูสดใส มีชีวิตชีวา ลดความเหนื่อยล้าบนใบหน้า",
          },
          {
            icon: <ShieldCheck size={18} />,
            title: "ชะลอริ้วรอย",
            desc: "ช่วยชะลอการเกิดริ้วรอยใหม่ ผลลัพธ์อยู่ได้นาน 6-24 เดือน",
          },
        ]}
        suitableFor={[
          "ผู้ที่มีใต้ตาดำ ใต้ตาเบ้า เบ้าตาลึก ดูหมองคล้ำ",
          "ผู้ที่มีถุงใต้ตา ใบหน้าดูแก่กว่าวัยหรือโทรม",
          "ผู้ที่ไม่ต้องการผ่าตัด แต่อยากแก้ปัญหาใต้ตา",
          "ผู้ที่ต้องการเห็นผลเร็ว กลับไปใช้ชีวิตปกติได้ทันที",
          "ผู้ที่ต้องการวิธีที่ปลอดภัย สลายได้เองตามธรรมชาติ",
        ]}
        relatedServices={[
          { label: "ฟิลเลอร์ปรับรูปหน้า", href: "/filler" },
          { label: "ฟิลเลอร์ปาก", href: "/filler/lip" },
          { label: "สลายฟิลเลอร์", href: "/filler/dissolving" },
          { label: "ลดริ้วรอย (Botox)", href: "/botox" },
          { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
        ]}
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
