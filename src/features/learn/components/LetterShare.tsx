"use client";

import { useState } from "react";
import { DownloadIcon, ShareIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { useT } from "@/components/providers/AppProviders";
import { canShareFiles } from "@/features/share/components/ShareCardSheet";
import { downloadPng } from "@/features/share/lib/shareCard";
import { recordLetterVideo } from "../lib/letterVideo";

type Share = { state: "idle" | "choose" | "making" | "failed" } | { state: "ready"; file: File };

/**
 * Share → image (the site's share card, via `onImage`) or video. The video is recorded first, then
 * offered to the share sheet (or a download where files can't be shared): two taps, because recording
 * outlasts the tap's user activation, which `navigator.share` needs.
 */
export function LetterShare({ glyph, onImage }: { glyph: string; onImage: () => void }) {
  const t = useT();
  const [share, setShare] = useState<Share>({ state: "idle" });
  const url = `${location.origin}${location.pathname}`;

  if (share.state === "idle") {
    return (
      <Button variant="secondary" size="sm" onClick={() => setShare({ state: "choose" })}>
        <ShareIcon size={16} />
        {t("letterSheetShare")}
      </Button>
    );
  }
  if (share.state === "choose") {
    const makeVideo = () => {
      setShare({ state: "making" });
      recordLetterVideo(glyph, url).then((file) => setShare({ state: "ready", file }), () => setShare({ state: "failed" }));
    };
    return (
      <>
        <Button variant="secondary" size="sm" onClick={onImage}>{t("letterSheetShareImage")}</Button>
        {typeof MediaRecorder !== "undefined" && (
          <Button variant="secondary" size="sm" onClick={makeVideo}>{t("letterSheetShareVideo")}</Button>
        )}
      </>
    );
  }
  if (share.state !== "ready") {
    return (
      <Button variant="secondary" size="sm" disabled={share.state === "making"} onClick={() => setShare({ state: "choose" })}>
        <ShareIcon size={16} />
        {t(share.state === "making" ? "letterSheetMakingVideo" : "letterSheetVideoFailed")}
      </Button>
    );
  }
  const { file } = share;
  return (
    <>
      {canShareFiles(file) && (
        <Button variant="primary" size="sm" onClick={() => navigator.share({ files: [file] }).catch(() => {})}>
          <ShareIcon size={16} />
          {t("letterSheetShare")}
        </Button>
      )}
      <Button variant="secondary" size="sm" onClick={() => downloadPng(file.name, file)}>
        <DownloadIcon size={16} />
        {t("letterSheetDownloadVideo")}
      </Button>
    </>
  );
}
