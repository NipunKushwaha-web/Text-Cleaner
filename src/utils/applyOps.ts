import type { OpKey } from "../types";

export function applyOps(text: string, ops: Set<OpKey>): string {
  if (ops.has("removeHtml"))
    text = text.replace(/<[^>]*>/g, "");

  if (ops.has("removeUrls"))
    text = text.replace(/https?:\/\/[^\s]+/g, "");

  if (ops.has("removeEmoji"))
    text = text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "");

  if (ops.has("removeNumbers"))
    text = text.replace(/\d+/g, "");

  if (ops.has("removePunct"))
    text = text.replace(/[^\w\s]/g, "");

  if (ops.has("normalizeQuotes"))
    text = text
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"');

  if (ops.has("trim"))
    text = text.split("\n").map((l) => l.trim()).join("\n");

  if (ops.has("extraSpaces"))
    text = text.replace(/[ \t]+/g, " ");

  if (ops.has("blankLines"))
    text = text.replace(/\n{3,}/g, "\n\n");

  if (ops.has("removeDupeLines")) {
    const seen = new Set<string>();
    text = text
      .split("\n")
      .filter((l) => {
        if (seen.has(l)) return false;
        seen.add(l);
        return true;
      })
      .join("\n");
  }

  if (ops.has("removeLineBreaks"))
    text = text.replace(/\n+/g, " ");

  if (ops.has("lowercase"))
    text = text.toLowerCase();
  else if (ops.has("uppercase"))
    text = text.toUpperCase();
  else if (ops.has("titlecase"))
    text = text.replace(
      /\w\S*/g,
      (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    );
  else if (ops.has("sentencecase"))
    text = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s+\w)/gm, (c) => c.toUpperCase());

  return text;
}
