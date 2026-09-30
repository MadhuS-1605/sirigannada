"use client";

import { useT } from "@/components/providers/AppProviders";

export function AlphabetSpeakHint() {
  const t = useT();
  return <p className="text-base text-secondary">{t("alphabetSpeakHint")}</p>;
}
