interface StatItemProps {
  label: string;
  value: string | number;
}

export function StatItem({ label, value }: StatItemProps) {
  return (
    <span className="stat-item">
      {label}: <span className="stat-value">{value}</span>
    </span>
  );
}
