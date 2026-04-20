export type AgeGroup = "30-39" | "40-49" | "50-59" | "60+";

export interface ReviewCase {
  slug: string;
  name: string;
  ageGroup: AgeGroup;
  before: string;
  after: string;
}

const makeCase = (slug: string, name: string, ageGroup: AgeGroup): ReviewCase => ({
  slug,
  name,
  ageGroup,
  before: `/images/cases/${ageGroup}/${slug}/before.webp`,
  after: `/images/cases/${ageGroup}/${slug}/after.webp`,
});

export const reviewCases: ReviewCase[] = [
  // 30-39
  makeCase("nan", "คุณแนน", "30-39"),
  makeCase("nuch", "คุณนุช", "30-39"),
  makeCase("nok-pachrin", "คุณนก พัชริน", "30-39"),
  makeCase("nita", "คุณนิต้า", "30-39"),
  makeCase("pim", "คุณพิมพ์", "30-39"),
  makeCase("rarin", "คุณระริน", "30-39"),
  makeCase("nudee", "คุณหนูดี", "30-39"),
  makeCase("guest", "คุณเกสต์", "30-39"),
  makeCase("tam", "คุณตาม", "30-39"),
  makeCase("namhom", "คุณน้ำหอม", "30-39"),
  makeCase("namfon", "คุณน้ำฝน", "30-39"),

  // 40-49
  makeCase("orn-rapeepat", "คุณอร ระพีพัฒ", "40-49"),
  makeCase("pa", "คุณภา", "40-49"),
  makeCase("ya", "คุณยา", "40-49"),
  makeCase("joy-ratana", "คุณจอย รัตนา", "40-49"),
  makeCase("ploy", "คุณพลอย", "40-49"),
  makeCase("petch", "คุณเพชร", "40-49"),
  makeCase("maneewan", "คุณมณีวรรณ", "40-49"),
  makeCase("benz", "คุณเบนซ์", "40-49"),

  // 50-59
  makeCase("pon", "คุณปอน", "50-59"),
  makeCase("lek-kamonthorn", "คุณเล็ก กมลธร", "50-59"),
  makeCase("sai", "คุณทราย", "50-59"),
  makeCase("grace", "คุณเกรซ", "50-59"),
  makeCase("noi", "คุณหน่อย", "50-59"),
  makeCase("jeab-sawanya", "คุณเจี๊ยบ สวรรยา", "50-59"),
  makeCase("kung", "คุณกุ้ง", "50-59"),

  // 60+
  makeCase("louis", "ยายหลุยส์", "60+"),
];
