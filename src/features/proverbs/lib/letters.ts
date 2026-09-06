import { shardKey } from "@/lib/kannada";
import { ARCHAIC, SCHOOL_CONSONANTS, VOWELS } from "@/lib/kannadaAlphabet";
import type { Proverb } from "../types";

/** Varnamale order the letter index is shown in: 13 vowels, 34 consonants, 2 archaic. */
export const PROVERB_ALPHABET: readonly string[] = [
  ...VOWELS,
  ...SCHOOL_CONSONANTS,
  ...ARCHAIC,
];

/** The first Kannada akshara a proverb sorts under, or "_" for anything else. */
export function proverbLetter(text: string): string {
  return shardKey(text);
}

/**
 * Every alphabet letter with how many proverbs start with it (0 when none), in
 * varnamale order, then a "_" bucket for non-Kannada starts when it is non-empty.
 * Built in memory — the full proverb list is already loaded, so no data file.
 */
export function proverbLetterIndex(
  items: readonly Proverb[],
): { letter: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of items) {
    const key = proverbLetter(p.text);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  const out = PROVERB_ALPHABET.map((letter) => ({
    letter,
    count: counts.get(letter) ?? 0,
  }));
  const other = counts.get("_") ?? 0;
  if (other > 0) out.push({ letter: "_", count: other });
  return out;
}

/** Proverbs whose first akshara is `letter`; a falsy `letter` returns all of them. */
export function filterByLetter(
  items: readonly Proverb[],
  letter: string | null,
): Proverb[] {
  if (!letter) return [...items];
  return items.filter((p) => proverbLetter(p.text) === letter);
}
