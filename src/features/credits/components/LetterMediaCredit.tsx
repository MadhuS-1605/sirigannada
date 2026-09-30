"use client";

import { useT } from "@/components/providers/AppProviders";

const ANIMATIONS = "https://commons.wikimedia.org/wiki/Category:Animations_of_Kannada_letters";
const RECORDINGS = "https://commons.wikimedia.org/wiki/Category:Pronunciation_of_Kannada_alphabet";
const CC_BY_SA = "https://creativecommons.org/licenses/by-sa/4.0/";

export function LetterMediaCredit() {
  const t = useT();
  return (
    <section className=" border border-line bg-elevated p-4">
      <h2 className="text-lg font-semibold text-ink">{t("creditsLettersTitle")}</h2>
      <p className="mt-2 text-base text-secondary leading-kannada">{t("creditsLettersBody")}</p>
      <p className="mt-2 text-sm">
        <a className="text-accent underline" href={ANIMATIONS} rel="noopener noreferrer">
          {t("letterSheetAnimationBy")}
        </a>
        {" · "}
        <a className="text-accent underline" href={RECORDINGS} rel="noopener noreferrer">
          {t("letterSheetVoiceBy")}
        </a>
        {" · "}
        <a className="text-accent underline" href={CC_BY_SA} rel="noopener noreferrer">
          CC BY-SA 4.0
        </a>
      </p>
    </section>
  );
}
