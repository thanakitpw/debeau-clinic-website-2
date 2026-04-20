#!/bin/bash
# Rename review photos: 1.webp, 2.webp, ... → before/after/beauty-N.webp
# Also produces mapping.md so the user can trace which original file became which.
#
# Heuristic (best-guess, user will verify):
#   file 1 → before.webp       (first image, often clinical before)
#   file 2 → after.webp        (second image, often clinical after or early post-treatment)
#   file 3+ → beauty-N.webp    (remaining files, typically studio shots)
#
# Usage: bash scripts/rename-review-cases.sh

set -euo pipefail
cd "$(dirname "$0")/.."

SRC="before After and Beauty Shot"
DST="public/images/cases"
MAPPING="public/images/cases/_filename-mapping.md"

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

: > "$MAPPING"
{
  echo "# Review Cases — Filename Mapping"
  echo
  echo "**Convention**: \`file 1 → before\`, \`file 2 → after\`, \`file 3+ → beauty-N\` (best-guess heuristic)"
  echo
  echo "Use this to trace which original file became which new filename, and to correct any mislabels."
  echo
} >> "$MAPPING"

name_for_index() {
  local count=$1
  local i=$2
  if [[ $count -le 2 ]]; then
    case $i in
      1) echo "before" ;;
      2) echo "after" ;;
    esac
    return
  fi
  # 3+ files
  case $i in
    1) echo "before" ;;
    2) echo "after" ;;
    *) echo "beauty-$((i - 2))" ;;
  esac
}

for mapping in "${MAPPINGS[@]}"; do
  src_sub="${mapping%|*}"
  dst_sub="${mapping#*|}"
  src_dir="$SRC/$src_sub"
  dst_dir="$DST/$dst_sub"

  [[ ! -d "$dst_dir" ]] && continue

  # Collect original filenames in sort order (same as conversion script used)
  orig_files=()
  while IFS= read -r -d '' f; do
    orig_files+=("$(basename "$f")")
  done < <(find "$src_dir" -maxdepth 1 -type f ! -name '.DS_Store' -print0 | sort -z)

  count=${#orig_files[@]}
  [[ $count -eq 0 ]] && continue

  echo "→ $dst_sub ($count files)"
  {
    echo "## $dst_sub"
    echo
    echo "| New filename | Original filename |"
    echo "|---|---|"
  } >> "$MAPPING"

  for ((i=1; i<=count; i++)); do
    new_name=$(name_for_index $count $i)
    src_file="$dst_dir/$i.webp"
    dst_file="$dst_dir/${new_name}.webp"
    orig_name="${orig_files[$((i-1))]}"

    if [[ -f "$src_file" && "$src_file" != "$dst_file" ]]; then
      mv "$src_file" "$dst_file"
      echo "  $i.webp → ${new_name}.webp  (from $orig_name)"
    elif [[ -f "$dst_file" ]]; then
      echo "  already ${new_name}.webp"
    fi
    echo "| \`${new_name}.webp\` | $orig_name |" >> "$MAPPING"
  done
  echo >> "$MAPPING"
done

echo
echo "─────────────────────────────"
echo "Mapping written to: $MAPPING"
