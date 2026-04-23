# รายงานความคืบหน้า — De Beau Clinic Website

**วันที่:** 23 เมษายน 2569 (2026-04-23)
**รอบ:** อัปเดตหลังรับข้อมูลเพิ่มเติมจากคลินิก

---

## สรุปภาพรวม

รอบนี้โฟกัส **2 งานหลัก** ตาม feedback ลูกค้า

1. อัปเดตหน้า `/collagen-biostimulator` ให้ข้อมูลครบและอ่านง่าย (Sculptra + HArmonyCa)
2. ขยายตัวหนังสือทั้งเว็บให้เหมาะกับลูกค้าสูงวัย

พร้อมด้วยงานย่อยอื่นๆ ที่ทำไปด้วย

---

## 1. หน้า `/collagen-biostimulator` — Redesign เต็มรูปแบบ

เดิมใช้ template ร่วมกับบริการอื่น (ServicePageLayout) ข้อมูลน้อย ไม่มีรูปรีวิว
**ออกแบบใหม่เป็น custom page** พร้อม section ที่จัดวางเฉพาะสำหรับ Sculptra + HArmonyCa

### โครงสร้างหน้าใหม่ (13 sections)

1. **Sculpt TDC Feature Banner** (ด้านบนสุด) — แบนเนอร์ 21:9 full-width
2. **Hero** (โทนน้ำตาลเข้ม) — หัวเรื่องใหญ่ + breadcrumb + CTA
3. **Quick Nav** — การ์ดเทียบ 2 ตัวยา (Sculptra vs HArmonyCa) พร้อมราคา
4. **Sculptra Deep-Dive**
   - Sculptra คืออะไร (พร้อม infographic)
   - **Sculpt TDC Technique** — 3 จุดยุทธศาสตร์ (ขมับ / หน้าหู / โหนกแก้ม) — เอกสิทธิ์เฉพาะที่เดอโบ
   - ทำไมคอลลาเจนสำคัญ — สถิติตามอายุ (25+: 1%/ปี, 40: 20%, 50: 33%)
   - Timeline 4 เฟส (2-3 วัน / 3-4 สัปดาห์ / 3 เดือน / 2-3 ปี)
   - **กฎ 5-5-5** — หัวใจการดูแลหลังฉีด Sculptra
   - โปรโมชั่น 29,000 บาท/ขวด
5. **HArmonyCa Deep-Dive**
   - Dual Effect X2 (HA ยกกระชับทันที + CaHA กระตุ้นคอลลาเจน)
   - 4 จุดเด่น (กระตุ้นคอลลาเจน, ธรรมชาติ, 90%+ พอใจ, ปลอดภัยระยะยาว)
   - **Pinch Test** — ทดสอบตัวเอง "ใช้นิ้วหนีบข้างแก้ม"
   - Timeline (Day 0 / 30 / 90 / 180)
   - การดูแลหลังทำ 24/48 ชั่วโมง
6. **ก่อน/หลังทำ Gallery** — รูปรีวิวจริง HArmonyCa 2 เคส
7. **ตารางเปรียบเทียบ** — Sculptra vs HArmonyCa vs Filler vs Thermage/Ulthera
8. **เหมาะสำหรับใคร** — 8 bullets
9. **ทำไมต้องหมอโบ** + **บริการที่เกี่ยวข้อง** + CTA ผ่าน LINE

### แหล่งข้อมูล

- **Sculptra** — Google Doc ที่คลินิกส่งมา (ดึงเนื้อหาครบ)
- **HArmonyCa** — 2 PDF Brochure ที่คลินิกส่งมา (Brochure หลัก + 2 Pages for Clinic Staff)
- **รูปรีวิว** — 2 รูป Before/After HArmonyCa จากคลินิก

---

## 2. รูป Infographic ใช้ AI สร้าง (nano-banana-pro)

ทำภาพประกอบที่**เข้าคู่สีเว็บ** แทนการใช้ brochure ของแบรนด์ยา (ที่โลโก้ไม่ตรงกับคลินิก)

