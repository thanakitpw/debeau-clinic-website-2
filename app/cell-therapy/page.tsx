import type { Metadata } from "next";
import { Dna, Sparkles, Shield, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cell Therapy — เซลล์บำบัด ฟื้นฟูร่างกาย ชะลอวัยระดับเซลล์ | DE BEAU CLINIC",
  description:
    "โปรแกรม Cell Therapy ที่เดอโบคลินิก ฟื้นฟูร่างกายและชะลอวัยระดับเซลล์ ดูแลโดยแพทย์ เสริมภูมิคุ้มกัน เพิ่มพลังงาน บำรุงผิวจากภายใน",
};

export default function CellTherapyPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        badge="Cell Therapy"
        title="เซลล์บำบัด"
        titleEn="Cell Therapy — Regeneration at the Cellular Level"
        heroDesc="โปรแกรมฟื้นฟูร่างกายและชะลอวัยระดับเซลล์ ด้วยศาสตร์เวชศาสตร์ฟื้นฟู (Regenerative Medicine) ที่มุ่งซ่อมแซมเซลล์ที่เสื่อมสภาพ กระตุ้นการสร้างเซลล์ใหม่ และเสริมสมดุลร่างกายจากภายในอย่างยั่งยืน"
        whatIs="Cell Therapy คือการนำสารสกัดจากเซลล์ เช่น Peptide, Growth Factor, Stem Cell Extract และ Exosome เข้าสู่ร่างกายเพื่อกระตุ้นการซ่อมแซมเซลล์ในระดับลึก ช่วยฟื้นฟูเซลล์ที่เสื่อมตามวัย เพิ่มประสิทธิภาพการทำงานของอวัยวะ เสริมระบบภูมิคุ้มกัน และส่งเสริมสุขภาพผิวพรรณจากภายในสู่ภายนอก เหมาะกับผู้ที่ต้องการดูแลสุขภาพแบบองค์รวมและชะลอวัยอย่างเป็นระบบ"
        features={[
          {
            icon: <Dna size={18} />,
            title: "Cellular Regeneration",
            desc: "ซ่อมแซมและสร้างเซลล์ใหม่ ฟื้นฟูเนื้อเยื่อในระดับลึก",
          },
          {
            icon: <Activity size={18} />,
            title: "Anti-Aging",
            desc: "ชะลอความเสื่อมตามวัย เพิ่มพลังงาน ผิวพรรณดูอ่อนเยาว์",
          },
          {
            icon: <Shield size={18} />,
            title: "Immune Support",
            desc: "เสริมระบบภูมิคุ้มกัน ลดการอักเสบเรื้อรัง",
          },
          {
            icon: <Sparkles size={18} />,
            title: "Holistic Wellness",
            desc: "ดูแลสุขภาพแบบองค์รวม ภายในแข็งแรง ภายนอกเปล่งประกาย",
          },
        ]}
        areasTitle="โปรแกรมที่เราให้บริการ"
        areas={[
          {
            title: "Peptide & Growth Factor Therapy",
            desc: "สารสกัดเปปไทด์และโกรทแฟกเตอร์ที่กระตุ้นการทำงานของเซลล์ ฟื้นฟูคอลลาเจน เพิ่มความยืดหยุ่นของผิว และส่งเสริมการซ่อมแซมเนื้อเยื่อ",
          },
          {
            title: "Stem Cell Extract",
            desc: "สารสกัดจากสเต็มเซลล์ที่ช่วยกระตุ้นการสร้างเซลล์ใหม่ ฟื้นฟูเซลล์ที่เสื่อมตามวัย เหมาะกับผู้ที่ต้องการชะลอวัยอย่างจริงจัง",
          },
          {
            title: "Exosome Therapy",
            desc: "เทคโนโลยีล่าสุดในศาสตร์ Regenerative Medicine ส่งสารสื่อสารระหว่างเซลล์ที่กระตุ้นการซ่อมแซมและฟื้นฟูในระดับเซลล์",
          },
          {
            title: "NAD+ Boost",
            desc: "เติม NAD+ โคเอนไซม์สำคัญที่ลดลงตามวัย ช่วยเพิ่มพลังงาน ฟื้นฟูไมโทคอนเดรีย และเสริมประสิทธิภาพการทำงานของเซลล์",
          },
        ]}
        suitableFor={[
          "ผู้ที่ต้องการชะลอวัยและฟื้นฟูร่างกายระดับเซลล์",
          "ผู้ที่อ่อนล้าเรื้อรัง พลังงานต่ำ ฟื้นตัวช้า",
          "ผู้สูงวัย (40+) ที่ต้องการดูแลสุขภาพแบบองค์รวม",
          "ผู้ที่ต้องการเสริมภูมิคุ้มกันและลดการอักเสบเรื้อรัง",
          "ผู้ที่ต้องการบำรุงผิวจากภายใน ลดริ้วรอย ผิวกระจ่างใส",
          "ผู้ที่พักฟื้นจากการเจ็บป่วยหรือผ่าตัด",
        ]}
        sections={[
          {
            title: "ทำไมต้อง Cell Therapy",
            content:
              "เมื่ออายุมากขึ้น เซลล์ในร่างกายเสื่อมประสิทธิภาพ การซ่อมแซมและสร้างเซลล์ใหม่ช้าลง ส่งผลต่อทั้งผิวพรรณ พลังงาน ภูมิคุ้มกัน และสุขภาพโดยรวม Cell Therapy ช่วยเข้าไปกระตุ้นและเสริมการทำงานของเซลล์ในระดับลึก ทำให้ร่างกายสามารถฟื้นฟูตัวเองได้ดีขึ้น ผลลัพธ์ครอบคลุมทั้งภายใน (พลังงาน ภูมิคุ้มกัน อวัยวะ) และภายนอก (ผิว ริ้วรอย ความกระชับ)",
          },
          {
            title: "ขั้นตอนและการดูแล",
            content:
              "เริ่มจากการประเมินสุขภาพและตรวจระดับเซลล์ในร่างกาย แพทย์จะออกแบบโปรแกรมเฉพาะบุคคลตามเป้าหมายและสภาพร่างกาย ใช้เวลาทำประมาณ 60-90 นาทีต่อครั้ง ไม่ต้องพักฟื้น ผลลัพธ์ค่อยๆ เห็นได้ชัดในช่วง 2-4 สัปดาห์ และคงผลได้ยาวนานเมื่อทำต่อเนื่องตามแผนของแพทย์",
          },
          {
            title: "ความปลอดภัย",
            content:
              "Cell Therapy ที่เดอโบคลินิกใช้สารและเทคโนโลยีที่ผ่านการรับรองมาตรฐานความปลอดภัย ทำภายใต้การดูแลของแพทย์ผู้เชี่ยวชาญทุกขั้นตอน ก่อนทำมีการประเมินสุขภาพ ประวัติโรค และภาวะร่างกายอย่างละเอียด เพื่อความปลอดภัยและผลลัพธ์ที่ดีที่สุดสำหรับแต่ละบุคคล",
          },
        ]}
        relatedServices={[
          { label: "IV Drip Vitamin", href: "/iv-drip" },
          { label: "Personalized Vitamins", href: "/personalized-vitamins" },
          { label: "Skin Booster", href: "/skin-booster" },
          { label: "Collagen Biostimulator", href: "/collagen-biostimulator" },
        ]}
        heroImage="/images/service-edit-10.jpg"
        heroImageAlt="Cell Therapy เซลล์บำบัด เดอโบคลินิก"
        heroImageAspect="banner"
        accentColor="#c38789"
      />
      <Footer />
      <FloatingLine />
    </>
  );
}
