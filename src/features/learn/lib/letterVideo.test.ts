import { describe, expect, it } from "vitest";
import { videoMimeType } from "./letterVideo";

describe("letter video", () => {
  it("prefers mp4, falls back to webm, null when nothing records", () => {
    expect(videoMimeType(() => true)).toBe("video/mp4");
    expect(videoMimeType((t) => t === "video/webm")).toBe("video/webm");
    expect(videoMimeType(() => false)).toBeNull();
  });

});