### 2.1 Sculpt TDC Banner (21:9)

แบนเนอร์ด้านบนสุดของหน้า — ธีม luxury editorial

- **ซ้าย:** ข้อความ "Sculpt TDC Technique" + "Triple Direction Collagenesis Technique" + "เทคนิค ฝังคอลลาเจน 3 ทิศทาง" + "BY หมอโบ — DEBEAU CLINIC"
- **ขวา:** 2 portrait ผู้หญิงพร้อม overlay แสดง 3 zone (Temporal / Preauricular / Submalar) + directional arrows บอกทิศการยก
- โทนสี: dusty rose + warm brown ตรง CI

### 2.2 Sculptra Mechanism Infographic

ใช้อธิบายกลไกการทำงานของ Sculptra (PLLA)

- Skin cross-section 3 ชั้น (Epidermis / Dermis / Hypodermis)
- PLLA particles กระจายใน Dermis
- Fibroblast cells ถูกกระตุ้น
- คอลลาเจนใหม่เกิดขึ้น
- Labels ไทยครบ สะกดถูกทุกคำ

**ต้นทุนการสร้าง AI:** $0.30 รวม 2 รูป (ประมาณ 11 บาท)

---

## 3. ขยายตัวหนังสือ (Typography Upscale)

ตาม feedback ลูกค้า "ลูกค้าสูงวัยจะมองไม่เห็น" — ขยายตัวหนังสือทั้งเว็บ

### ระดับ Global (`globals.css`)
| Element | เดิม | ใหม่ |
|---|---|---|
| Body text | 16px / 17px | **17px / 18px** |
| Paragraph | 16px / 17px | **17px / 18px** |
| Section label | 12.8px weight 500 | **14.4px weight 600** |

### หน้าแรก — Section บริการ (`Services.tsx`)
| Element | เดิม | ใหม่ |
|---|---|---|
| English tag (FILLER/BOTOX ฯลฯ) | 10px | **12px + bold** |
| ชื่อบริการไทย (ฟิลเลอร์/โบท็อกซ์) | 20px light | **24-26px medium** |
| Description | 14px สีเทา | **16-17px สีเข้มกว่า** |
| "ดูเพิ่มเติม" | 12px | **13px + bold** |

### หน้าบริการแต่ละหน้า (`ServicePageLayout.tsx`) — ใช้ 8 บริการ
| Element | เดิม | ใหม่ |
|---|---|---|
| Hero badge pill | 12px | **14px + bold** |
| Hero description | 16-18px | **18-20px** |
| "{บริการ} คืออะไร?" | 24-30px | **28-36px** + เข้มขึ้น |
| Body text | 14px | **16-17px** |
| Feature card title | 14px medium | **16-17px semibold** |
| Feature card desc | 12px | **14-15px** |
| Area card title | 16px | **18-20px semibold** |
| Area card desc | 12px | **15-16px** |
| Suitable-for items | 14px | **16-17px** |
| Extra section title | 20px | **22-26px semibold** |
| Why Dr. Beau list | 14px | **16-17px** |

ผลลัพธ์: ทุกหน้าบริการ (9 หน้า) + หน้าแรกอ่านง่ายขึ้น โดยยังคง luxury aesthetic

---

## 4. Hero หน้าแรก — เปลี่ยนรูป

- ใช้รูปใหม่ที่คลินิกส่งมา (`hero-cover-v2.jpg`) แทนรูปเดิม
- รูปเดิมย้ายไปเป็นไฟล์ backup (ลบแล้วใน cleanup)

---

## 5. เชื่อม Google Drive MCP

- **ติดตั้ง FAL API Key** สำหรับสร้าง AI images (ใช้ได้ใน scripts ต่อไป)
- **เชื่อม Google Drive MCP** — อ่านไฟล์จาก Drive ของลูกค้าได้โดยตรง
- พบ **Master Task Document** ของลูกค้า — มี 13 tasks ที่ยังต้องทำต่อ (บันทึกไว้ใน `data-drive/master-tasklist.md`)

