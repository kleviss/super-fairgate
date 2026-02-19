export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Documentation</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
        <p className="text-gray-400 leading-relaxed">
          FairGate is a reputation-gated platform built on Solana that uses FairScale&apos;s reputation
          infrastructure to determine user access tiers, feature gating, and allocation weights.
          Your FairScore — derived from on-chain activity and social signals — is the key to unlocking
          platform capabilities.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Architecture</h2>
        <div className="bg-white/5 rounded-xl p-4 text-sm text-gray-300 font-mono space-y-1">
          <p>Browser (Wallet) → Next.js Frontend → API Routes → FairScale API</p>
          <p className="text-gray-500 mt-2">Stack: Next.js 16, React 19, Solana Wallet Adapter, Tailwind v4</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">FairScore Integration</h2>
        <p className="text-gray-400 mb-3">FairGate uses all three FairScale API endpoints:</p>
        <div className="space-y-3">
          {[
            { endpoint: "GET /score", desc: "Full score with tier, badges, and on-chain feature breakdown. Used on the Dashboard." },
            { endpoint: "GET /fairScore", desc: "Quick numeric score. Used for gate checks to determine feature access." },
            { endpoint: "GET /walletScore", desc: "Wallet-only score excluding social. Available for pure on-chain analysis." },
          ].map((e) => (
            <div key={e.endpoint} className="bg-white/5 rounded-lg p-3">
              <code className="text-purple-400 text-sm">{e.endpoint}</code>
              <p className="text-gray-400 text-sm mt-1">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Tier System</h2>
        <table className="w-full text-sm">
          <thead><tr className="text-gray-400 border-b border-white/10">
            <th className="text-left py-2">Tier</th><th className="text-left py-2">Score Range</th><th className="text-left py-2">Access</th>
          </tr></thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-white/5"><td className="py-2">Bronze</td><td>0–199</td><td>Basic profile, public leaderboard</td></tr>
            <tr className="border-b border-white/5"><td className="py-2">Silver</td><td>200–399</td><td>Early access features, community channels</td></tr>
            <tr className="border-b border-white/5"><td className="py-2">Gold</td><td>400–599</td><td>Governance voting, premium analytics</td></tr>
            <tr><td className="py-2">Platinum</td><td>600+</td><td>VIP allocations, priority support, all features</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Gate API</h2>
        <p className="text-gray-400 mb-2">Internal API route for checking feature access:</p>
        <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-gray-300">
          <p>GET /api/gate?wallet=ADDRESS&amp;feature=FEATURE_ID</p>
          <p className="text-gray-500 mt-2">Features: early-access, premium-features, governance, vip-allocation</p>
          <p className="text-gray-500">Returns: {`{ score, tier, requiredTier, hasAccess, feature }`}</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Setup</h2>
        <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-gray-300 space-y-1">
          <p>1. Clone the repo</p>
          <p>2. cp .env.example .env.local</p>
          <p>3. Add your FAIRSCALE_API_KEY</p>
          <p>4. npm install &amp;&amp; npm run dev</p>
        </div>
      </section>
    </div>
  );
}
