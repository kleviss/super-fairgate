"use client";

interface Props {
  features: Record<string, number>;
}

const LABELS: Record<string, string> = {
  tx_count: "Transactions",
  active_days: "Active Days",
  wallet_age_days: "Wallet Age (days)",
  native_sol_percentile: "SOL Holdings",
  stablecoin_percentile: "Stablecoin Holdings",
  lst_percentile_score: "LST Score",
  major_percentile_score: "Major Token Score",
  median_gap_hours: "Activity Frequency (hrs)",
};

export function FeatureMetrics({ features }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {Object.entries(features).map(([key, val]) => (
        <div key={key} className="bg-white/5 rounded-lg p-3">
          <p className="text-xs text-gray-400">{LABELS[key] || key}</p>
          <p className="text-white font-semibold">
            {typeof val === "number" && val < 1 ? `${(val * 100).toFixed(0)}%` : val}
          </p>
        </div>
      ))}
    </div>
  );
}