---

## 6. Backlog ที่เหลือ (จาก Master Task Doc ของลูกค้า)

ยังไม่ได้ทำในรอบนี้ — เรียงตามลำดับใน doc ของลูกค้า

1. **หน้าปกภาพหมอ** — เปลี่ยนเป็นชุดกราวด์ (รูปอยู่ใน folder)
2. **รูป Service section หน้าแรก** — ใช้ภาพหมอของแต่ละบริการ *(ลูกค้าจะทำเอง)*
3. ✅ **Sculptra + HArmonyCa** — **เสร็จแล้ว** รอบนี้
4. ✅ **ขยายตัวหนังสือ** — **เสร็จแล้ว** รอบนี้
5. **Homepage reviews** — ใช้ภาพก่อน/หลังที่สวยแล้ว เลือกเคสสวยๆ
6. **Homepage** — เพิ่มภาพหมอถ่ายกับอินฟลู
7. ✅ **Homepage videos** — **เสร็จแล้ว** (section 9 ด้านล่าง)
8. ✅ **Google Map** — **เสร็จแล้ว** (section 10 ด้านล่าง)
9. ✅ **หน้ารีวิว (ไม่ใส่ชื่อคนไข้)** — **เสร็จแล้ว** (section 11 ด้านล่าง)
10. ✅ **แบ่งช่วงอายุในรีวิว** — **เสร็จแล้ว** (section 14 ด้านล่าง)
11. ✅ **Floating contact buttons** — **เสร็จแล้ว** (section 13 ด้านล่าง)
12. **หน้าบริการแต่ละหน้า** — เพิ่มรูปรีวิว + กราฟิกอัพเดท
13. ✅ **Promotion** — ปรับภาพใหม่ **เสร็จแล้ว** (section 15 ด้านล่าง)

---

## 7. Git Commits รอบนี้

| Commit | Description |
|---|---|
| `02d37ee` | feat: redesign /collagen-biostimulator page with AI-generated infographics |
| `80b7d11` | chore: remove unused image assets |
| _(pending)_ | feat: typography upscale for elderly-friendly readability |
| _(pending)_ | feat: add Videos section (YouTube) + ClinicMap (home + about) |
| _(pending)_ | feat: show treatment type instead of customer name on reviews |
| _(pending)_ | feat: redesign floating contact buttons as horizontal pill bar |
| _(pending)_ | feat: split review cases into 3 age-group sections (30+/40+/50+) |
| _(pending)_ | chore: swap promotion images with new "star skin set" (เซ็ตผิวดารา) |

Repo: https://github.com/thanakitpw/debeau-clinic-website-2

---

## 8. ไฟล์ Reference ภายใน (สำหรับทีม)

- `data-drive/sculptra-content.md` — เนื้อหา Sculptra ครบจาก Google Doc
- `data-drive/harmonyca-content.md` — เนื้อหา HArmonyCa ครบจาก 2 PDFs
- `data-drive/master-tasklist.md` — รายการ task ทั้งหมดจากลูกค้า
- `scripts/generate-sculptra-infographic.mjs` — สคริปต์สร้าง Sculptra infographic (ใช้ซ้ำได้)
- `scripts/generate-sculpt-tdc-banner.mjs` — สคริปต์สร้าง Sculpt TDC banner (ใช้ซ้ำได้)

---

## ทดลองดู

- **Homepage (ตัวหนังสือใหม่):** http://localhost:3000/
- **หน้า Sculptra + HArmonyCa ใหม่:** http://localhost:3000/collagen-biostimulator
- **ตัวอย่างหน้าบริการอื่น (ตัวหนังสือใหม่):** http://localhost:3000/filler

---

## 9. Videos Section (หน้าแรก) — เพิ่มใหม่

**ไฟล์ใหม่:** `components/Videos.tsx`
**วางที่:** `app/page.tsx` (ต่อท้าย BlogPreview, ก่อน ClinicMap)

