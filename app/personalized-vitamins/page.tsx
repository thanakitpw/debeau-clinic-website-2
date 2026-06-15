import type { Metadata } from "next";
import { Pill, FlaskConical, HeartPulse, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Personalized Vitamins — วิตามินเฉพาะบุคคล วิเคราะห์โดยแพทย์ | DE BEAU CLINIC",
  description:
    "Personalized Vitamins ที่เดอโบคลินิก จัดสูตรวิตามินและอาหารเสริมเฉพาะบุคคล จากผลตรวจวิเคราะห์ร่างกาย โดยแพทย์ผู้เชี่ยวชาญ",
};

export default function PersonalizedVitaminsPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Personalized Vitamins"
        title="วิตามินเฉพาะบุคคล"
        titleEn="Personalized Vitamins — Crafted for Your Body"
        heroDesc="โปรแกรมวิตามินและอาหารเสริมที่ออกแบบเฉพาะคุณ จากผลตรวจวิเคราะห์ร่างกาย ระดับวิตามิน แร่ธาตุ และฮอร์โมน โดยแพทย์ผู้เชี่ยวชาญ เติมเต็มสารอาหารที่ขาด เพื่อสุขภาพและผิวพรรณที่ดีที่สุดในแบบของคุณ"
        whatIs="Personalized Vitamins คือการจัดสูตรวิตามินและอาหารเสริมแบบเฉพาะบุคคล (Personalized Nutrition) เริ่มจากการตรวจวิเคราะห์ร่างกายเพื่อหาว่าคุณขาดสารอาหารใด มีสารใดเกิน หรือมีภาวะบกพร่องในจุดไหน จากนั้นแพทย์จะออกแบบสูตรวิตามินที่ตอบโจทย์เฉพาะบุคคล แตกต่างจากการซื้อวิตามินทั่วไปที่อาจไม่ตรงกับความต้องการจริงของร่างกาย ทำให้ผลลัพธ์ชัดเจน ตรงจุด และคุ้มค่ากว่า"
        features={[
          {
            icon: <FlaskConical size={18} />,
            title: "Lab-Based Analysis",
            desc: "วิเคราะห์จากผลตรวจเลือดและร่างกายจริง ไม่เดา",
          },
          {
            icon: <Pill size={18} />,
            title: "Tailored Formula",
            desc: "สูตรวิตามินเฉพาะคุณ ตรงกับสิ่งที่ร่างกายต้องการจริง",
          },
          {
            icon: <HeartPulse size={18} />,
            title: "Doctor-Designed",
            desc: "ออกแบบและติดตามผลโดยแพทย์ ปลอดภัย ไม่ทับซ้อน",
          },
          {
            icon: <Sparkles size={18} />,
            title: "Inner Glow",
            desc: "เห็นผลทั้งสุขภาพ พลังงาน และผิวพรรณจากภายใน",
          },
        ]}
        areasTitle="ขอบเขตที่ครอบคลุม"
        areas={[
          {
            title: "Skin & Beauty Support",
            desc: "วิตามินสำหรับผิวกระจ่างใส ลดริ้วรอย เสริมคอลลาเจน เช่น Vitamin C, E, Biotin, Glutathione, Astaxanthin จัดสูตรตามสภาพผิวและเป้าหมายความงาม",
          },
          {
            title: "Energy & Anti-Fatigue",
            desc: "วิตามินกลุ่ม B-Complex, CoQ10, Magnesium, Iron สำหรับผู้ที่อ่อนล้า พลังงานต่ำ ทำงานหนัก หรือพักผ่อนน้อย",
          },
          {
            title: "Immune & Wellness",
            desc: "วิตามิน C, D, Zinc, Probiotics, Omega-3 เพื่อเสริมภูมิคุ้มกัน ลดการอักเสบ และดูแลสุขภาพระยะยาว",
          },
          {
            title: "Hormonal & Metabolic Balance",
            desc: "ปรับสมดุลฮอร์โมน เมตาบอลิซึม และระบบในร่างกายด้วยสูตรเฉพาะ เช่น Inositol, Chromium, Vitamin D3+K2 เหมาะกับผู้ที่มีภาวะฮอร์โมนผิดปกติ PCOS หรือเมตาบอลิซึมต่ำ",
          },
        ]}
        suitableFor={[
          "ผู้ที่ทานวิตามินทั่วไปแล้วไม่เห็นผล",
          "ผู้ที่อ่อนล้าเรื้อรัง พลังงานต่ำ ฟื้นตัวช้า",
          "ผู้ที่มีปัญหาผิวพรรณ ผมร่วง เล็บเปราะ",
          "ผู้ที่ต้องการดูแลสุขภาพแบบ Preventive ก่อนเกิดปัญหา",
          "ผู้ที่มีภาวะฮอร์โมนหรือเมตาบอลิซึมผิดปกติ",
          "ผู้ที่อยากให้สูตรวิตามินตรงกับร่างกายตัวเองจริงๆ",
        ]}
        sections={[
          {
            title: "ทำไมต้องวิตามินเฉพาะบุคคล",
            content:
              "แต่ละคนมีความต้องการสารอาหารต่างกัน ขึ้นอยู่กับพันธุกรรม ไลฟ์สไตล์ อาหารที่กิน ฮอร์โมน และสภาพร่างกายปัจจุบัน การกินวิตามินสำเร็จรูปจึงอาจไม่ตอบโจทย์ บางคนได้รับสารที่ไม่จำเป็นมากเกินไป ในขณะที่สิ่งที่ขาดจริงๆ ไม่ได้รับเลย Personalized Vitamins แก้ปัญหานี้ด้วยการตรวจวิเคราะห์ก่อนจัดสูตร ทำให้ทุกแคปซูลที่คุณกินมีความหมาย",
          },
          {
            title: "ขั้นตอนการดูแล",
            content:
              "เริ่มจากการปรึกษาแพทย์เพื่อประเมินสุขภาพและเป้าหมาย ตรวจเลือดและค่าทางห้องปฏิบัติการที่จำเป็น (เช่น Vitamin D, B12, Ferritin, Hormone Panel, Inflammation Markers) จากนั้นแพทย์จะออกแบบสูตรวิตามินเฉพาะคุณ พร้อมคำแนะนำการกินและการใช้ชีวิต ติดตามผลและปรับสูตรทุก 2-3 เดือนเพื่อให้เหมาะกับร่างกายในแต่ละช่วง",
          },
          {
            title: "ความปลอดภัย",
            content:
              "วิตามินและอาหารเสริมทุกชนิดผ่านการรับรองมาตรฐาน คุณภาพระดับเภสัชกรรม (Pharmaceutical Grade) ออกแบบและติดตามโดยแพทย์ทุกขั้นตอน ป้องกันการทับซ้อนของสารและผลข้างเคียงที่ไม่จำเป็น ปลอดภัยทั้งระยะสั้นและระยะยาว",
          },
        ]}
        relatedServices={[
          { label: "IV Drip Vitamin", href: "/iv-drip" },
          { label: "Cell Therapy", href: "/cell-therapy" },
          { label: "Weight Management", href: "/weight-management" },
          { label: "Skin Booster", href: "/skin-booster" },
        ]}
        heroImage="/images/service-edit-12.jpg"
        heroImageAlt="Personalized Vitamins วิตามินเฉพาะบุคคล เดอโบคลินิก"
        heroImageAspect="banner"
        accentColor="#c38789"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
