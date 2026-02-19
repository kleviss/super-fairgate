import { NextRequest, NextResponse } from "next/server";
import { getFullScore } from "@/lib/fairscale";

export async function GET(req: NextRequest) {
  const wallet = req.nextUrl.searchParams.get("wallet");
  if (!wallet) return NextResponse.json({ error: "wallet required" }, { status: 400 });
  try {
    const score = await getFullScore(wallet);
    return NextResponse.json(score);
  } catch {
    return NextResponse.json({ error: "Failed to fetch score" }, { status: 502 });
  }
}
