"use client";

import { useEffect, useState } from "react";

export default function RpcMetrics() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/rpc")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data)
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        Loading...
      </div>
    );

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
      <h3 className="mb-4 text-xl font-bold">
        Live RPC Metrics
      </h3>

      <div className="space-y-3">
        <p>Status: {data.status}</p>

        <p>
          Latency: {data.latency} ms
        </p>

        <p>
          Block Height: {data.blockHeight}
        </p>

        <p>
          Chain ID: {data.chainId}
        </p>
      </div>
    </div>
  );
}
