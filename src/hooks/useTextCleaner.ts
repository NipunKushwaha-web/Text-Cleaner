import { useState, useEffect } from "react";
import type { OpKey } from "../types";
import { DEFAULT_ACTIVE } from "../constants/operations";
import { getStats } from "../utils/textStats";
import { applyOps } from "../utils/applyOps";
import { useToast } from "./useToast";

export function useTextCleaner() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [activeOps, setActiveOps] = useState<Set<OpKey>>(new Set(DEFAULT_ACTIVE));
  const [findText, setFindText] = useState<string>("");
  const [replaceText, setReplaceText] = useState<string>("");
  const [outputFlash, setOutputFlash] = useState(false);
  const { toast, showToast } = useToast();

  const inputStats = getStats(input);
  const outputStats = getStats(output);
  const savedChars = input.length - output.length;

  const flash = () => {
    setOutputFlash(true);
    setTimeout(() => setOutputFlash(false), 300);
  };

  const toggleOp = (key: OpKey) => {
    setActiveOps((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const handleClean = () => {
    const result = applyOps(input, activeOps);
    setOutput(result);
    flash();
  };

  const handleFindReplace = () => {
    if (!findText) return;
    const source = output || input;
    const result = source.split(findText).join(replaceText);
    setOutput(result);
    showToast("Find & Replace done!");
    flash();
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleSwap = () => {
    setInput(output);
    setOutput(input);
  };

  const handleCopyOutput = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      showToast("Copied to clipboard!");
    } catch {
      showToast("Copy failed — select manually.");
    }
  };

  // Ctrl+Enter shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") handleClean();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return {
    // state
    input, setInput,
    output,
    activeOps,
    findText, setFindText,
    replaceText, setReplaceText,
    outputFlash,
    toast,
    // derived
    inputStats,
    outputStats,
    savedChars,
    // handlers
    toggleOp,
    handleClean,
    handleFindReplace,
    handleClear,
    handleSwap,
    handleCopyOutput,
  };
}
