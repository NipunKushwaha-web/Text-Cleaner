import type { Operation, OpKey } from "../types";

export const OPERATIONS: Operation[] = [
  { key: "trim",             label: "Trim Whitespace" },
  { key: "extraSpaces",      label: "Extra Spaces"    },
  { key: "blankLines",       label: "Blank Lines"     },
  { key: "lowercase",        label: "→ lowercase"     },
  { key: "uppercase",        label: "→ UPPERCASE"     },
  { key: "titlecase",        label: "→ Title Case"    },
  { key: "sentencecase",     label: "→ Sentence"      },
  { key: "removePunct",      label: "Strip Punct."    },
  { key: "removeNumbers",    label: "Strip Numbers"   },
  { key: "removeHtml",       label: "Strip HTML"      },
  { key: "removeUrls",       label: "Strip URLs"      },
  { key: "removeEmoji",      label: "Strip Emoji"     },
  { key: "removeLineBreaks", label: "Join Lines"      },
  { key: "normalizeQuotes",  label: "Fix Quotes"      },
  { key: "removeDupeLines",  label: "Dedup Lines"     },
];

export const DEFAULT_ACTIVE: Set<OpKey> = new Set([
  "trim",
  "extraSpaces",
  "blankLines",
]);
