# FairGate — Reputation-Gated Access on Solana

FairGate is a production-ready platform that uses [FairScale](https://fairscale.xyz/) reputation infrastructure to gate access to features, allocations, and community tiers based on on-chain reputation scores.

## Live Demo

**Platform URL:** *(deploy to Vercel and add URL here)*

## Problem

Web3 platforms struggle to distinguish genuine users from bots and sybils. Token-gating is binary and doesn't reflect actual user quality. FairGate solves this by using FairScale's multi-dimensional reputation scoring to create a graduated access system.

## How FairScore Is Used (Core Integration)

FairScore is **central to every feature** in FairGate:

| Feature | FairScore Role | Endpoint Used |
|---------|---------------|---------------|
| Dashboard | Displays full score breakdown with badges and on-chain metrics | `GET /score` |
| Feature Gating | Gates access to features based on tier thresholds | `GET /fairScore` |
| Leaderboard | Compares wallet scores across users | `GET /score` |
| Tier System | Bronze/Silver/Gold/Platinum determines all access levels | Derived from score |

### Tier Thresholds

| Tier | Score | Access |
|------|-------|--------|
| Bronze | 0–199 | Basic profile, public leaderboard |
| Silver | 200–399 | Early access features, community channels |
| Gold | 400–599 | Governance voting, premium analytics |
| Platinum | 600+ | VIP allocations, priority support, all features |

## Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS v4
- **Auth:** Solana Wallet Adapter (Phantom, Solflare)
- **Reputation:** FairScale API (all 3 endpoints)
- **Deployment:** Vercel

## Setup

```bash
git clone <repo-url>
cd fairgate
cp .env.example .env.local
# Add your FAIRSCALE_API_KEY from https://sales.fairscale.xyz/
npm install
npm run dev
```

Open http://localhost:3000

## Environment Variables

| Variable | Description |
|----------|-------------|
| `FAIRSCALE_API_KEY` | API key from FairScale (required, server-side only) |
| `NEXT_PUBLIC_SOLANA_RPC` | Solana RPC endpoint (defaults to mainnet) |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── score/route.ts    # Proxies FairScale /score endpoint
│   │   └── gate/route.ts     # Reputation gate check endpoint
│   ├── dashboard/page.tsx     # User score dashboard
│   ├── features/page.tsx      # Gated features showcase
│   ├── leaderboard/page.tsx   # Wallet score comparison
│   ├── docs/page.tsx          # Integration documentation
│   ├── layout.tsx             # Root layout with wallet provider
│   └── page.tsx               # Landing page
├── components/
│   ├── WalletProvider.tsx     # Solana wallet context
│   ├── Navbar.tsx             # Navigation with wallet button
│   ├── ScoreCard.tsx          # FairScore display card
│   ├── GatedFeature.tsx       # Reputation-gated wrapper component
│   └── FeatureMetrics.tsx     # On-chain metrics grid
├── hooks/
│   ├── useFairScore.ts        # Hook for fetching full score
│   └── useGateCheck.ts        # Hook for checking feature access
└── lib/
    └── fairscale.ts           # FairScale API client
```

## Business Model

**Target Audience:** Solana projects needing sybil-resistant access control for launches, DAOs, and communities.

**Revenue Paths:**
1. **SaaS Tier** — Projects pay to embed FairGate's gating widget
2. **Premium Features** — Advanced analytics for Gold/Platinum users
3. **Launch Partnerships** — Revenue share on reputation-gated token launches

**Go-to-Market:**
- First 100 users: Solana Discord communities, CT engagement
- First 1,000: Integrations with 2-3 launchpads as gating provider
- First 10,000: Self-serve dashboard for any project to add reputation gates

## Team

*(Add team member names, roles, contact info, and previous experience here)*

## Links

- **FairScale API:** https://sales.fairscale.xyz/
- **API Docs:** https://docs.fairscale.xyz/
- **FairScale Twitter:** https://x.com/fairscalexyz
- **FairScale Telegram:** https://t.me/+WQlko_c5blJhN2E0

## License

MIT
