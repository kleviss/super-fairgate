import { NextRequest, NextResponse } from "next/server";
import { getFairScore, getTierFromScore, TIERS } from "@/lib/fairscale";

const GATES: Record<string, keyof typeof TIERS> = {
  "early-access": "silver",
  "premium-features": "gold",
  "governance": "gold",
  "vip-allocation": "platinum",
};

export async function GET(req: NextRequest) {
  const wallet = req.nextUrl.searchParams.get("wallet");
  const feature = req.nextUrl.searchParams.get("feature");
  if (!wallet || !feature) return NextResponse.json({ error: "wallet and feature required" }, { status: 400 });

  const requiredTier = GATES[feature];
  if (!requiredTier) return NextResponse.json({ error: "unknown feature" }, { status: 404 });

  try {
    const score = await getFairScore(wallet);
    const userTier = getTierFromScore(score);
    const tierOrder = ["bronze", "silver", "gold", "platinum"];
    const hasAccess = tierOrder.indexOf(userTier) >= tierOrder.indexOf(requiredTier);
    return NextResponse.json({ score, tier: userTier, requiredTier, hasAccess, feature });
  } catch {
    return NextResponse.json({ error: "Failed to check gate" }, { status: 502 });
  }
}
