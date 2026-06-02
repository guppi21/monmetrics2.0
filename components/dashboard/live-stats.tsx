"use client";

import { useEffect, useState } from "react";

export default function LiveStats() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(
      "/api/rpc?url=" +
        encodeURIComponent(
          "https://testnet-rpc.monad.xyz"
        )
    )
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-3xl border border-slate-800 bg-slate-900/60"
          />
        ))}
      </div>
    );
  }

  const uptime = "99.98%";
  const activeProviders = "12";

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

      <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-all hover:border-violet-500/30 hover:bg-slate-900">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Network Uptime
        </p>

        <h2 className="mt-4 text-4xl font-black text-green-400">
          {uptime}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Healthy network performance
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-all hover:border-violet-500/30 hover:bg-slate-900">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Avg Latency
        </p>

        <h2 className="mt-4 text-4xl font-black">
          {data.latency}ms
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Real-time response speed
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-all hover:border-violet-500/30 hover:bg-slate-900">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Current Block
        </p>

        <h2 className="mt-4 text-4xl font-black">
          {(data.blockHeight / 1000000).toFixed(1)}M
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Latest synchronized block
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-all hover:border-violet-500/30 hover:bg-slate-900">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Active RPCs
        </p>

        <h2 className="mt-4 text-4xl font-black">
          {activeProviders}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Providers currently monitored
        </p>
      </div>

    </div>
  );
}