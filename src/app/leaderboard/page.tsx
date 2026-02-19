"use client";
import { useState } from "react";

interface Entry { wallet: string; fairscore: number; tier: string }

export default function Leaderboard() {
  const [wallet, setWallet] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(false);

  const lookup = async () => {
    if (!wallet) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/score?wallet=${wallet}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setEntries((prev) => {
        if (prev.find((e) => e.wallet === data.wallet)) return prev;
        return [...prev, { wallet: data.wallet, fairscore: data.fairscore, tier: data.tier }]
          .sort((a, b) => b.fairscore - a.fairscore);
      });
      setWallet("");
    } catch { /* ignore */ }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
      <p className="text-gray-400 mb-6">Look up any Solana wallet to compare FairScores.</p>
      <div className="flex gap-2 mb-8">
        <input
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="Enter Solana wallet address"
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm"
        />
        <button onClick={lookup} disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
          {loading ? "..." : "Lookup"}
        </button>
      </div>
      {entries.length > 0 && (
        <table className="w-full text-sm">
          <thead><tr className="text-gray-400 border-b border-white/10">
            <th className="text-left py-2">#</th><th className="text-left py-2">Wallet</th>
            <th className="text-right py-2">FairScore</th><th className="text-right py-2">Tier</th>
          </tr></thead>
          <tbody>
            {entries.map((e, i) => (
              <tr key={e.wallet} className="border-b border-white/5">
                <td className="py-2 text-gray-400">{i + 1}</td>
                <td className="py-2 text-white font-mono">{e.wallet.slice(0, 4)}...{e.wallet.slice(-4)}</td>
                <td className="py-2 text-right text-white font-semibold">{Math.round(e.fairscore)}</td>
                <td className="py-2 text-right capitalize text-gray-300">{e.tier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
