"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useEffect } from "react";
import { useFairScore } from "@/hooks/useFairScore";
import { ScoreCard } from "@/components/ScoreCard";
import { FeatureMetrics } from "@/components/FeatureMetrics";

export default function Dashboard() {
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const { score, loading, error } = useFairScore();

  useEffect(() => {
    if (!publicKey) setVisible(true);
  }, [publicKey, setVisible]);

  if (!publicKey) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#faf9f5] mb-4">Dashboard</h1>
        <p className="text-[#b0aea5] mb-6">Connect your wallet to view your reputation score.</p>
        <button onClick={() => setVisible(true)} className="bg-[#d97757] hover:bg-[#c4623f] text-[#141413] px-8 py-3 rounded-xl font-semibold transition-all">
          Connect Wallet
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="animate-pulse text-gray-400">Loading your FairScore...</div>
      </div>
    );
  }

  if (error || !score) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-red-400">Failed to load score: {error || "Unknown error"}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Your Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1">
          <ScoreCard
            fairscore={score.fairscore}
            tier={score.tier}
            fairscore_base={score.fairscore_base}
            social_score={score.social_score}
            badges={score.badges}
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-white mb-3">On-Chain Metrics</h2>
          <FeatureMetrics features={score.features} />
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 text-sm text-gray-400">
        Wallet: {score.wallet} | Last updated: {new Date(score.tier ? Date.now() : 0).toLocaleString()}
      </div>
    </div>
  );
}