ฝัง YouTube 2 คลิปในรูปแบบ **grid 2 คอลัมน์ อัตราส่วน 16:9** ใช้ `youtube-nocookie.com`
เพื่อความเป็นส่วนตัวของผู้ใช้ พร้อม `loading="lazy"` โหลดเฉพาะตอนเลื่อนถึง

| Clip | YouTube ID | หัวข้อ |
|---|---|---|
| คลิป 1 | `iRvCrvnZz44` | DE BEAU Clinic Presentation — พาชมคลินิกและบริการ |
| คลิป 2 | `Kk_yzGesB5s` | หมอโบ X Woody — สัมภาษณ์พิเศษ |

- Section label: **"Video"** / หัวข้อ: "คลิปแนะนำเดอโบคลินิก"
- การ์ดใต้วิดีโอแสดงชื่อคลิป + คำอธิบายย่อ (พร้อมไอคอน Play สี CI)

---

## 10. Google Map — หน้าแรก + หน้า About

**ไฟล์ใหม่:** `components/ClinicMap.tsx` (client component)
**ใช้ที่:**
- `app/page.tsx` (ต่อท้าย Videos, ก่อน Contact)
- `app/about-dr-beau/page.tsx` (ก่อน Footer)

### Layout 2 คอลัมน์
- **ซ้าย:** รูปแผนที่คลินิก (`public/images/clinic-map.jpg`) — คลิกเพื่อซูมเป็น modal เต็มจอ (ESC เพื่อปิด)
- **ขวา:** การ์ดข้อมูลคลินิก + Google Maps iframe embed (ขนาดย่อ) + ปุ่ม "เปิดใน Google Maps"

### ข้อมูลคลินิก (ใช้ซ้ำทั้ง 2 หน้า)
| Field | Value |
|---|---|
| ชื่อ | De Beau Aesthetic & Wellness Center |
| ที่อยู่ | 144 โครงการ Charn ซอยโยธินพัฒนา 3 แยก 2 คลองจั่น บางกะปิ กรุงเทพฯ 10240 |
| เวลาทำการ | จันทร์–เสาร์ 10:00–19:00 น. |
| โทร | 097-426-6956 |
| Google Maps | https://maps.app.goo.gl/4x5Jcgwpt9a6gpXg8 |

- Icons: MapPin / Navigation / Clock / Phone (lucide-react)
- Section label: **"Location"** / หัวข้อ: "แผนที่คลินิก"

---

## 11. หน้ารีวิว — เปลี่ยนจากชื่อคนไข้เป็น "ประเภทการรักษา"

ตาม feedback ลูกค้า: **ไม่ใส่ชื่อคนไข้ ให้ใส่ว่าทำอะไรมาแทน** (เช่น "ฟิลเลอร์ใต้ตา")

### เปลี่ยน schema `lib/review-cases.ts`
เพิ่มฟิลด์ `treatment: string` ใน `ReviewCase` interface + คง `name` ไว้สำหรับ admin reference เท่านั้น

```ts
export interface ReviewCase {
  slug: string;
  name: string;         // internal only - NOT displayed publicly
  ageGroup: AgeGroup;
  treatment: string;    // shown under the photo
  before: string;
  after: string;
}
```

### แผนที่ treatment เบื้องต้น (ต้องยืนยันกับคลินิกอีกรอบ)

| กลุ่มอายุ | จำนวน | เคสที่ไม่ใช่ฟิลเลอร์ใต้ตา |
|---|---|---|
| 30-39 | 11 เคส | พิมพ์ (คาง), เกสต์ (ร่องแก้ม), น้ำหอม (โบท็อกซ์) |
| 40-49 | 8 เคส | อร, ยา, เพชร (ร่องแก้ม); ปอย (HArmonyCa); เบนซ์ (Sculptra) |
| 50-59 | 7 เคส | ปอน, เจี๊ยบ (Sculptra); ทราย (HArmonyCa); เล็ก, หน่อย, กุ้ง (ร่องแก้ม) |
| 60+ | 1 เคส | ยายหลุยส์ (Sculptra) |

