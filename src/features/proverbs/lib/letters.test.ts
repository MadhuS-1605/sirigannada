import { describe, expect, it } from "vitest";
import { filterByLetter, proverbLetter, proverbLetterIndex } from "./letters";
import type { Proverb } from "../types";

const items: Proverb[] = [
  { id: "p1", text: "ಅಕ್ಕಿ ಮೇಲೆ ಆಸೆ" },
  { id: "p2", text: "ಅಡಿಕೆಗೆ ಹೋದ ಮಾನ" },
  { id: "p3", text: "ಕೈ ಕೆಸರಾದರೆ ಬಾಯಿ ಮೊಸರು" },
  { id: "p4", text: "123 not kannada" },
];

describe("proverbLetter", () => {
  it("returns the first akshara, or _ for non-Kannada", () => {
    expect(proverbLetter("ಅಕ್ಕಿ")).toBe("ಅ");
    expect(proverbLetter("123")).toBe("_");
  });
});

describe("proverbLetterIndex", () => {
  it("lists the whole alphabet with counts, then a non-Kannada bucket", () => {
    const index = proverbLetterIndex(items);
    expect(index[0]).toEqual({ letter: "ಅ", count: 2 });
    expect(index.find((e) => e.letter === "ಕ")).toEqual({ letter: "ಕ", count: 1 });
    expect(index.find((e) => e.letter === "ಗ")).toEqual({ letter: "ಗ", count: 0 });
    expect(index.at(-1)).toEqual({ letter: "_", count: 1 });
    expect(index).toHaveLength(13 + 34 + 2 + 1);
  });

  it("omits the non-Kannada bucket when every proverb starts with a letter", () => {
    const index = proverbLetterIndex(items.slice(0, 3));
    expect(index.some((e) => e.letter === "_")).toBe(false);
    expect(index).toHaveLength(13 + 34 + 2);
  });
});

describe("filterByLetter", () => {
  it("keeps only proverbs starting with the letter", () => {
    expect(filterByLetter(items, "ಅ").map((p) => p.id)).toEqual(["p1", "p2"]);
  });
  it("returns everything for a falsy letter", () => {
    expect(filterByLetter(items, null)).toHaveLength(4);
  });
});
