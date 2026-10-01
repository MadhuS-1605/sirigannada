import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { SCHOOL_CONSONANTS, VOWELS } from "@/lib/kannadaAlphabet";
import { LETTER_WORDS, wordPictureSrc } from "./letterWords";

const VIRAMA = "್";

describe("letter words", () => {
  it("only lists letters from the chart", () => {
    const chart = new Set<string>([...VOWELS, ...SCHOOL_CONSONANTS]);
    for (const letter of Object.keys(LETTER_WORDS)) expect(chart.has(letter)).toBe(true);
  });

  it("every word begins with its letter, not with a conjunct", () => {
    for (const [letter, words] of Object.entries(LETTER_WORDS)) {
      expect(words.length).toBeGreaterThan(0);
      for (const { word, en } of words) {
        expect(word.startsWith(letter), word).toBe(true);
        expect(word[letter.length], word).not.toBe(VIRAMA);
        expect(en.trim()).not.toBe("");
      }
    }
  });

  it("every picture file exists", () => {
    for (const { word, picture } of Object.values(LETTER_WORDS).flat()) {
      if (picture) expect(existsSync(join(process.cwd(), "public", wordPictureSrc(picture))), word).toBe(true);
    }
  });
});
