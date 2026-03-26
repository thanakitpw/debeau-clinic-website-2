import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// อ่าน FAL_KEY จาก .env.local
const envFile = readFileSync(resolve(ROOT, ".env.local"), "utf-8");
const FAL_KEY = envFile.match(/FAL_KEY=(.+)/)?.[1]?.trim();
if (!FAL_KEY) {
  console.error("FAL_KEY not found in .env.local");
  process.exit(1);
}

const OUTPUT_DIR = resolve(ROOT, "public/images");

// รายการรูปที่ต้อง generate
const images = [
  {
    name: "hero-banner",
    prompt:
      "Professional photo of a luxury aesthetic beauty clinic interior in Bangkok Thailand, warm ambient lighting, cream and dusty rose color palette, elegant modern furniture, soft curtains, treatment room visible in background, high-end medical spa atmosphere, no people, clean and minimal, editorial photography style",
    aspect: "landscape_16_9",
  },
  {
    name: "service-filler",
    prompt:
      "Professional photo of a Thai female dermatologist in white lab coat performing filler injection on a female patient's face in a luxury clinic, clean medical environment, warm lighting, professional and trustworthy atmosphere, close-up clinical photography, cream and rose tones",
    aspect: "square",
  },
  {
    name: "service-botox",
    prompt:
      "Professional photo of aesthetic botox treatment for wrinkle reduction, Thai female doctor injecting botox on patient forehead area, luxury clinic setting, clean white medical room, warm lighting, professional clinical photography, elegant atmosphere",
    aspect: "square",
  },
  {
    name: "service-laser-brightening",
    prompt:
      "Professional photo of a Thai woman receiving laser facial treatment for skin brightening in a luxury clinic, laser device touching her face, clean medical environment, protective eyewear, warm dusty rose ambient lighting, high-end aesthetic clinic atmosphere, clinical photography",
    aspect: "square",
  },
  {
    name: "service-laser-tightening",
    prompt:
      "Professional photo of Ulthera ultrasound skin tightening treatment on a Thai woman's face in luxury clinic, ultrasound device on jawline area, medical professional performing treatment, warm lighting, cream and rose color palette, high-end aesthetic clinic, clinical photography",
    aspect: "square",
  },
  {
    name: "service-mesotherapy",
    prompt:
      "Professional photo of mesotherapy treatment on a Thai woman's face, tiny injection for skin rejuvenation, luxury aesthetic clinic setting, clean medical environment, warm ambient lighting, professional clinical photography, cream and dusty rose tones",
    aspect: "square",
  },
  {
    name: "service-facial",
    prompt:
      "Professional photo of a Thai woman receiving luxury facial treatment, diamond peel or facial skincare, relaxing spa-like medical clinic, soft warm lighting, cream colored interior, clean and elegant atmosphere, beauty treatment photography",
    aspect: "square",
  },
  {
    name: "about-doctor",
    prompt:
      "Professional portrait photo of a confident Thai female dermatologist in her 40s wearing a white lab coat, warm smile, standing in a luxury clinic, awards and certificates visible in background, warm dusty rose and cream color palette, professional headshot photography, trustworthy and elegant",
    aspect: "portrait_4_3",
  },
  {
    name: "clinic-interior",
    prompt:
      "Professional photo of luxury aesthetic clinic reception and waiting area in Bangkok, modern elegant interior design, cream and dusty rose color scheme, comfortable seating, decorative plants, warm lighting, clean and inviting medical spa, no people, interior photography",
    aspect: "landscape_16_9",
  },
  {
    name: "treatment-room",
    prompt:
      "Professional photo of a luxury aesthetic clinic treatment room, medical bed with clean white sheets, modern laser equipment, warm ambient lighting, cream and dusty rose interior, professional medical environment, no people, clean and organized, interior photography",
    aspect: "landscape_16_9",
  },
  {
    name: "promo-filler",
    prompt:
      "Professional beauty promotional photo, Thai woman with perfect smooth skin touching her face, before and after concept for filler treatment, soft warm lighting, cream background, elegant and luxurious feel, beauty advertising photography",
    aspect: "square",
  },
  {
    name: "promo-botox",
    prompt:
      "Professional beauty promotional photo, Thai woman with youthful smooth forehead and eye area, wrinkle-free skin concept, soft warm lighting, dusty rose background, elegant luxury feel, beauty advertising photography",
    aspect: "square",
  },
  {
    name: "promo-laser",
    prompt:
      "Professional beauty promotional photo, Thai woman with bright glowing clear skin, radiant complexion, skin brightening concept, soft warm lighting, cream and rose background, luxury aesthetic feel, beauty advertising photography",
    aspect: "square",
  },
];

