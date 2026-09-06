"use client";

import { useEffect, useMemo, useState } from "react";
import { SearchBox } from "@/components/ui/SearchBox";
import { Skeleton } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useT } from "@/components/providers/AppProviders";
import { filterProverbs } from "../lib/filter";
import { filterByLetter, proverbLetterIndex } from "../lib/letters";
import { loadProverbs } from "../lib/load";
import {
  getNextVisibleCount,
  getVisibleProverbs,
  INITIAL_PROVERB_COUNT,
} from "../lib/window";
import type { ProverbsFile } from "../types";
import { ProverbRow } from "./ProverbRow";
import { ProverbsCredit } from "./ProverbsCredit";

export function ProverbsBrowse() {
  const t = useT();
  const [q, setQ] = useState("");
  const [letter, setLetter] = useState<string | null>(null);
  const [data, setData] = useState<ProverbsFile | null>(null);
  const [failed, setFailed] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROVERB_COUNT);

  useEffect(() => {
    let alive = true;
    loadProverbs().then((file) => {
      if (!alive) return;
      if (!file) setFailed(true);
      else setData(file);
    });
    return () => {
      alive = false;
    };
  }, []);

  const letterIndex = useMemo(
    () => (data ? proverbLetterIndex(data.proverbs) : []),
    [data],
  );
  const matches = useMemo(
    () => (data ? filterProverbs(filterByLetter(data.proverbs, letter), q) : []),
    [data, q, letter],
  );
  const visible = useMemo(
    () => getVisibleProverbs(matches, visibleCount),
    [matches, visibleCount],
  );

  function handleQueryChange(value: string) {
    setQ(value);
    setVisibleCount(INITIAL_PROVERB_COUNT);
  }

  function handleLetterChange(next: string | null) {
    setLetter(next);
    setVisibleCount(INITIAL_PROVERB_COUNT);
  }

  if (failed) {
    return <p className="text-secondary text-base py-8 text-center">{t("proverbLoadError")}</p>;
  }

  if (!data) {
    return (
      <div className="flex flex-col gap-3">
        <Skeleton className="h-12" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <SearchBox
        value={q}
        onChange={handleQueryChange}
        size="lg"
        placeholder={t("proverbSearchPlaceholder")}
        aria-label={t("proverbSearchPlaceholder")}
      />
      <div className="flex flex-wrap gap-1.5" role="group" aria-label={t("proverbFilterByLetter")}>
        <button
          type="button"
          onClick={() => handleLetterChange(null)}
          aria-pressed={letter === null}
          className={`min-h-11 rounded-md border px-3 text-base transition-colors duration-150 ${
            letter === null
              ? "border-line-strong bg-paper-edge text-ink"
              : "border-line bg-elevated text-secondary hover:border-line-strong"
          }`}
        >
          {t("proverbLetterAll")}
        </button>
        {letterIndex.map(({ letter: l, count }) => (
          <button
            key={l}
            type="button"
            lang="kn"
            disabled={count === 0}
            onClick={() => handleLetterChange(l)}
            aria-pressed={letter === l}
            title={t("proverbCount", { n: count })}
            className={`min-h-11 min-w-11 rounded-md border px-2 font-serif text-lg transition-colors duration-150 disabled:opacity-30 ${
              letter === l
                ? "border-line-strong bg-paper-edge text-ink"
                : "border-line bg-elevated text-secondary enabled:hover:border-line-strong"
            }`}
          >
            {l === "_" ? "#" : l}
          </button>
        ))}
      </div>
      <p className="text-sm text-muted" aria-live="polite">
        {t("proverbVisibleCount", {
          shown: visible.length,
          total: matches.length,
        })}
      </p>
      {q.trim() && matches.length === 0 ? (
        <p className="text-secondary text-base py-8 text-center">{t("noResults")}</p>
      ) : (
        <ul id="proverb-results" className="rounded-lg border border-line bg-elevated px-4">
          {visible.map((p, index) => (
            <ProverbRow key={p.id ?? `${p.text}-${index}`} proverb={p} />
          ))}
        </ul>
      )}
      {visible.length < matches.length ? (
        <Button
          variant="secondary"
          className="self-center"
          aria-controls="proverb-results"
          onClick={() => {
            setVisibleCount((count) => getNextVisibleCount(count, matches.length));
          }}
        >
          {t("showMoreProverbs")}
        </Button>
      ) : null}
      <ProverbsCredit source={data.provenance.source} />
    </div>
  );
}
