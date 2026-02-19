"use client";
import Link from "next/link";

const TIERS = [
  { name: "Bronze", range: "0–199", color: "from-amber-700 to-amber-900", perks: ["Basic profile", "Public leaderboard"] },
  { name: "Silver", range: "200–399", color: "from-gray-300 to-gray-500", perks: ["Early access features", "Community channels"] },
  { name: "Gold", range: "400–599", color: "from-yellow-400 to-yellow-600", perks: ["Governance voting", "Premium analytics"] },
  { name: "Platinum", range: "600+", color: "from-purple-300 to-purple-500", perks: ["VIP allocations", "Priority support", "All features"] },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold text-white mb-4">
          Reputation-Gated Access on <span className="text-purple-400">Solana</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          FairGate uses FairScale reputation scores to unlock tiers, allocations, and features.
          Connect your wallet to see where you stand.
        </p>
        <Link href="/dashboard" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition">
          Launch App
        </Link>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Reputation Tiers</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {TIERS.map((t) => (
            <div key={t.name} className={`rounded-xl bg-gradient-to-br ${t.color} p-[2px]`}>
              <div className="rounded-xl bg-gray-950 p-5 h-full">
                <h3 className="text-white font-bold text-lg">{t.name}</h3>
                <p className="text-gray-400 text-sm mb-3">Score: {t.range}</p>
                <ul className="space-y-1">
                  {t.perks.map((p) => (
                    <li key={p} className="text-gray-300 text-sm">+ {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            { step: "1", title: "Connect Wallet", desc: "Link your Solana wallet to pull your on-chain history." },
            { step: "2", title: "Get Your FairScore", desc: "FairScale analyzes transactions, holdings, and social signals." },
            { step: "3", title: "Unlock Features", desc: "Your tier determines what you can access — from early features to VIP allocations." },
          ].map((s) => (
            <div key={s.step} className="bg-white/5 rounded-xl p-6">
              <div className="text-purple-400 font-bold text-2xl mb-2">{s.step}</div>
              <h3 className="text-white font-semibold mb-1">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