> ⚠️ ค่า default ตั้งเบื้องต้น — ต้องให้คลินิกยืนยันรายเคส

### UI ที่เปลี่ยน
- `app/customer-reviews/page.tsx` + `components/ReviewsShowcase.tsx` — ป้ายใต้รูปใช้ `c.treatment` แทน `c.name`
- ขยาย type: 14px → **15-16px** + semibold + สีเข้มขึ้น (`#3a2e2b`)
- alt text ของรูป before/after ก็เปลี่ยนเป็น treatment

---

## 12. Git Commits ที่ยัง pending (รอ push)

ตรวจสอบจาก `git status`:

**Modified:**
- `app/globals.css` — body 16→17px, p 16→17px, section-label 12.8→14.4px (typography upscale)
- `app/page.tsx` — import + ใช้ Videos และ ClinicMap
- `app/about-dr-beau/page.tsx` — import + ใช้ ClinicMap
- `app/customer-reviews/page.tsx` — แสดง treatment แทน name
- `components/ReviewsShowcase.tsx` — แสดง treatment แทน name
- `components/ServicePageLayout.tsx` — ขยายตัวหนังสือทุก section (breadcrumb, badge, h1, features, areas, steps, suitable-for, extra sections, CTA)
- `components/Services.tsx` — ขยาย tag/title/description/"ดูเพิ่มเติม"
- `lib/review-cases.ts` — เพิ่มฟิลด์ `treatment` พร้อมค่า default 27 เคส

**Untracked (ไฟล์ใหม่):**
- `components/ClinicMap.tsx`
- `components/Videos.tsx`
- `public/images/clinic-map.jpg`
- `data-drive/progress-update.md` (ไฟล์นี้เอง)

รวมคร่าวๆ **3 commit ที่รอ**
1. `feat: typography upscale for elderly-friendly readability`
2. `feat: add Videos section and ClinicMap to homepage + about page`
3. `feat: show treatment type instead of customer name on review cases`

---

## 13. Floating Contact Buttons — Redesign ใหม่เป็น Pill Bar แนวนอน

**ไฟล์แก้ไข:** `components/FloatingLine.tsx` (เขียนใหม่ทั้งไฟล์)

ตาม feedback ลูกค้า: **ปุ่มติดต่อลอย ให้เด่นกดง่ายขึ้น** (mockup ที่ลูกค้าส่งมา)

### Design เดิม vs ใหม่

| หัวข้อ | เดิม | ใหม่ |
|---|---|---|
| Layout | vertical stack ขวาล่าง | horizontal pill bar **กลางล่างจอ** |
| พื้นหลัง | 3 ปุ่มแยก | outer dark navy pill `rgba(15,34,48,0.96)` |
| ไอคอน | โชว์ตลอดในสี่เหลี่ยม | วงกลมสีขาวจาง ภายในแต่ละ pill |
| Text | เปิด-ปิด on hover | โชว์ตลอด bold 13-14px |
| Hover | ขยาย pr + shadow | `scale-[1.04]` + active `scale-95` |

### 3 ปุ่มใน pill bar (ซ้าย→ขวา)
1. **Messenger** (น้ำเงิน `#0084FF`) — https://m.me/debeauclinic
2. **LINE OA** (เขียว `#06C755`) — https://line.me/R/ti/p/@debeauclinic
3. **Call Center** (โปร่งแสง + border ขาวจาง) — tel:097-426-6956

ใช้ `backdrop-blur-sm` + shadow นุ่ม + border ขาวจางรอบ outer ให้ลอยเด่นแต่ไม่ทึบจอ
เนื่องจาก FloatingLine ถูก import อยู่ 16 หน้า — เปลี่ยนครั้งเดียวทุกหน้าได้หมด

---

## 14. หน้ารีวิว — แบ่งเป็น 3 Section ตามช่วงอายุ

**ไฟล์แก้ไข:** `app/customer-reviews/page.tsx`

