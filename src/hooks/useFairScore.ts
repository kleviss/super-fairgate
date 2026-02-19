"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useEffect, useState } from "react";

interface ScoreData {
  wallet: string;
  fairscore: number;
  fairscore_base: number;
  social_score: number;
  tier: string;
  badges: { id: string; label: string; description: string; tier: string }[];
  features: Record<string, number>;
}

export function useFairScore() {
  const { publicKey } = useWallet();
  const [score, setScore] = useState<ScoreData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchScore = useCallback(async () => {
    if (!publicKey) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/score?wallet=${publicKey.toBase58()}`);
      if (!res.ok) throw new Error("Failed to fetch score");
      setScore(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [publicKey]);

  useEffect(() => { fetchScore(); }, [fetchScore]);

  return { score, loading, error, refetch: fetchScore };
}
