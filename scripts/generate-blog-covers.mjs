import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const envFile = readFileSync(resolve(ROOT, ".env.local"), "utf-8");
const FAL_KEY = envFile.match(/FAL_KEY=(.+)/)?.[1]?.trim();
if (!FAL_KEY) { console.error("FAL_KEY not found"); process.exit(1); }

const OUTPUT_DIR = resolve(ROOT, "public/images/blog");
mkdirSync(OUTPUT_DIR, { recursive: true });

// รูปปกบทความ — prompt ให้มีหัวข้อสั้นๆ ในรูป
const covers = [
  {
    name: "cover-filler-under-eye",
    prompt: 'Luxury beauty clinic promotional banner, elegant Thai aesthetic design, soft pink and cream colors, beautiful Thai woman with flawless under-eye area smiling, text overlay "Filler Under Eye" in elegant serif font, DE BEAU CLINIC logo style, professional medical beauty photography, clean minimal layout, dusty rose gold accents',
  },
  {
    name: "cover-botox-wrinkles",
    prompt: 'Luxury beauty clinic promotional banner, elegant Thai aesthetic design, soft pink and cream colors, beautiful Thai woman with smooth youthful forehead, text overlay "Botox Anti-Aging" in elegant serif font, DE BEAU CLINIC logo style, professional medical beauty photography, clean minimal layout, dusty rose gold accents',
  },
  {
    name: "cover-laser-clear-skin",
    prompt: 'Luxury beauty clinic promotional banner, elegant Thai aesthetic design, soft pink and cream colors, beautiful Thai woman with bright glowing clear skin, text overlay "Laser Clear Skin" in elegant serif font, DE BEAU CLINIC logo style, professional medical beauty photography, clean minimal layout, dusty rose gold accents',
  },
];

// รูปประกอบในบทความ
const articleImages = [
  // ฟิลเลอร์ใต้ตา
  {
    name: "article-filler-process",
    prompt: 'Professional photo of filler injection procedure near under-eye area, Thai female doctor in white coat performing treatment, close-up clinical photography, clean luxury clinic, warm lighting, cream and pink tones, medical beauty photography',
  },
  {
    name: "article-filler-result",
    prompt: 'Before and after concept photo, Thai woman beautiful clear under-eye area, bright refreshed eyes, no dark circles, smooth skin, soft warm studio lighting, beauty portrait photography, cream background',
  },
  // Botox
  {
    name: "article-botox-areas",
    prompt: 'Professional infographic style photo showing botox injection areas on face, forehead lines, frown lines, crow feet areas marked, Thai woman face, clean medical illustration style, luxury clinic aesthetic, pink and cream tones',
  },
  {
    name: "article-botox-result",
    prompt: 'Beautiful Thai woman with smooth wrinkle-free forehead and eye area, youthful glowing skin, natural expression, soft warm studio lighting, beauty portrait photography, cream background, luxury aesthetic',
  },
  // Laser
  {
    name: "article-laser-types",
    prompt: 'Professional photo of modern laser treatment equipment in luxury aesthetic clinic, Picosure and Helios machines, clean white medical room, warm ambient lighting, cream and rose gold interior, medical technology photography',
  },
  {
    name: "article-laser-result",
    prompt: 'Beautiful Thai woman with bright radiant clear skin after laser treatment, glowing dewy complexion, no dark spots or melasma, soft warm studio lighting, beauty portrait photography, cream background, luxury aesthetic feel',
  },
];

const allImages = [...covers, ...articleImages];

async function generateImage(item) {
  console.log(`\n🎨 กำลังสร้าง: ${item.name}...`);
  const response = await fetch("https://queue.fal.run/fal-ai/nano-banana", {
    method: "POST",
    headers: { Authorization: `Key ${FAL_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: item.prompt,
      negative_prompt: "ugly, blurry, low quality, distorted, deformed, cartoon, anime, illustration, bad anatomy, bad text, misspelled, garbled text",
      image_size: "landscape_16_9",
      num_images: 1,
    }),
  });
  const data = await response.json();
  if (!response.ok) { console.error(`   ❌ Error: ${response.status}`); return null; }
  if (data.request_id) {
    console.log(`   ⏳ Queue...`);
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
  console.log(`   ✅ ${name}.png`);
  return path;
}

async function main() {
  console.log(`=== Blog Covers & Article Images ===`);
  console.log(`จำนวนรูป: ${allImages.length}\n`);

  const results = [];
  for (const img of allImages) {
    try {
      const r = await generateImage(img);
      results.push({ name: img.name, ok: !!r });
    } catch (e) {
      console.error(`   ❌ ${e.message}`);
      results.push({ name: img.name, ok: false });
    }
  }

  console.log("\n\n=== สรุป ===");
  results.forEach(r => console.log(`${r.ok ? "✅" : "❌"} ${r.name}`));
  console.log(`\nสำเร็จ: ${results.filter(r => r.ok).length}/${results.length}`);
}

main();