async function generateImage(item) {
  console.log(`\n🎨 กำลังสร้างรูป: ${item.name}...`);

  const response = await fetch("https://queue.fal.run/fal-ai/nano-banana", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: item.prompt,
      negative_prompt:
        "ugly, blurry, low quality, distorted, deformed, cartoon, anime, illustration, painting, drawing, text, watermark, logo, bad anatomy, bad hands",
      image_size: item.aspect || "square",
      num_images: 1,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error(`   ❌ Error: ${response.status} ${JSON.stringify(data).slice(0, 200)}`);
    return null;
  }

  // fal.ai ใช้ระบบ queue — ถ้าได้ request_id ต้อง poll รอผล
  if (data.request_id || data.status === "IN_QUEUE") {
    console.log(`   ⏳ อยู่ใน queue (${data.request_id}), รอผล...`);
    return await pollResult(data.request_id, item.name);
  }

  return await saveImage(data, item.name);
}

async function pollResult(requestId, name) {
  const maxAttempts = 60;
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise((r) => setTimeout(r, 3000));

    const statusRes = await fetch(
      `https://queue.fal.run/fal-ai/nano-banana/requests/${requestId}/status`,
      {
        headers: { Authorization: `Key ${FAL_KEY}` },
      }
    );
    const status = await statusRes.json();

    if (status.status === "COMPLETED") {
      const resultRes = await fetch(
        `https://queue.fal.run/fal-ai/nano-banana/requests/${requestId}`,
        {
          headers: { Authorization: `Key ${FAL_KEY}` },
        }
      );
      const data = await resultRes.json();
      return await saveImage(data, name);
    }

    if (status.status === "FAILED") {
      console.error(`   ❌ Failed: ${name}`);
      return null;
    }

    process.stdout.write(".");
  }
  console.error(`   ❌ Timeout: ${name}`);
  return null;
}

async function saveImage(data, name) {
  const imageUrl = data?.images?.[0]?.url;
  if (!imageUrl) {
    console.error(`   ❌ ไม่พบ URL รูป:`, JSON.stringify(data).slice(0, 200));
    return null;
  }

  const imgRes = await fetch(imageUrl);
  const buffer = Buffer.from(await imgRes.arrayBuffer());
  const filePath = resolve(OUTPUT_DIR, `${name}.png`);
  writeFileSync(filePath, buffer);
  console.log(`   ✅ บันทึกแล้ว: public/images/${name}.png`);
  return filePath;
}

// รัน generate ทีละรูป
async function main() {
  console.log("=== DE BEAU CLINIC — Image Generation ===");
  console.log(`จำนวนรูปที่จะสร้าง: ${images.length}\n`);

  const results = [];
  for (const img of images) {
    try {
      const result = await generateImage(img);
      results.push({ name: img.name, success: !!result });
    } catch (err) {
      console.error(`   ❌ Error generating ${img.name}:`, err.message);
      results.push({ name: img.name, success: false });
    }
  }

  console.log("\n\n=== สรุปผล ===");
  for (const r of results) {
    console.log(`${r.success ? "✅" : "❌"} ${r.name}`);
  }
  console.log(
    `\nสำเร็จ: ${results.filter((r) => r.success).length}/${results.length}`
  );
}

main();
