export type OpKey =
  | "trim"
  | "extraSpaces"
  | "blankLines"
  | "lowercase"
  | "uppercase"
  | "titlecase"
  | "sentencecase"
  | "removePunct"
  | "removeNumbers"
  | "removeHtml"
  | "removeUrls"
  | "removeEmoji"
  | "removeLineBreaks"
  | "normalizeQuotes"
  | "removeDupeLines";

export interface Operation {
  key: OpKey;
  label: string;
}

export interface TextStats {
  chars: number;
  words: number;
  lines: number;
}

export interface ToastState {
  msg: string;
  visible: boolean;
}
