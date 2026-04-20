#!/bin/bash
# Convert customer review photos (HEIC/JPG) -> resized WebP
# Reads from "before After and Beauty Shot/" and outputs to public/images/cases/
#
# Usage: bash scripts/convert-review-cases.sh

set -euo pipefail
cd "$(dirname "$0")/.."

SRC="before After and Beauty Shot"
DST="public/images/cases"
MAX_SIZE=1600
QUALITY=82

# Slug mapping: "age-group/thai-name|age-group/english-slug"
MAPPINGS=(
  "30-39/นก พัชริน|30-39/nok-pachrin"
  "30-39/นุช|30-39/nuch"
  "30-39/แนน|30-39/nan"
  "30-39/นิต้า|30-39/nita"
  "30-39/พิมพ์|30-39/pim"
  "30-39/ระริน|30-39/rarin"
  "30-39/หนูดี|30-39/nudee"
  "30-39/เกสต์|30-39/guest"
  "30-39/คุณตาม|30-39/tam"
  "30-39/น้ำหอม|30-39/namhom"
  "30-39/คุณน้ำฝน|30-39/namfon"
  "40-49/อร ระพีพัฒ|40-49/orn-rapeepat"
  "40-49/ภา|40-49/pa"
  "40-49/ยา|40-49/ya"
  "40-49/จอย รัตนา|40-49/joy-ratana"
  "40-49/พลอย|40-49/ploy"
  "40-49/เพชร|40-49/petch"
  "40-49/มณีวรรณ|40-49/maneewan"
  "40-49/คุณเบนซ์|40-49/benz"
  "50-59/ปอน|50-59/pon"
  "50-59/เล็ก กมลธร|50-59/lek-kamonthorn"
  "50-59/ทราย|50-59/sai"
  "50-59/เกรซ|50-59/grace"
  "50-59/หน่อย|50-59/noi"
  "50-59/เจี๊ยบ สวรรยา|50-59/jeab-sawanya"
  "50-59/คุณกุ้ง|50-59/kung"
  "60+/ยายหลุยส์|60+/louis"
)

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

total=0
success=0
failed=0

for mapping in "${MAPPINGS[@]}"; do
  src_sub="${mapping%|*}"
  dst_sub="${mapping#*|}"
  src_dir="$SRC/$src_sub"
  dst_dir="$DST/$dst_sub"

  if [[ ! -d "$src_dir" ]]; then
    echo "⚠ missing: $src_dir"
    continue
  fi

  mkdir -p "$dst_dir"
  echo "→ $src_sub → $dst_sub"

  i=1
  while IFS= read -r -d '' f; do
    total=$((total + 1))
    base=$(basename "$f")
    ext="${base##*.}"
    ext_lower=$(echo "$ext" | /usr/bin/tr '[:upper:]' '[:lower:]')
    out="$dst_dir/$i.webp"

    if [[ "$ext_lower" == "heic" ]]; then
      tmp_jpg="$TMP/tmp_$i.jpg"
      if /usr/bin/sips -s format jpeg "$f" --out "$tmp_jpg" -Z $MAX_SIZE >/dev/null 2>&1 \
         && /Applications/XAMPP/bin/cwebp -q $QUALITY -quiet "$tmp_jpg" -o "$out" 2>/dev/null; then
        echo "  ✓ [$i] $base (HEIC)"
        success=$((success + 1))
      else
        echo "  ✗ [$i] $base"
        failed=$((failed + 1))
      fi
      rm -f "$tmp_jpg"
    elif [[ "$ext_lower" == "jpg" || "$ext_lower" == "jpeg" || "$ext_lower" == "png" ]]; then
      tmp_jpg="$TMP/tmp_$i.jpg"
      if /usr/bin/sips -Z $MAX_SIZE "$f" --out "$tmp_jpg" >/dev/null 2>&1 \
         && /Applications/XAMPP/bin/cwebp -q $QUALITY -quiet "$tmp_jpg" -o "$out" 2>/dev/null; then
        echo "  ✓ [$i] $base"
        success=$((success + 1))
      else
        echo "  ✗ [$i] $base"
        failed=$((failed + 1))
      fi
      rm -f "$tmp_jpg"
    else
      echo "  - skip [$i] $base ($ext_lower)"
      continue
    fi

    i=$((i + 1))
  done < <(find "$src_dir" -maxdepth 1 -type f ! -name '.DS_Store' -print0 | sort -z)
done

echo
echo "─────────────────────────────"
echo "Total: $total | Success: $success | Failed: $failed"
