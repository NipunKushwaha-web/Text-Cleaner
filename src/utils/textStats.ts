import type { TextStats } from "../types";

export function getStats(text: string): TextStats {
  return {
    chars: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text ? text.split("\n").length : 0,
  };
}
