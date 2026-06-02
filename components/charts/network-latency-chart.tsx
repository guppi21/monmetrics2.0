"use client";

import { useEffect, useState } from "react";

import { rpcs } from "@/data/rpcs";
import { useNetwork } from "@/context/network-context";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function NetworkLatencyChart() {
  const { network } = useNetwork();

  const [history, setHistory] =
    useState<any[]>([]);

  useEffect(() => {
    async function collect() {
      const providers = rpcs.filter(
        (rpc) =>
          rpc.network === network
      );

      const results =
        await Promise.all(
          providers.map(async (rpc) => {
            try {
              const res = await fetch(
                "/api/rpc?url=" +
                  encodeURIComponent(
                    rpc.url
                  )
              );

              return await res.json();
            } catch {
              return {
                latency: 0,
              };
            }
          })
        );

      const online =
        results.filter(
          (r) => r.latency > 0
        );

      const avgLatency =
        online.length > 0
          ? Math.round(
              online.reduce(
                (sum, r) =>
                  sum + r.latency,
                0
              ) / online.length
            )
          : 0;

      const now =
        new Date().toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        );

      setHistory((prev) => {
        const updated = [
          ...prev,
          {
            time: now,
            latency:
              avgLatency,
          },
        ];

        return updated.slice(-12);
      });
    }

    collect();

    const interval =
      setInterval(
        collect,
        30000
      );

    return () =>
      clearInterval(interval);
  }, [network]);

  const color =
    network === "mainnet"
      ? "#836EF9"
      : "#22D3EE";

  const avg =
    history.length > 0
      ? Math.round(
          history.reduce(
            (sum, item) =>
              sum +
              item.latency,
            0
          ) / history.length
        )
      : 0;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-4">

      <div className="mb-4 flex items-center justify-between">

        <div>

          <h2 className="text-lg font-bold">
            Network Latency
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Live average latency
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Average
          </p>

          <p className="text-lg font-bold">
            {avg}ms
          </p>

        </div>

      </div>

      <div className="h-[200px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={history}>

            <defs>

              <linearGradient
                id="latencyGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={color}
                  stopOpacity={0.4}
                />

                <stop
                  offset="100%"
                  stopColor={color}
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1e293b"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              stroke="#64748b"
            />

            <YAxis
              stroke="#64748b"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="latency"
              stroke={color}
              strokeWidth={2}
              fill="url(#latencyGradient)"
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}