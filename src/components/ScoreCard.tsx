"use client";

const TIER_COLORS: Record<string, string> = {
  bronze: "from-amber-700 to-amber-900",
  silver: "from-gray-300 to-gray-500",
  gold: "from-yellow-400 to-yellow-600",
  platinum: "from-purple-300 to-purple-500",
};

interface Props {
  fairscore: number;
  tier: string;
  fairscore_base: number;
  social_score: number;
  badges: { id: string; label: string; description: string; tier: string }[];
}

export function ScoreCard({ fairscore, tier, fairscore_base, social_score, badges }: Props) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${TIER_COLORS[tier] || TIER_COLORS.bronze} p-[2px]`}>
      <div className="rounded-2xl bg-gray-950 p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-400 uppercase tracking-wider">FairScore</p>
          <p className="text-5xl font-bold text-white">{Math.round(fairscore)}</p>
          <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-white/10 text-white">
            {tier}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-gray-400">Wallet Score</p>
            <p className="text-white font-semibold text-lg">{Math.round(fairscore_base)}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-gray-400">Social Score</p>
            <p className="text-white font-semibold text-lg">{Math.round(social_score)}</p>
          </div>
        </div>
        {badges.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-gray-400 mb-2">Badges</p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b.id} className="px-2 py-1 bg-white/10 rounded text-xs text-white" title={b.description}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
