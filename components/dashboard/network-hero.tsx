"use client";

import { useNetwork } from "@/context/network-context";

export default function NetworkHero() {
  const { network } = useNetwork();

  const accent =
    network === "mainnet"
      ? "text-violet-400"
      : "text-cyan-400";

  const glow =
    network === "mainnet"
      ? "bg-violet-500/10 border-violet-500/20"
      : "bg-cyan-500/10 border-cyan-500/20";

  return (
    <div className="rounded-[32px] border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl">

      <p
        className={`text-xs uppercase tracking-[0.3em] ${accent}`}
      >
        {network.toUpperCase()}
      </p>

      <h1 className="mt-4 text-5xl font-black leading-tight">
        Best RPC
        <br />
        Right Now
      </h1>

      <p className="mt-4 max-w-lg text-slate-400">
        Live rankings, latency monitoring,
        provider intelligence and network
        analytics across Monad.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div
          className={`rounded-2xl border p-5 ${glow}`}
        >
          <p className="text-xs text-slate-400">
            BEST PROVIDER
          </p>

          <h3 className="mt-2 text-xl font-bold">
            Alchemy
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="text-xs text-slate-400">
            LATENCY
          </p>

          <h3 className="mt-2 text-3xl font-black">
            111ms
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="text-xs text-slate-400">
            HEALTH
          </p>

          <h3 className="mt-2 text-3xl font-black">
            95
          </h3>
        </div>

      </div>
    </div>
  );
}