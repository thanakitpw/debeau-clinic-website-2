import type { Metadata } from "next";
import { Syringe, Sparkles, Clock, ShieldCheck, Heart, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

// Metadata ตรงตามเว็บเดิม debeauclinic.com/filler/fillers-lip/
export const metadata: Metadata = {
  title: "เติมเสน่ห์ให้ริมฝีปากด้วยการฉีดฟิลเลอร์ปาก | DE BEAU CLINIC",
  description:
    "ปากสวยอวบอิ่มและชุ่มชื้น เสกได้แบบไม่ต้องผ่าตัดด้วยฟิลเลอร์ปาก เห็นผลลัพธ์ปากสวยทันทีปลอดภัยไม่ต้องพักฟื้น โดยหมอโบ เดอโบคลินิก ประสบการณ์มากกว่า 16 ปี",
  keywords: [
    "ฟิลเลอร์ปาก",
    "lip filler",
    "ฉีดฟิลเลอร์ปาก",
    "ปากสวยอวบอิ่ม",
    "ริมฝีปากอวบ",
    "แก้ปากไม่เท่ากัน",
    "เดอโบคลินิก",
    "หมอโบ",
  ],
};

export default function FillerLipPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Lip Filler"
        title="ฟิลเลอร์ปาก"
        titleEn="Lip Filler — Beautiful Lips"
        // H1 ตรงตามเว็บเดิม
        heroDesc="ปากสวยอวบอิ่มแบบไม่ต้องผ่าตัดด้วยฟิลเลอร์ปาก เพิ่มความอวบอิ่มและชุ่มชื้นให้ริมฝีปาก แก้ไขปากไม่เท่ากัน ปากบาง และปากแห้ง เห็นผลลัพธ์ทันทีหลังฉีด ไม่ต้องผ่าตัด"
        // ตรงตาม section "ฟิลเลอร์ปากคืออะไร" จากเว็บเดิม
        whatIs="ฟิลเลอร์ปาก คือ การฉีดสาร Hyaluronic Acid เข้าไปบริเวณริมฝีปาก เพื่อเพิ่มปริมาตร ปรับโครงสร้าง และเพิ่มความชุ่มชื้นให้ริมฝีปาก สาร Hyaluronic Acid มีคุณสมบัติอุ้มน้ำ ทำให้ปากดูอิ่มเต็มเป็นธรรมชาติ สามารถสลายได้เองตามธรรมชาติ และสลายได้หากไม่พอใจผลลัพธ์ ผลลัพธ์อยู่ได้ประมาณ 6-18 เดือน ขึ้นอยู่กับปริมาณและยี่ห้อของฟิลเลอร์"
        parentBreadcrumb={{ label: "ฟิลเลอร์", href: "/filler" }}
        features={[
          {
            icon: <Heart size={18} />,
            title: "เพิ่มอวบอิ่ม",
            desc: "เพิ่มปริมาตรริมฝีปากให้ดูอิ่มเต็ม เซ็กซี่ เป็นธรรมชาติ",
          },
          {
            icon: <Droplets size={18} />,
            title: "เพิ่มความชุ่มชื้น",
            desc: "สาร HA อุ้มน้ำได้ดี ริมฝีปากดูชุ่มชื้น ไม่แห้งแตก",
          },
          {
            icon: <Sparkles size={18} />,
            title: "แก้ปากไม่เท่ากัน",
            desc: "ปรับริมฝีปากบนล่างให้สมดุล ได้สัดส่วนสวยงาม",
          },
          {
            icon: <Syringe size={18} />,
            title: "ปรับโครงสร้างปาก",
            desc: "ปรับรูปทรงปากให้ได้ตามที่ต้องการ ทั้ง Cupid's bow และขอบปาก",
          },
          {
            icon: <Clock size={18} />,
            title: "อยู่ได้ 6-18 เดือน",
            desc: "ผลลัพธ์อยู่ได้นาน ขึ้นอยู่กับปริมาณ CC และยี่ห้อฟิลเลอร์",
          },
          {
            icon: <ShieldCheck size={18} />,
            title: "สลายได้ถ้าไม่พอใจ",
            desc: "สามารถฉีดสลายฟิลเลอร์ออกได้หากไม่พอใจผลลัพธ์ ปลอดภัย",
          },
        ]}
        suitableFor={[
          "ผู้มีปากคว่ำหรือปากบาง ต้องการเพิ่มความอวบอิ่ม",
          "ผู้มีริมฝีปากบนล่างไม่เท่ากัน ต้องการปรับสมดุล",
          "ผู้ที่รูปปากไม่เป็นทรง ต้องการปรับโครงสร้าง",
          "ผู้ที่มีริมฝีปากแห้ง แตก ขาดความชุ่มชื้น",
          "ผู้ที่ต้องการสร้างบุคลิกภาพ เพิ่มความมั่นใจ",
          "ผู้ที่ต้องการปากสวยแบบไม่ต้องผ่าตัด เห็นผลทันที",
        ]}
        relatedServices={[
          { label: "ฟิลเลอร์ปรับรูปหน้า", href: "/filler" },
          { label: "ฟิลเลอร์ใต้ตา", href: "/filler/under-eye" },
          { label: "สลายฟิลเลอร์", href: "/filler/dissolving" },
          { label: "ลดริ้วรอย (Botox)", href: "/botox" },
        ]}
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
