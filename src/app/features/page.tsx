"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { GatedFeature } from "@/components/GatedFeature";

const FEATURES = [
  { id: "early-access", name: "Early Access", tier: "Silver", desc: "Get early access to new platform features before public release." },
  { id: "premium-features", name: "Premium Analytics", tier: "Gold", desc: "Advanced on-chain analytics and portfolio insights." },
  { id: "governance", name: "Governance Voting", tier: "Gold", desc: "Vote on platform proposals and community decisions." },
  { id: "vip-allocation", name: "VIP Allocations", tier: "Platinum", desc: "Priority allocation in token launches and exclusive drops." },
];

export default function Features() {
  const { publicKey } = useWallet();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Gated Features</h1>
      <p className="text-gray-400 mb-8">Features unlock based on your FairScore tier.</p>
      {!publicKey && <p className="text-yellow-400 mb-6">Connect your wallet to check access.</p>}
      <div className="grid md:grid-cols-2 gap-4">
        {FEATURES.map((f) => (
          <div key={f.id}>
            <GatedFeature feature={f.id}>
              <div className="border border-green-500/30 bg-green-500/5 rounded-xl p-6">
                <h3 className="text-white font-semibold">{f.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{f.desc}</p>
                <span className="inline-block mt-2 text-green-400 text-xs">Unlocked</span>
              </div>
            </GatedFeature>
            <p className="text-xs text-gray-500 mt-1">Requires: {f.tier}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
