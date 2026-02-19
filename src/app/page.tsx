"use client";
import Link from "next/link";

const TIERS = [
  { name: "Bronze", range: "0–199", accent: "#d97757", bg: "rgba(217,119,87,0.08)", border: "rgba(217,119,87,0.2)", perks: ["Basic profile", "Public leaderboard"] },
  { name: "Silver", range: "200–399", accent: "#b0aea5", bg: "rgba(176,174,165,0.08)", border: "rgba(176,174,165,0.2)", perks: ["Early access features", "Community channels"] },
  { name: "Gold", range: "400–599", accent: "#d4a843", bg: "rgba(212,168,67,0.08)", border: "rgba(212,168,67,0.2)", perks: ["Governance voting", "Premium analytics"] },
  { name: "Platinum", range: "600+", accent: "#6a9bcc", bg: "rgba(106,155,204,0.08)", border: "rgba(106,155,204,0.2)", perks: ["VIP allocations", "Priority support", "All features"] },
];

const STEPS = [
  { icon: "\u{1F50C}", title: "Connect Wallet", desc: "Link your Solana wallet. We read your on-chain history — nothing more." },
  { icon: "\u{1F4CA}", title: "Get Scored", desc: "FairScale's neural network analyzes 13M+ transactions to compute your FairScore." },
  { icon: "\u{1F513}", title: "Unlock Access", desc: "Your tier gates features, allocations, and community privileges in real time." },
];

const STATS = [
  { value: "13M+", label: "Transactions Analyzed" },
  { value: "4", label: "Reputation Tiers" },
  { value: "3", label: "API Endpoints" },
  { value: "Real-time", label: "Score Updates" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,87,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(106,155,204,0.08),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d97757]/20 bg-[#d97757]/5 text-[#d97757] text-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97757] animate-pulse" />
              Powered by FairScale Reputation Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#faf9f5] leading-[1.1] tracking-tight mb-6">
              Your reputation<br />
              <span className="bg-gradient-to-r from-[#d97757] via-[#d4a843] to-[#6a9bcc] bg-clip-text text-transparent">
                unlocks everything
              </span>
            </h1>
            <p className="text-[#b0aea5] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              FairGate uses on-chain reputation to gate access, weight allocations, and reward
              real users. No tokens required — just your track record.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/dashboard" className="bg-[#d97757] hover:bg-[#c4623f] text-[#141413] px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-[0_0_30px_rgba(217,119,87,0.3)]">
                Launch App
              </Link>
              <Link href="/docs" className="border border-[#b0aea5]/20 hover:border-[#b0aea5]/40 text-[#faf9f5] px-8 py-3.5 rounded-xl font-semibold text-sm transition-all">
                Read Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#b0aea5]/10 bg-[#1e1e1c]/50">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-[#faf9f5]">{s.value}</p>
              <p className="text-[#b0aea5] text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-[#faf9f5] text-center mb-4">How It Works</h2>
        <p className="text-[#b0aea5] text-center mb-14 max-w-lg mx-auto">Three steps from wallet connection to gated access.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#d97757]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative border border-[#b0aea5]/10 rounded-2xl p-8 hover:border-[#d97757]/30 transition-colors">
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="text-[#d97757] text-xs font-semibold tracking-wider uppercase mb-2">Step {i + 1}</div>
                <h3 className="text-[#faf9f5] font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-[#b0aea5] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-[#faf9f5] text-center mb-4">Reputation Tiers</h2>
        <p className="text-[#b0aea5] text-center mb-14 max-w-lg mx-auto">Your FairScore determines your tier. Higher tiers unlock more.</p>
        <div className="grid md:grid-cols-4 gap-4">
          {TIERS.map((t) => (
            <div key={t.name} className="rounded-2xl p-[1px]" style={{ background: `linear-gradient(to bottom, ${t.border}, transparent)` }}>
              <div className="rounded-2xl p-6 h-full" style={{ background: t.bg, backdropFilter: "blur(10px)" }}>
                <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center text-sm font-bold" style={{ background: `${t.accent}20`, color: t.accent }}>
                  {t.name[0]}
                </div>
                <h3 className="text-[#faf9f5] font-bold text-lg">{t.name}</h3>
                <p className="text-sm mb-4" style={{ color: t.accent }}>Score: {t.range}</p>
                <ul className="space-y-2">
                  {t.perks.map((p) => (
                    <li key={p} className="text-[#b0aea5] text-sm flex items-start gap-2">
                      <span style={{ color: t.accent }}>+</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#b0aea5]/10">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-[#faf9f5] mb-4">Ready to prove your reputation?</h2>
          <p className="text-[#b0aea5] mb-8">Connect your wallet and see your FairScore in seconds.</p>
          <Link href="/dashboard" className="inline-block bg-[#d97757] hover:bg-[#c4623f] text-[#141413] px-10 py-4 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(217,119,87,0.3)]">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
