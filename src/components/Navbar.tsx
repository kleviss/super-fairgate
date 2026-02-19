"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((m) => m.WalletMultiButton),
  { ssr: false }
);

export function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-gray-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Fair<span className="text-purple-400">Gate</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-gray-300 hover:text-white text-sm">Dashboard</Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white text-sm">Leaderboard</Link>
          <Link href="/features" className="text-gray-300 hover:text-white text-sm">Features</Link>
          <Link href="/docs" className="text-gray-300 hover:text-white text-sm">Docs</Link>
          <WalletMultiButton style={{ height: "36px", fontSize: "14px" }} />
        </div>
      </div>
    </nav>
  );
}
