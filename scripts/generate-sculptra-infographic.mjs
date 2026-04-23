import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const envFile = readFileSync(resolve(ROOT, ".env.local"), "utf-8");
const FAL_KEY = envFile.match(/FAL_KEY=(.+)/)?.[1]?.trim();
if (!FAL_KEY) {
  console.error("FAL_KEY not found in .env.local");
  process.exit(1);
}

const OUTPUT_FILE = resolve(ROOT, "public/images/collagen/sculptra-mechanism.jpg");

const PROMPT = `A clean luxury medical infographic illustration in editorial magazine style, 4:3 aspect ratio.

SUBJECT — Skin cross-section biology diagram showing how Sculptra (PLLA) stimulates collagen regeneration:
- Top: Skin surface with a delicate syringe needle gently injecting into the deeper dermis layer
- Middle: Magnified view of skin layers labeled: Epidermis (upper), Dermis (middle, highlighted), Hypodermis (lower)
- Show PLLA particles dispersed in the dermis as small round golden-bronze microspheres
- Show Fibroblast cells as elongated, star-shaped cells being activated around the PLLA particles
- Show new collagen fibers as fine interconnected lines weaving through the dermis
- Small side arrows and numbers indicating the process flow

STYLE:
- Very clean, minimal, editorial magazine style (think premium beauty brand)
- Soft gradient background: warm cream #f5f2ef at top transitioning to pale dusty rose #f0dcdc at bottom
- Line-art/semi-flat illustration style, NOT photorealistic
- Line colors: warm brown #69554a for outlines
- Accent color: dusty rose #c38789 for highlights
- PLLA particles: soft golden-bronze #d4a574
- Collagen fibers: cream with rose tint
- Plenty of negative space, breathable composition

TEXT LABELS (all Thai, small, clean sans-serif font):
- "Epidermis — ผิวชั้นบน" (top layer)
- "Dermis — ผิวชั้นกลาง" (middle layer, where the action happens)
- "Hypodermis — ผิวชั้นล่าง" (bottom layer)
- "PLLA" (with arrow pointing to a particle)
- "Fibroblast — เซลล์สร้างคอลลาเจน"
- "คอลลาเจนใหม่" (with arrow pointing to new collagen fibers)
- All Thai characters must be rendered correctly

COMPOSITION:
- Portrait-oriented infographic, tall format better
- Everything readable at a glance
- NO brand logos, NO product boxes, NO English "Galderma" text
- Just the clean educational diagram on the soft gradient background

FEEL: Like a premium medical textbook illustration or luxury clinic educational poster.`;

async function main() {
  console.log("→ Submitting to nano-banana-pro (text-to-image)...");
  const submitRes = await fetch("https://queue.fal.run/fal-ai/nano-banana-pro", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: PROMPT,
      aspect_ratio: "4:3",
      resolution: "2K",
      output_format: "jpeg",
      num_images: 1,
      safety_tolerance: 5,
    }),
  });

  if (!submitRes.ok) {
    console.error("submit failed:", submitRes.status, await submitRes.text());
    process.exit(1);
  }
  const { request_id } = await submitRes.json();
  console.log("  request_id:", request_id);

  console.log("→ Polling...");
  let resultUrl = null;
  for (let i = 0; i < 120; i++) {
    await new Promise((r) => setTimeout(r, 3000));
    const statusRes = await fetch(
      `https://queue.fal.run/fal-ai/nano-banana-pro/requests/${request_id}/status`,
      { headers: { Authorization: `Key ${FAL_KEY}` } }
    );
    const status = await statusRes.json();
    process.stdout.write(`  [${i}] ${status.status}\n`);
    if (status.status === "COMPLETED") {
      const resRes = await fetch(
        `https://queue.fal.run/fal-ai/nano-banana-pro/requests/${request_id}`,
        { headers: { Authorization: `Key ${FAL_KEY}` } }
      );
      const res = await resRes.json();
      resultUrl = res.images?.[0]?.url;
      break;
    }
    if (status.status === "FAILED") {
      console.error("FAILED");
      process.exit(1);
    }
  }

  if (!resultUrl) {
    console.error("timed out");
    process.exit(1);
  }

  console.log("→ Downloading:", resultUrl);
  const imgRes = await fetch(resultUrl);
  const imgBuf = Buffer.from(await imgRes.arrayBuffer());
  writeFileSync(OUTPUT_FILE, imgBuf);
  console.log(`✓ Saved → ${OUTPUT_FILE} (${(imgBuf.length / 1024).toFixed(0)}KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
