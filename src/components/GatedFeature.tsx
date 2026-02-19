"use client";
import { useGateCheck } from "@/hooks/useGateCheck";
import { ReactNode } from "react";

interface Props {
  feature: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function GatedFeature({ feature, children, fallback }: Props) {
  const { gate, loading } = useGateCheck(feature);

  if (loading) return <div className="animate-pulse bg-white/5 rounded-xl h-32" />;

  if (!gate?.hasAccess) {
    return fallback || (
      <div className="border border-white/10 rounded-xl p-6 text-center bg-white/5">
        <div className="text-3xl mb-2">🔒</div>
        <p className="text-white font-semibold">Requires {gate?.requiredTier || "higher"} tier</p>
        <p className="text-gray-400 text-sm mt-1">
          Your tier: {gate?.tier || "unknown"} — Increase your FairScore to unlock
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
