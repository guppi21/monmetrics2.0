"use client";

import { useEffect, useState } from "react";

export default function LiveStats() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/rpc")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return (
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="text-xs text-slate-400">STATUS</p>
        <h3 className="mt-3 text-3xl font-black">
          {data.status}
        </h3>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="text-xs text-slate-400">LATENCY</p>
        <h3 className="mt-3 text-3xl font-black">
          {data.latency}ms
        </h3>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="text-xs text-slate-400">BLOCK</p>
        <h3 className="mt-3 text-3xl font-black">
          {data.blockHeight}
        </h3>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="text-xs text-slate-400">CHAIN ID</p>
        <h3 className="mt-3 text-3xl font-black">
          {data.chainId}
        </h3>
      </div>
    </div>
  );
}
