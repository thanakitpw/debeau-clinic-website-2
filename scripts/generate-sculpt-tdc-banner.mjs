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

const OUTPUT_FILE = resolve(ROOT, "public/images/collagen/sculpt-tdc-banner.jpg");

const PROMPT = `Create a luxury Thai beauty clinic educational banner in 21:9 wide landscape format explaining the "Sculpt TDC" technique. Style: premium editorial medical-aesthetic, clean and sophisticated.

BACKGROUND:
Smooth soft gradient from pale dusty rose #e8c4c5 at top-left to warm cream #f5f2ef at bottom-right. Luxury, airy, spa-like atmosphere.

LEFT 40% OF BANNER — Text Area:
Stack vertically with generous spacing:

1. Large title in two lines, dark warm brown #3a2e2b, extra-bold modern sans-serif:
   Line 1: "Sculpt TDC"
   Line 2: "Technique"
   (English, crisp bold typography)

2. Below title, thin horizontal divider line in dusty rose #c38789

3. Italic subtitle in warm brown #69554a, light weight:
   "Triple Direction Collagenesis Technique"

4. Large Thai tagline in bold, dark warm brown #3a2e2b:
   "เทคนิค ฝังคอลลาเจน 3 ทิศทาง"
   (Render each Thai glyph correctly: เ-ท-ค-น-ิ-ค  ฝ-ั-ง-ค-อ-ล-ล-า-เ-จ-น  3  ท-ิ-ศ-ท-า-ง)

5. Small tag at bottom in dusty rose #c38789, letter-spaced uppercase:
   "BY หมอโบ — DEBEAU CLINIC"

RIGHT 60% OF BANNER — Two Portraits:
Side-by-side, two elegant Asian Thai women in their late 30s, clean bare shoulders, natural makeup, glowing skin, neutral soft lighting, cream background behind them.

- LEFT PORTRAIT: 3/4 angle view, woman looking slightly left, showing cheek and jawline clearly. Overlay translucent dusty-rose shaded zones on face showing 3 injection areas:
  Zone 1 — TEMPORAL (side of forehead/temple) — small label "1" in clean circle badge
  Zone 2 — PREAURICULAR (in front of ear, along cheekbone) — small label "2"
  Zone 3 — SUBMALAR (below cheekbone) — small label "3"

- RIGHT PORTRAIT: Opposite 3/4 angle, same kind of model. Overlay elegant directional arrows in dusty rose #c38789 showing the lift & tighten vectors across the face — 3 subtle arrows pointing diagonally upward-outward, illustrating how the technique lifts the face.

Between the two portraits: small vertical divider or subtle spacing.

OVERLAY DETAILS:
- Zones rendered as soft translucent dusty-rose shapes (30% opacity), not opaque blocks
- Number badges: small cream circles with warm brown numbers "1" "2" "3"
- Arrows: thin elegant lines with subtle arrowheads, cohesive with the brand

STYLE RULES:
- Editorial luxury magazine aesthetic, NOT medical textbook
- Faces preserved realistic and beautiful, NOT distorted by overlays
- Clean, minimal, plenty of whitespace
- All text perfectly readable Thai + English
- NO other brand names, NO logos, NO product boxes
- 21:9 wide cinematic banner

Overall mood: a DE BEAU CLINIC exclusive-technique promo banner worthy of a high-end aesthetic clinic's hero section.`;

async function main() {
  console.log("→ Submitting to nano-banana-pro...");
  const submitRes = await fetch("https://queue.fal.run/fal-ai/nano-banana-pro", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: PROMPT,
      aspect_ratio: "21:9",
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
