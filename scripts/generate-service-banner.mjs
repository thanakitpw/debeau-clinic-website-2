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

const SOURCE_IMAGE = "/tmp/service_ref_1024.jpg";
const OUTPUT_FILE = resolve(ROOT, "public/images/service-filler-banner-v3.jpg");

async function uploadToFal(filePath) {
  const buf = readFileSync(filePath);
  const initRes = await fetch("https://rest.alpha.fal.ai/storage/upload/initiate", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      file_name: "service_ref.jpg",
      content_type: "image/jpeg",
    }),
  });
  if (!initRes.ok) {
    throw new Error(`upload initiate failed: ${initRes.status} ${await initRes.text()}`);
  }
  const { upload_url, file_url } = await initRes.json();
  const putRes = await fetch(upload_url, {
    method: "PUT",
    headers: { "Content-Type": "image/jpeg" },
    body: buf,
  });
  if (!putRes.ok) {
    throw new Error(`upload PUT failed: ${putRes.status}`);
  }
  return file_url;
}

const PROMPT = `Create a luxury Thai beauty-clinic promotional banner matching the DE BEAU brand palette — dusty rose and warm brown. Landscape, very wide 21:9 aspect.

BACKGROUND:
Smooth diagonal gradient using the brand colors ONLY:
- Top-left: dusty rose #c38789
- Middle: deeper mauve-brown #9a6a65
- Bottom-right: warm brown #69554a
Rich, luxurious, warm. Soft film-like. No purple, no magenta, no hot pink — strictly the rose-to-brown CI palette.

PEOPLE (right 45% of banner):
Place the two women from the attached reference photo (the aesthetician in white blazer standing, and the client with hair tied up in a soft pink blouse lying down receiving a gentle facial treatment). Preserve their faces, clothing, and the treatment gesture EXACTLY from the source photo — do not alter their features. Cleanly cut them from the original clinic room and composite onto the brand gradient with a soft warm glow behind. Do NOT crop the top of anyone's head.

TEXT (left 55% of banner):

1) Small pill-shaped badge near the top-left of the text area:
   - Rounded pill with solid dark warm brown fill #3a2e2b
   - Inside: small cream-white Thai text
   - Text reads exactly: โปรแกรม
   - Render glyphs: โ-ป-ร-แ-ก-ร-ม

2) Directly below the pill, a HUGE bold Thai title in cream-white #f5f2ef:
   - Text: ฟิลเลอร์
   - Render glyphs exactly: ฟ with ิ on top + ล + เ + ล + อ + ร with ์ on top
   - Extra bold modern Thai sans-serif (Kanit Bold / Prompt Bold / IBM Plex Sans Thai Bold style)
   - Very large, 25-30% of banner height
   - Crisp, perfectly legible Thai

3) Bottom-right corner: a cream circular button (~60px) containing a simple warm brown arrow pointing right (→).

STYLE:
Luxury, warm, editorial Thai beauty advertising. Warm film lighting. High contrast cream-white text on warm rose-brown gradient. NO product boxes, NO brand logos, NO other text. Only "โปรแกรม" inside the pill, "ฟิลเลอร์" as the big title, and the arrow button.`;

async function main() {
  console.log("→ Uploading source image to fal storage...");
  const imageUrl = await uploadToFal(SOURCE_IMAGE);
  console.log("  uploaded:", imageUrl);

  console.log("→ Submitting edit request to nano-banana-pro...");
  const submitRes = await fetch("https://queue.fal.run/fal-ai/nano-banana-pro/edit", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: PROMPT,
      image_urls: [imageUrl],
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
  const submitJson = await submitRes.json();
  const requestId = submitJson.request_id;
  console.log("  request_id:", requestId);

  console.log("→ Polling for completion...");
  let resultUrl = null;
  for (let i = 0; i < 120; i++) {
    await new Promise((r) => setTimeout(r, 3000));
    const statusRes = await fetch(
      `https://queue.fal.run/fal-ai/nano-banana-pro/requests/${requestId}/status`,
      { headers: { Authorization: `Key ${FAL_KEY}` } }
    );
    const status = await statusRes.json();
    process.stdout.write(`  [${i}] status=${status.status}\n`);
    if (status.status === "COMPLETED") {
      const resRes = await fetch(
        `https://queue.fal.run/fal-ai/nano-banana-pro/requests/${requestId}`,
        { headers: { Authorization: `Key ${FAL_KEY}` } }
      );
      const res = await resRes.json();
      console.log("  response:", JSON.stringify(res, null, 2).slice(0, 2000));
      resultUrl = res.images?.[0]?.url;
      break;
    }
    if (status.status === "FAILED") {
      console.error("generation FAILED:", JSON.stringify(status, null, 2));
      process.exit(1);
    }
  }

  if (!resultUrl) {
    console.error("timed out waiting for result");
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
