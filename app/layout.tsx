import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import SchemaOrg from "@/components/SchemaOrg";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://debeauclinic.com"),
  title: {
    default: "DE BEAU CLINIC | คลินิกความงามระดับพรีเมียม กรุงเทพ",
    template: "%s | DE BEAU CLINIC",
  },
  description:
    "DE BEAU CLINIC (เดอโบคลินิก) คลินิกความงามระดับพรีเมียม กรุงเทพ บริการ Filler โบท็อกซ์ Ulthera เลเซอร์ Mesotherapy ดูแลโดย พญ.ปาริฉัตร ตัณชวนิชย์ (หมอโบ) แพทย์ผู้เชี่ยวชาญ",
  keywords: [
    "DE BEAU CLINIC",
    "เดอโบคลินิก",
    "คลินิกความงาม",
    "คลินิกความงามกรุงเทพ",
    "ฟิลเลอร์",
    "โบท็อกซ์",
    "Botox",
    "Filler",
    "Ulthera",
    "เลเซอร์",
    "Mesotherapy",
    "ปรับรูปหน้า",
    "คลินิกพรีเมียม",
    "หมอโบ",
    "Facial Treatment",
  ],
  authors: [{ name: "DE BEAU CLINIC" }],
  creator: "DE BEAU CLINIC",
  publisher: "DE BEAU CLINIC",
  formatDetection: {
    telephone: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://debeauclinic.com",
    siteName: "DE BEAU CLINIC",
    title: "DE BEAU CLINIC | คลินิกความงามระดับพรีเมียม กรุงเทพ",
    description:
      "คลินิกความงามระดับพรีเมียม บริการ Filler โบท็อกซ์ Ulthera เลเซอร์ Mesotherapy ดูแลโดยแพทย์ผู้เชี่ยวชาญ หมอโบ",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DE BEAU CLINIC - คลินิกความงามระดับพรีเมียม",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DE BEAU CLINIC | คลินิกความงามระดับพรีเมียม กรุงเทพ",
    description:
      "คลินิกความงามระดับพรีเมียม บริการ Filler โบท็อกซ์ Ulthera เลเซอร์ Mesotherapy ดูแลโดยแพทย์ผู้เชี่ยวชาญ หมอโบ",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} antialiased overflow-x-hidden`}>
        <SchemaOrg />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
