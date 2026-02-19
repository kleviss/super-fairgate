"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

interface GateResult {
  score: number;
  tier: string;
  requiredTier: string;
  hasAccess: boolean;
  feature: string;
}

export function useGateCheck(feature: string) {
  const { publicKey } = useWallet();
  const [gate, setGate] = useState<GateResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!publicKey) return;
    setLoading(true);
    fetch(`/api/gate?wallet=${publicKey.toBase58()}&feature=${feature}`)
      .then((r) => r.json())
      .then(setGate)
      .catch(() => setGate(null))
      .finally(() => setLoading(false));
  }, [publicKey, feature]);

  return { gate, loading };
}
