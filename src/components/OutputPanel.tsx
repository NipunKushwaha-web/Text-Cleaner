import type { TextStats } from "../types";
import { StatsBar } from "./StatsBar";
import { StatItem } from "./StatItem";

interface OutputPanelProps {
  output: string;
  outputStats: TextStats;
  savedChars: number;
  outputFlash: boolean;
  onCopy: () => void;
}

export function OutputPanel({
  output,
  outputStats,
  savedChars,
  outputFlash,
  onCopy,
}: OutputPanelProps) {
  const savedLabel =
    savedChars > 0
      ? `-${savedChars} chars`
      : savedChars < 0
      ? `+${Math.abs(savedChars)}`
      : "—";

  return (
    <div className="panel">
      <div className="panel-header">
        <span className="panel-label">Output — click to copy</span>
        <span className="badge">{output.length} chars</span>
      </div>

      <textarea
        className={`textarea textarea--output${outputFlash ? " textarea--flash" : ""}`}
        value={output}
        readOnly
        onClick={onCopy}
        placeholder="Cleaned text appears here..."
      />

      <StatsBar
        stats={outputStats}
        extra={<StatItem label="Saved" value={savedLabel} />}
      />
    </div>
  );
}
