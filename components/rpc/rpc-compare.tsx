"use client";

import { useEffect, useState } from "react";

import { rpcs } from "@/data/rpcs";

import RpcHealthBadge from "./rpc-health-badge";

export default function RpcCompare() {
  const [results, setResults] =
    useState<any[]>([]);

  async function refresh() {
    const data = await Promise.all(
      rpcs.map(async (rpc) => {
        try {
          const res = await fetch(
            "/api/rpc?url=" +
              encodeURIComponent(rpc.url)
          );

          const metrics =
            await res.json();

          return {
            name: rpc.name,
            ...metrics,
          };
        } catch {
          return {
            name: rpc.name,
            status: "OFFLINE",
          };
        }
      })
    );

    data.sort(
      (a, b) =>
        (a.latency || 9999) -
        (b.latency || 9999)
    );

    setResults(data);
  }

  useEffect(() => {
    refresh();

    const interval =
      setInterval(refresh, 10000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
      <h3 className="mb-5 text-xl font-bold">
        RPC Rankings
      </h3>

      <div className="space-y-4">
        {results.map((rpc, index) => (
          <div
            key={rpc.name}
            className="flex items-center justify-between border-b border-slate-800 pb-3"
          >
            <div>
              <p className="font-semibold">
                #{index + 1} {rpc.name}
              </p>

              <RpcHealthBadge
                status={rpc.status}
              />
            </div>

            <div className="text-cyan-400">
              {rpc.latency}ms
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
