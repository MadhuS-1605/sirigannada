"use client";

import { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { Button, IconButton } from "@/components/ui/Button";
import { Sheet } from "@/components/ui/Sheet";
import { useT } from "@/components/providers/AppProviders";
import { toIso15919 } from "@/lib/iso15919";
import { useSpeakKannada } from "@/lib/SpeakContext";
import { hearLetter, letterMedia } from "../lib/letterMedia";
import { LETTER_WORDS } from "../lib/letterWords";

/** Popup for one alphabet letter: how it is written (and how it sounds) on the left, words that begin with it on the right. */
export function LetterSheet({ glyph, onClose, onStep }: { glyph: string | null; onClose: () => void; onStep: (by: -1 | 1) => void }) {
  const t = useT();
  const speak = useSpeakKannada();

  useEffect(() => {
    if (glyph === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onStep(-1);
      if (event.key === "ArrowRight") onStep(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [glyph, onStep]);

  const media = glyph === null ? null : letterMedia(glyph);
  if (glyph === null || !media) return null;
  const words = LETTER_WORDS[glyph] ?? [];

  return (
    <Sheet open onClose={onClose} title={t("letterSheetTitle", { letter: glyph })}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex w-full items-center justify-center gap-1">
            <IconButton onClick={() => onStep(-1)} aria-label={t("letterSheetPrevious")}>
              <ChevronLeftIcon size={22} />
            </IconButton>
            {/* eslint-disable-next-line @next/next/no-img-element -- same-origin static asset, no optimiser in static export */}
            <img src={media.gif} alt="" className="letter-card aspect-square w-full max-w-44 rounded-md border border-line object-contain p-2" />
            <IconButton onClick={() => onStep(1)} aria-label={t("letterSheetNext")}>
              <ChevronRightIcon size={22} />
            </IconButton>
          </div>
          <span className="text-sm text-muted" lang="en">{toIso15919(glyph)}</span>
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="secondary" size="sm" onClick={() => hearLetter(glyph, speak)} data-sheet-initial-focus>
              {t("letterSheetHear")}
            </Button>
          </div>
        </div>
        <section className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-secondary">{t("letterSheetWords")}</h3>
          {words.length === 0 ? (
            <p className="text-sm text-secondary">{t("letterSheetNoWords")}</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {words.map(({ word, en }) => (
                <li key={word} className="flex flex-col">
                  <span className="font-serif text-lg font-semibold text-ink" lang="kn">{word}</span>
                  <span className="text-xs text-muted" lang="en">{toIso15919(word)} · {en}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
      <p className="mt-4 text-2xs text-muted">
        <a className="underline" href={media.gifSource} rel="noopener noreferrer">{t("letterSheetAnimationBy")}</a>
        {" · "}
        <a className="underline" href={media.audioSource} rel="noopener noreferrer">{t("letterSheetVoiceBy")}</a>
        {" · Wikimedia Commons, "}
        <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/" rel="noopener noreferrer">CC BY-SA 4.0</a>
      </p>
    </Sheet>
  );
}
