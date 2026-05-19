export type AgeGroup = "30-39" | "40-49" | "50-59" | "60+";

export interface ReviewCase {
  slug: string;
  /** Kept for internal reference / admin — NOT displayed publicly anymore */
  name: string;
  ageGroup: AgeGroup;
  /** Shown under the photo instead of the customer's name */
  treatment: string;
  before: string;
  after: string;
}

const makeCase = (
  slug: string,
  name: string,
  ageGroup: AgeGroup,
  treatment: string,
  swap = false,
): ReviewCase => ({
  slug,
  name,
  ageGroup,
  treatment,
  before: `/images/cases/${ageGroup}/${slug}/${swap ? "after" : "before"}.webp`,
  after: `/images/cases/${ageGroup}/${slug}/${swap ? "before" : "after"}.webp`,
});

// NOTE: treatments below are reasonable defaults — please update per case
// once the clinic confirms the actual procedure each customer had done.
export const reviewCases: ReviewCase[] = [
  // 30-39
  makeCase("nan", "คุณแนน", "30-39", "ฟิลเลอร์ใต้ตา"),
  makeCase("nuch", "คุณนุช", "30-39", "ฟิลเลอร์ใต้ตา"),
  makeCase("nok-pachrin", "คุณนก พัชริน", "30-39", "ฟิลเลอร์ใต้ตา"),
  makeCase("nita", "คุณนิต้า", "30-39", "ฟิลเลอร์ใต้ตา", true),
  makeCase("pim", "คุณพิมพ์", "30-39", "ฟิลเลอร์ใต้ตา"),
  makeCase("rarin", "คุณระริน", "30-39", "ฟิลเลอร์ใต้ตา"),
  makeCase("nudee", "คุณหนูดี", "30-39", "ฟิลเลอร์ใต้ตา"),
  makeCase("guest", "คุณเกสต์", "30-39", "ฟิลเลอร์ร่องแก้ม", true),
  makeCase("tam", "คุณตาม", "30-39", "ฟิลเลอร์ใต้ตา"),
  makeCase("namhom", "คุณน้ำหอม", "30-39", "ฟิลเลอร์ปรับรูปหน้า"),
  makeCase("namfon", "คุณน้ำฝน", "30-39", "ฟิลเลอร์ใต้ตา"),

  // 40-49
  makeCase("orn-rapeepat", "คุณอร ระพีพัฒ", "40-49", "ฟิลเลอร์ปรับรูปหน้า"),
  makeCase("pa", "คุณภา", "40-49", "ฟิลเลอร์ใต้ตา"),
  makeCase("ya", "คุณยา", "40-49", "ฟิลเลอร์ใต้ตา"),
  makeCase("joy-ratana", "คุณจอย รัตนา", "40-49", "ฟิลเลอร์ใต้ตา"),
  makeCase("ploy", "คุณพลอย", "40-49", "ฟิลเลอร์ปรับรูปหน้า"),
  makeCase("petch", "คุณเพชร", "40-49", "ฟิลเลอร์ใต้ตา และร่องแก้ม"),
  makeCase("maneewan", "คุณมณีวรรณ", "40-49", "ฟิลเลอร์ใต้ตา"),
  makeCase("benz", "คุณเบนซ์", "40-49", "ฟิลเลอร์ปรับรูปหน้า"),

  // 50-59
  makeCase("pon", "คุณปอน", "50-59", "Sculptra"),
  makeCase("lek-kamonthorn", "คุณเล็ก กมลธร", "50-59", "ฟิลเลอร์ปรับรูปหน้า"),
  makeCase("sai", "คุณทราย", "50-59", "ฟิลเลอร์ปรับรูปหน้า"),
  makeCase("grace", "คุณเกรซ", "50-59", "ฟิลเลอร์ใต้ตา"),
  makeCase("noi", "คุณหน่อย", "50-59", "ฟิลเลอร์ปรับรูปหน้า"),
  makeCase("jeab-sawanya", "คุณเจี๊ยบ สวรรยา", "50-59", "ฟิลเลอร์ปรับรูปหน้า"),
  makeCase("kung", "คุณกุ้ง", "50-59", "ฟิลเลอร์ปรับรูปหน้า"),

  // 60+
  makeCase("louis", "ยายหลุยส์", "60+", "ฟิลเลอร์ปรับรูปหน้า"),
];
