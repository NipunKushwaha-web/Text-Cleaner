import React from "react";
import { StatItem } from "./StatItem";
import type { TextStats } from "../types";

interface StatsBarProps {
  stats: TextStats;
  extra?: React.ReactNode;
}

export function StatsBar({ stats, extra }: StatsBarProps) {
  return (
    <div className="stats-bar">
      <StatItem label="Chars" value={stats.chars} />
      <StatItem label="Words" value={stats.words} />
      <StatItem label="Lines" value={stats.lines} />
      {extra}
    </div>
  );
}
