import type { Metadata } from "next";
import { Scale, Activity, Apple, HeartPulse } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Weight Management — ควบคุมน้ำหนักเฉพาะบุคคล โดยแพทย์ | DE BEAU CLINIC",
  description:
    "โปรแกรม Weight Management ที่เดอโบคลินิก ลดน้ำหนักและกระชับสัดส่วนเฉพาะบุคคล วางแผนโดยแพทย์ ปลอดภัย เห็นผลจริง ไม่โยโย่",
};

export default function WeightManagementPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Weight Management"
        title="ควบคุมน้ำหนักเฉพาะบุคคล"
        titleEn="Weight Management — Personalized & Doctor-Supervised"
        heroDesc="โปรแกรมควบคุมน้ำหนักและกระชับสัดส่วนที่ออกแบบเฉพาะบุคคล ดูแลโดยแพทย์ ผสานเวชศาสตร์ ฮอร์โมน โภชนาการ และเทคโนโลยีสลายไขมัน เพื่อผลลัพธ์ที่ยั่งยืน ไม่โยโย่"
        whatIs="Weight Management ที่เดอโบคลินิก ไม่ใช่แค่การลดน้ำหนัก แต่เป็นการดูแลร่างกายแบบองค์รวม วิเคราะห์ปัจจัยที่ทำให้น้ำหนักขึ้น เช่น ฮอร์โมน ระบบเผาผลาญ พฤติกรรมการกิน ความเครียด และการนอน จากนั้นวางแผนเฉพาะบุคคลร่วมกับแพทย์ ทั้งการใช้ยาช่วยลดน้ำหนัก (GLP-1 / Saxenda / Wegovy) การฉีดสลายไขมัน การเสริมวิตามินและฮอร์โมน รวมถึงการวางแผนโภชนาการและไลฟ์สไตล์"
        features={[
          {
            icon: <Scale size={18} />,
            title: "Personalized Plan",
            desc: "โปรแกรมเฉพาะบุคคล วิเคราะห์ฮอร์โมน เมตาบอลิซึม และไลฟ์สไตล์",
          },
          {
            icon: <HeartPulse size={18} />,
            title: "Doctor-Supervised",
            desc: "ดูแลโดยแพทย์ทุกขั้นตอน ปลอดภัย ไม่กระทบสุขภาพ",
          },
          {
            icon: <Activity size={18} />,
            title: "Sustainable Results",
            desc: "เน้นผลลัพธ์ที่ยั่งยืน ไม่โยโย่ ปรับพฤติกรรมระยะยาว",
          },
          {
            icon: <Apple size={18} />,
            title: "Lifestyle Coaching",
            desc: "วางแผนโภชนาการ การออกกำลังกาย และการจัดการความเครียด",
          },
        ]}
        areasTitle="โปรแกรมที่เราให้บริการ"
        areas={[
          {
            title: "GLP-1 Weight Loss Program",
            desc: "ใช้ยากลุ่ม GLP-1 (เช่น Saxenda, Wegovy) ที่ช่วยควบคุมความหิว ลดความอยากอาหาร ปรับการหลั่งอินซูลิน ภายใต้การดูแลของแพทย์ เหมาะกับผู้ที่ลดน้ำหนักด้วยวิธีปกติไม่สำเร็จ",
          },
          {
            title: "Fat Dissolving Injection",
            desc: "ฉีดสลายไขมันเฉพาะจุด เช่น เหนียง ต้นแขน หน้าท้อง ต้นขา ด้วยยาที่ผ่าน อย. ช่วยกระชับสัดส่วนในจุดที่ออกกำลังกายลดยาก",
          },
          {
            title: "Hormone & Metabolic Optimization",
            desc: "ตรวจและปรับสมดุลฮอร์โมนที่เกี่ยวข้องกับน้ำหนัก เช่น ไทรอยด์ อินซูลิน คอร์ติซอล เทสโทสเตอโรน เพื่อให้ระบบเผาผลาญทำงานได้เต็มประสิทธิภาพ",
          },
          {
            title: "Nutrition & Lifestyle Coaching",
            desc: "วางแผนโภชนาการเฉพาะบุคคล แนะนำการออกกำลังกาย การนอน และการจัดการความเครียด เพื่อรักษาน้ำหนักได้อย่างยั่งยืน",
          },
        ]}
        suitableFor={[
          "ผู้ที่ลดน้ำหนักด้วยวิธีปกติแล้วไม่สำเร็จ",
          "ผู้ที่มีน้ำหนักเกินมาตรฐาน BMI > 25",
          "ผู้ที่มีไขมันเฉพาะจุดที่ออกกำลังกายลดยาก",
          "ผู้ที่มีปัญหาฮอร์โมนหรือเมตาบอลิซึมผิดปกติ",
          "ผู้ที่ต้องการลดน้ำหนักแบบปลอดภัย ดูแลโดยแพทย์",
          "ผู้ที่เคยลดน้ำหนักสำเร็จแต่กลับมาอ้วน (โยโย่)",
        ]}
        sections={[
          {
            title: "ทำไมต้องโปรแกรมเฉพาะบุคคล",
            content:
              "แต่ละคนมีสาเหตุของน้ำหนักขึ้นต่างกัน บางคนมาจากฮอร์โมน บางคนมาจากเมตาบอลิซึมต่ำ บางคนมาจากพฤติกรรมการกิน หรือความเครียดสะสม การลดน้ำหนักด้วยสูตรเดียวกันจึงไม่ได้ผลกับทุกคน Weight Management ที่เดอโบคลินิกเริ่มจากการวิเคราะห์ร่างกายและไลฟ์สไตล์อย่างละเอียด แล้วออกแบบโปรแกรมที่ตอบโจทย์ปัญหาที่แท้จริง ทำให้ผลลัพธ์เห็นชัดและคงอยู่ได้นาน",
          },
          {
            title: "ขั้นตอนการดูแล",
            content:
              "ครั้งแรกแพทย์จะประเมินสุขภาพ ตรวจฮอร์โมนและค่าเลือดที่จำเป็น คำนวณ BMI, Body Fat %, Visceral Fat แล้ววางแผนเฉพาะบุคคลร่วมกับคนไข้ ระหว่างโปรแกรมจะมีการติดตามผลทุก 2-4 สัปดาห์ ปรับสูตรและแผนตามผลลัพธ์ พร้อมคำแนะนำการกิน การออกกำลังกาย และการพักผ่อนที่เหมาะสม",
          },
          {
            title: "ความปลอดภัย",
            content:
              "ทุกยาและเทคโนโลยีที่ใช้ผ่านการรับรองจาก อย. และทำภายใต้การดูแลของแพทย์ผู้เชี่ยวชาญ ไม่ใช้ยาลดน้ำหนักที่กดประสาทหรือก่อให้เกิดผลข้างเคียงรุนแรง เน้นความปลอดภัยและสุขภาพระยะยาวเป็นสำคัญ",
          },
        ]}
        relatedServices={[
          { label: "Cell Therapy", href: "/cell-therapy" },
          { label: "Personalized Vitamins", href: "/personalized-vitamins" },
          { label: "IV Drip Vitamin", href: "/iv-drip" },
          { label: "Mesotherapy", href: "/mesotherapy" },
        ]}
        heroImage="/images/service-edit-11.jpg"
        heroImageAlt="Weight Management ควบคุมน้ำหนัก เดอโบคลินิก"
        heroImageAspect="banner"
        accentColor="#c38789"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