ตาม feedback ลูกค้า: **ให้ระบุช่วงไหนของอายุเท่าไหร่** (แบ่งเป็น 30+, 40+, 50+)

### เปลี่ยนแปลง
- เดิม: grid เดียวรวม 27 เคส + ปุ่ม "ดูเพิ่มเติม" (12 initial)
- ใหม่: **3 sections แยกตามอายุ** พร้อมหัวข้อ + เส้นคั่นบางด้านข้าง

### 3 Section Headings

| Section | Age Range | จำนวน | Heading |
|---|---|---|---|
| 1 | 30-39 | 11 เคส | "ผลลัพธ์รีวิวลูกค้าจริง ฟิลเลอร์ใต้ตา **อายุ 30+**" |
| 2 | 40-49 | 8 เคส | "ผลลัพธ์รีวิวลูกค้าจริง ฟิลเลอร์ใต้ตา **อายุ 40+**" |
| 3 | 50-59 + 60+ | 8 เคส | "ผลลัพธ์รีวิวลูกค้าจริง ฟิลเลอร์ใต้ตา **อายุ 50+**" |

- กลุ่ม **50+** ใช้การรวม 50-59 (7 เคส) + 60+ (1 เคส ยายหลุยส์) เพราะ "50+" ครอบคลุม 50 ขึ้นไป
- **ลบปุ่ม "ดูเพิ่มเติม"** ออก เพราะแต่ละกลุ่มเหลือ ≤11 เคส แสดงหมดได้เลย
- เปลี่ยนจาก `"use client"` → **server component** (ไม่มี useState แล้ว)

### หมายเหตุ
หัวข้อทุก section มีคำว่า "ฟิลเลอร์ใต้ตา" ตามที่ลูกค้าระบุ แม้ในกลุ่ม 40+/50+
จะมีเคส Sculptra / HArmonyCa ปนอยู่ด้วย (6 เคสจาก 27) — ถ้าอยากเปลี่ยนหัวข้อให้
crunch ขึ้น (เช่นเอาคำ "ฟิลเลอร์ใต้ตา" ออก) แก้ที่ `AGE_GROUPS` array ต้นไฟล์

---

## 15. Promotion — ปรับภาพชุดใหม่ "เซ็ตผิวดารา"

**ไฟล์เปลี่ยน:** 4 ภาพใน `public/images/promotions/`

ลูกค้าส่งชุดภาพโปรโมชั่นใหม่มาจาก Google Drive folder **"เซ็ตผิวดารา"**
(ID `1axkB-v6eLBPcHW8GKhLQtWx1R9Ky9MnT`) — 4 ภาพสำหรับ 4 package

### Mapping (Source → Target)

| Package | ราคา | ภาพใหม่จาก Drive | เขียนทับไฟล์ |
|---|---|---|---|
| A — Aurora Skin | 19,900฿ | Set ผิวดารา2-01 | `promotion_5.jpg` (1280×1280) |
| B — Glowe' Skin | 39,900฿ | Set ผิวดารา2-02 | `promotion_4.jpg` (1280×1280) |
| C — De Beau Signature | 59,900฿ | Set ผิวดารา2-03 | `promotion_2.jpg` (1280×1280) |
| D — De Beau Prestige | 99,900฿ | Set ผิวดารา2-04 | `promotion_3.jpg` (1024×1280) |

### การประมวลผล
- Resize ด้วย `sips -Z 1280 -s format jpeg -s formatOptions 88`
- ลดขนาดไฟล์จาก ~1.5-2MB → ~340KB
- **Backup ไฟล์เดิม** ไว้ที่ `public/images/promotions/_backup-pre-star/`
- ล้าง Next.js image cache (`.next/dev/cache/images/`) หลัง swap

### หมายเหตุ
ไม่ต้องแก้ code — path image ในหน้า `/promotion` คงเดิม รูปใหม่ใช้ pink gradient +
brown text ตรงกับ CI colors ของเว็บอยู่แล้ว (pink `#c38789`, brown `#69554a`)
