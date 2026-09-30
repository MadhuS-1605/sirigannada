import { toIso15919 } from "@/lib/iso15919";
import {
  ARCHAIC,
  AVARGIYA,
  GUNITA_SIGNS,
  SCHOOL_CONSONANTS,
  SANSKRIT_VOWELS,
  VOWELS,
  YOGAVAHA,
  gunitaksharaForm,
} from "./kannadaAlphabet";

const VOWEL_ISO: Record<string, string> = {
  ಅ: "a", ಆ: "ā", ಇ: "i", ಈ: "ī", ಉ: "u", ಊ: "ū", ಋ: "r̥",
  ಎ: "e", ಏ: "ē", ಐ: "ai", ಒ: "o", ಓ: "ō", ಔ: "au",
};

const GUNITA_KA_ISO = [
  "ka", "kā", "ki", "kī", "ku", "kū", "kr̥",
  "ke", "kē", "kai", "ko", "kō", "kau", "kaṁ", "kaḥ", "k",
];

describe("varnamale inventory", () => {
  it("has the 13 school vowels", () => {
    expect(VOWELS).toHaveLength(13);
    expect(new Set(VOWELS).size).toBe(13);
  });

  it("has 34 school consonants with no duplicates", () => {
    expect(SCHOOL_CONSONANTS).toHaveLength(34);
    expect(new Set(SCHOOL_CONSONANTS).size).toBe(34);
    expect(AVARGIYA).toHaveLength(9);
    expect(ARCHAIC).toEqual(["ಱ", "ೞ"]);
  });

  it("lists yogavaha and Sanskrit-only vocalics separately", () => {
    expect(YOGAVAHA).toEqual(["ಅಂ", "ಅಃ"]);
    expect(SANSKRIT_VOWELS).toEqual(["ೠ", "ಌ", "ೡ"]);
  });
});

describe("ISO 15919 on the charts", () => {
  it.each(Object.entries(VOWEL_ISO))("%s → %s", (glyph, iso) => {
    expect(toIso15919(glyph)).toBe(iso);
  });

  it("romanises yogavaha, extra vowels, and archaic letters", () => {
    expect(toIso15919("ಅಂ")).toBe("aṁ");
    expect(toIso15919("ಅಃ")).toBe("aḥ");
    expect(toIso15919("ೠ")).toBe("r̥̄");
    expect(toIso15919("ಌ")).toBe("l̥");
    expect(toIso15919("ೡ")).toBe("l̥̄");
    expect(toIso15919("ಱ")).toBe("ṟa");
    expect(toIso15919("ೞ")).toBe("ḻa");
  });

  it("romanises a sample from each varga", () => {
    expect(toIso15919("ಕ")).toBe("ka");
    expect(toIso15919("ಙ")).toBe("ṅa");
    expect(toIso15919("ಞ")).toBe("ña");
    expect(toIso15919("ಟ")).toBe("ṭa");
    expect(toIso15919("ಣ")).toBe("ṇa");
    expect(toIso15919("ಶ")).toBe("śa");
    expect(toIso15919("ಷ")).toBe("ṣa");
    expect(toIso15919("ಳ")).toBe("ḷa");
  });
});

describe("gunitakshara", () => {
  it("builds 16 forms for ಕ matching school order", () => {
    const row = GUNITA_SIGNS.map((sign) => gunitaksharaForm("ಕ", sign));
    expect(row).toHaveLength(16);
    expect(GUNITA_SIGNS).toHaveLength(16);
    expect(row[0]).toBe("ಕ");
    expect(row[1]).toBe("ಕಾ");
    expect(row[13]).toBe("ಕಂ");
    expect(row[14]).toBe("ಕಃ");
    expect(row[15]).toBe("ಕ್");
    expect(row.map(toIso15919)).toEqual(GUNITA_KA_ISO);
  });

  it("applies the same signs to another consonant", () => {
    expect(gunitaksharaForm("ತ", GUNITA_SIGNS[2]!)).toBe("ತಿ");
    expect(toIso15919("ತಿ")).toBe("ti");
  });
});
