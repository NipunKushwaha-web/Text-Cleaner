import type { OpKey, TextStats } from "../types";
import { OPERATIONS } from "../constants/operations";
import { StatsBar } from "./StatsBar";

interface InputPanelProps {
  input: string;
  onInputChange: (value: string) => void;
  inputStats: TextStats;
  activeOps: Set<OpKey>;
  onToggleOp: (key: OpKey) => void;
  findText: string;
  onFindChange: (value: string) => void;
  replaceText: string;
  onReplaceChange: (value: string) => void;
  onFindReplace: () => void;
  onClean: () => void;
  onClear: () => void;
  onSwap: () => void;
}

export function InputPanel({
  input,
  onInputChange,
  inputStats,
  activeOps,
  onToggleOp,
  findText,
  onFindChange,
  replaceText,
  onReplaceChange,
  onFindReplace,
  onClean,
  onClear,
  onSwap,
}: InputPanelProps) {
  return (
    <div className="panel panel--input">
      <div className="panel-header">
        <span className="panel-label">Input</span>
        <span className="badge">{input.length} chars</span>
      </div>

      <textarea
        className="textarea"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder={`Paste your text here...\n\nMessy text with   extra spaces,\n\n\nmultiple blank lines, INCONSISTENT casing,\nand other noise gets cleaned up instantly.`}
      />

      <div className="controls">
        <div className="controls-title">Operations</div>

        <div className="ops-grid">
          {OPERATIONS.map((op) => (
            <button
              key={op.key}
              className={`op-btn${activeOps.has(op.key) ? " op-btn--active" : ""}`}
              onClick={() => onToggleOp(op.key)}
            >
              {op.label}
            </button>
          ))}
        </div>

        <div className="replace-row">
          <input
            className="replace-input"
            type="text"
            placeholder="Find..."
            value={findText}
            onChange={(e) => onFindChange(e.target.value)}
          />
          <input
            className="replace-input"
            type="text"
            placeholder="Replace with..."
            value={replaceText}
            onChange={(e) => onReplaceChange(e.target.value)}
          />
          <button className="btn-icon" onClick={onFindReplace}>
            Replace
          </button>
        </div>

        <div className="action-row">
          <button className="btn-clean" onClick={onClean}>
            ⚡ Clean
          </button>
          <button className="btn-icon" onClick={onClear}>
            Clear
          </button>
          <button className="btn-icon" onClick={onSwap}>
            ↕ Swap
          </button>
        </div>
      </div>

      <StatsBar stats={inputStats} />
    </div>
  );
}
