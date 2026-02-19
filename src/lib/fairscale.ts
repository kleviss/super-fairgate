export interface FairScaleScore {
  wallet: string;
  fairscore_base: number;
  social_score: number;
  fairscore: number;
  tier: "bronze" | "silver" | "gold" | "platinum";
  badges: { id: string; label: string; description: string; tier: string }[];
  actions: string[];
  timestamp: string;
  features: {
    lst_percentile_score: number;
    major_percentile_score: number;
    native_sol_percentile: number;
    tx_count: number;
    active_days: number;
    wallet_age_days: number;
    stablecoin_percentile: number;
    median_gap_hours: number;
  };
}

export async function getFullScore(wallet: string): Promise<FairScaleScore> {
  const res = await fetch(`https://api2.fairscale.xyz/score?wallet=${wallet}`, {
    headers: { fairkey: process.env.FAIRSCALE_API_KEY! },
  });
  if (!res.ok) throw new Error(`FairScale API error: ${res.status}`);
  return res.json();
}

export async function getFairScore(wallet: string): Promise<number> {
  const res = await fetch(`https://api2.fairscale.xyz/fairScore?wallet=${wallet}`, {
    headers: { fairkey: process.env.FAIRSCALE_API_KEY! },
  });
  if (!res.ok) throw new Error(`FairScale API error: ${res.status}`);
  const data = await res.json();
  return data.fair_score;
}

export async function getWalletScore(wallet: string): Promise<number> {
  const res = await fetch(`https://api2.fairscale.xyz/walletScore?wallet=${wallet}`, {
    headers: { fairkey: process.env.FAIRSCALE_API_KEY! },
  });
  if (!res.ok) throw new Error(`FairScale API error: ${res.status}`);
  const data = await res.json();
  return data.wallet_score;
}

export const TIERS = {
  bronze: { min: 0, max: 199, color: "#CD7F32", label: "Bronze" },
  silver: { min: 200, max: 399, color: "#C0C0C0", label: "Silver" },
  gold: { min: 400, max: 599, color: "#FFD700", label: "Gold" },
  platinum: { min: 600, max: Infinity, color: "#E5E4E2", label: "Platinum" },
} as const;

export function getTierFromScore(score: number): keyof typeof TIERS {
  if (score >= 600) return "platinum";
  if (score >= 400) return "gold";
  if (score >= 200) return "silver";
  return "bronze";
}
