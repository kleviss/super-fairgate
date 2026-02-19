export default function Pitch() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Title */}
      <section className="text-center mb-20">
        <div className="text-sm text-[#d97757] tracking-wider uppercase mb-4">Pitch Deck</div>
        <h1 className="text-5xl font-bold text-[#faf9f5] mb-4">
          Fair<span className="text-[#d97757]">Gate</span>
        </h1>
        <p className="text-[#b0aea5] text-xl">Reputation-Gated Access Infrastructure on Solana</p>
      </section>

      {/* Problem */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-4">The Problem</h2>
        <div className="border border-[#b0aea5]/10 rounded-xl p-6 space-y-3">
          <p className="text-[#b0aea5]">Web3 platforms face three critical challenges:</p>
          <ul className="space-y-2 text-[#b0aea5]">
            <li className="flex gap-3"><span className="text-[#d97757]">1.</span> Sybil attacks flood launches, airdrops, and governance votes</li>
            <li className="flex gap-3"><span className="text-[#d97757]">2.</span> Token-gating is binary — it doesn&apos;t reflect actual user quality</li>
            <li className="flex gap-3"><span className="text-[#d97757]">3.</span> No standard way to reward genuine, long-term participants</li>
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-4">The Solution</h2>
        <p className="text-[#b0aea5] mb-4">
          FairGate replaces binary token-gating with graduated reputation-based access using FairScale&apos;s scoring infrastructure.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {title: "Score-Based Tiers", desc: "Bronze → Silver → Gold → Platinum based on FairScore", color: "#d97757"},
            {title: "Feature Gating", desc: "Each feature requires a minimum tier to access", color: "#6a9bcc"},
            {title: "Dynamic Access", desc: "Scores update in real-time as on-chain activity changes", color: "#788c5d"},
          ].map((s) => (
            <div key={s.title} className="border border-[#b0aea5]/10 rounded-xl p-5">
              <div className="w-2 h-2 rounded-full mb-3" style={{background: s.color}} />
              <h3 className="text-[#faf9f5] font-semibold mb-1">{s.title}</h3>
              <p className="text-[#b0aea5] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FairScore Integration */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-4">FairScore Integration (Core)</h2>
        <p className="text-[#b0aea5] mb-4">FairScore is not decorative — it is the single source of truth for all authorization.</p>
        <table className="w-full text-sm">
          <thead><tr className="text-[#b0aea5] border-b border-[#b0aea5]/10">
            <th className="text-left py-3">Endpoint</th><th className="text-left py-3">Usage</th><th className="text-left py-3">Where</th>
          </tr></thead>
          <tbody className="text-[#b0aea5]">
            <tr className="border-b border-[#b0aea5]/5"><td className="py-3 font-mono text-[#d97757]">GET /score</td><td>Full score + badges + metrics</td><td>Dashboard, Leaderboard</td></tr>
            <tr className="border-b border-[#b0aea5]/5"><td className="py-3 font-mono text-[#d97757]">GET /fairScore</td><td>Quick score for gate checks</td><td>Feature Gating API</td></tr>
            <tr><td className="py-3 font-mono text-[#d97757]">GET /walletScore</td><td>On-chain only score</td><td>Pure wallet analysis</td></tr>
          </tbody>
        </table>
      </section>

      {/* Tier System */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-4">Tier System</h2>
        <div className="grid grid-cols-4 gap-3">
          {[
            {tier: "Bronze", range: "0–199", features: "Profile, Leaderboard", color: "#d97757"},
            {tier: "Silver", range: "200–399", features: "Early Access, Community", color: "#b0aea5"},
            {tier: "Gold", range: "400–599", features: "Governance, Analytics", color: "#d4a843"},
            {tier: "Platinum", range: "600+", features: "VIP Allocations, All", color: "#6a9bcc"},
          ].map((t) => (
            <div key={t.tier} className="rounded-xl p-4 text-center" style={{background: `${t.color}10`, border: `1px solid ${t.color}25`}}>
              <div className="font-bold text-lg" style={{color: t.color}}>{t.tier}</div>
              <div className="text-[#b0aea5] text-xs mt-1">{t.range}</div>
              <div className="text-[#b0aea5] text-xs mt-2">{t.features}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Model */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-4">Business Model</h2>
        <div className="space-y-3">
          {[
            {stream: "SaaS Widget", desc: "Projects embed FairGate's gating component — $49-299/mo per project"},
            {stream: "Premium Tier", desc: "Advanced analytics and priority features for Gold/Platinum users"},
            {stream: "Launch Partnerships", desc: "Revenue share on reputation-gated token launches and allocations"},
          ].map((r) => (
            <div key={r.stream} className="border border-[#b0aea5]/10 rounded-lg p-4 flex gap-4">
              <span className="text-[#d97757] font-semibold whitespace-nowrap">{r.stream}</span>
              <span className="text-[#b0aea5]">{r.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Go to Market */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-4">Go-to-Market</h2>
        <div className="space-y-2 text-[#b0aea5]">
          <p><span className="text-[#d97757] font-semibold">First 100:</span> Solana Discord communities, Crypto Twitter engagement, builder communities</p>
          <p><span className="text-[#6a9bcc] font-semibold">First 1,000:</span> Integrate with 2-3 launchpads as their reputation gating provider</p>
          <p><span className="text-[#788c5d] font-semibold">First 10,000:</span> Self-serve dashboard for any project to add reputation gates</p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Solana Wallet Adapter", "FairScale API", "Vercel"].map((t) => (
            <span key={t} className="px-4 py-2 bg-[#faf9f5]/5 border border-[#b0aea5]/10 rounded-lg text-[#b0aea5] text-sm">{t}</span>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-4">Team</h2>
        <div className="border border-[#b0aea5]/10 rounded-xl p-6">
          <div className="text-[#faf9f5] font-semibold text-lg">Klevis Xhyra</div>
          <div className="text-[#d97757] text-sm">Solo Developer &amp; Founder</div>
          <div className="text-[#b0aea5] text-sm mt-2">Full-stack developer building at the intersection of Web3 and reputation systems.</div>
          <div className="text-[#b0aea5] text-sm mt-1">GitHub: @kleviss</div>
        </div>
      </section>

      {/* Links */}
      <section className="text-center border-t border-[#b0aea5]/10 pt-12">
        <h2 className="text-2xl font-bold text-[#faf9f5] mb-6">Links</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            {label: "Live App", href: "https://super-fairgate.vercel.app"},
            {label: "GitHub", href: "https://github.com/kleviss/super-fairgate"},
            {label: "FairScale Docs", href: "https://docs.fairscale.xyz"},
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="px-6 py-3 border border-[#b0aea5]/20 rounded-xl text-[#b0aea5] hover:text-[#faf9f5] hover:border-[#d97757]/40 transition">{l.label}</a>
          ))}
        </div>
      </section>
    </div>
  );
}
