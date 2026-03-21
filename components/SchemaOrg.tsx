export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "DE BEAU CLINIC (เดอโบคลินิก)",
    alternateName: "เดอโบคลินิก",
    url: "https://debeauclinic.com",
    logo: "https://debeauclinic.com/logo.png",
    image: "https://debeauclinic.com/logo.png",
    description:
      "คลินิกความงามระดับพรีเมียม บริการ Filler, Botox, Ulthera, Laser, Mesotherapy และ Facial Treatments ดูแลโดย พญ.ปาริฉัตร ตัณชวนิชย์ (หมอโบ)",
    telephone: ["+66974266956", "+66974295645"],
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "249 อาคาร 24 house ชั้น 1 ซอย โยธินพัฒนา1 แขวงคลองจั่น เขตบางกะปิ",
      addressLocality: "Bangkok",
      postalCode: "10240",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.7847,
      longitude: 100.6413,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    medicalSpecialty: "Dermatology",
    availableService: [
      { "@type": "MedicalProcedure", name: "Filler (ฟิลเลอร์)" },
      { "@type": "MedicalProcedure", name: "Botox (โบท็อกซ์)" },
      { "@type": "MedicalProcedure", name: "Ulthera" },
      { "@type": "MedicalProcedure", name: "Laser (เลเซอร์)" },
      { "@type": "MedicalProcedure", name: "Mesotherapy" },
      { "@type": "MedicalProcedure", name: "Facial Treatments" },
    ],
    founder: {
      "@type": "Person",
      name: "พญ.ปาริฉัตร ตัณชวนิชย์",
      alternateName: "หมอโบ",
      jobTitle: "แพทย์ผู้เชี่ยวชาญด้านความงาม",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
