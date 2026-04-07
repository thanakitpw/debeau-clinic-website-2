import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const envFile = readFileSync(resolve(ROOT, ".env.local"), "utf-8");
const FAL_KEY = envFile.match(/FAL_KEY=(.+)/)?.[1]?.trim();
if (!FAL_KEY) { console.error("FAL_KEY not found"); process.exit(1); }

const OUTPUT_DIR = resolve(ROOT, "public/images/blog");
import { mkdirSync } from "fs";
mkdirSync(OUTPUT_DIR, { recursive: true });

const images = [
  {
    name: "filler-under-eye",
    prompt: "Professional beauty photo of a Thai woman with beautiful clear under-eye area, before and after filler treatment concept, smooth radiant skin, close-up face portrait, soft warm studio lighting, cream and dusty rose tones, luxury aesthetic clinic photography, clean background",
  },
  {
    name: "botox-wrinkles",
    prompt: "Professional beauty photo of a Thai woman with smooth youthful forehead and eye area, wrinkle-free glowing skin, anti-aging treatment concept, soft warm studio lighting, close-up face portrait, cream and dusty rose tones, luxury aesthetic photography, clean background",
  },
  {
    name: "laser-clear-skin",
    prompt: "Professional beauty photo of a Thai woman with bright clear glowing skin, radiant complexion, laser facial treatment result concept, dewy skin texture, soft warm studio lighting, close-up face portrait, cream and dusty rose tones, luxury aesthetic photography, clean background",
  },
];

async function generateImage(item) {
  console.log(`\n🎨 กำลังสร้างรูป: ${item.name}...`);
  const response = await fetch("https://queue.fal.run/fal-ai/nano-banana", {
    method: "POST",
    headers: { Authorization: `Key ${FAL_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: item.prompt,
      negative_prompt: "ugly, blurry, low quality, distorted, deformed, cartoon, anime, illustration, text, watermark, logo, bad anatomy",
      image_size: "landscape_16_9",
      num_images: 1,
    }),
  });
  const data = await response.json();
  if (!response.ok) { console.error(`   ❌ Error: ${response.status}`); return null; }
  if (data.request_id) {
    console.log(`   ⏳ อยู่ใน queue...`);
    return await pollResult(data.request_id, item.name);
  }
  return await saveImage(data, item.name);
}

async function pollResult(requestId, name) {
  for (let i = 0; i < 60; i++) {
    await new Promise(r => setTimeout(r, 3000));
    const res = await fetch(`https://queue.fal.run/fal-ai/nano-banana/requests/${requestId}/status`, { headers: { Authorization: `Key ${FAL_KEY}` } });
    const status = await res.json();
    if (status.status === "COMPLETED") {
      const r = await fetch(`https://queue.fal.run/fal-ai/nano-banana/requests/${requestId}`, { headers: { Authorization: `Key ${FAL_KEY}` } });
      return await saveImage(await r.json(), name);
    }
    if (status.status === "FAILED") { console.error(`   ❌ Failed`); return null; }
    process.stdout.write(".");
  }
  return null;
}

async function saveImage(data, name) {
  const url = data?.images?.[0]?.url;
  if (!url) { console.error(`   ❌ ไม่พบ URL`); return null; }
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  const path = resolve(OUTPUT_DIR, `${name}.png`);
  writeFileSync(path, buf);
  console.log(`   ✅ บันทึกแล้ว: public/images/blog/${name}.png`);
  return path;
}

async function main() {
  console.log("=== Blog Image Generation ===\n");
  for (const img of images) {
    try { await generateImage(img); } catch (e) { console.error(`   ❌ ${e.message}`); }
  }
}
main();
