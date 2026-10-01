import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { SCHOOL_CONSONANTS, VOWELS, YOGAVAHA } from "@/lib/kannadaAlphabet";
import { letterMedia } from "./letterMedia";

describe("letter media", () => {
  it("every school letter has a mirrored animation and recording", () => {
    for (const letter of [...VOWELS, ...YOGAVAHA, ...SCHOOL_CONSONANTS]) {
      const media = letterMedia(letter);
      expect(media, letter).not.toBeNull();
      for (const file of [media!.gif, media!.audio]) expect(existsSync(join("public", file)), `${letter} ${file}`).toBe(true);
    }
  });

  it("links each recording to its Commons file page", () => {
    expect(letterMedia("ಕ")?.audioSource).toBe("https://commons.wikimedia.org/wiki/File:Kn-%E0%B2%95.oga");
    expect(letterMedia("ೠ")).toBeNull();
  });
});
