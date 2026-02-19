"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((m) => m.WalletMultiButton),
  { ssr: false }
);

export function Navbar() {
  return (
    <nav className="border-b border-[#b0aea5]/10 bg-[#141413]/90 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#faf9f5] tracking-tight">
          Fair<span className="text-[#d97757]">Gate</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="text-[#b0aea5] hover:text-[#faf9f5] text-sm transition">Dashboard</Link>
          <Link href="/leaderboard" className="text-[#b0aea5] hover:text-[#faf9f5] text-sm transition">Leaderboard</Link>
          <Link href="/features" className="text-[#b0aea5] hover:text-[#faf9f5] text-sm transition">Features</Link>
          <Link href="/docs" className="text-[#b0aea5] hover:text-[#faf9f5] text-sm transition">Docs</Link>
          <WalletMultiButton style={{ height: "36px", fontSize: "14px" }} />
        </div>
      </div>
    </nav>
  );
}
