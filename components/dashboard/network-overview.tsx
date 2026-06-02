"use client";

import { useEffect, useState } from "react";

import { rpcs } from "@/data/rpcs";
import { useNetwork } from "@/context/network-context";

interface OverviewStats {
  providers: number;
  online: number;
  avgLatency: number;
  bestProvider: string;
  bestLatency: number;
}

interface RpcResponse {
  provider: string;
  status: "ONLINE" | "OFFLINE";
  latency: number;
}

export default function NetworkOverview() {
  const { network } = useNetwork();

  const [stats, setStats] =
    useState<OverviewStats | null>(
      null
    );

  useEffect(() => {
    async function load() {
      const providers = rpcs.filter(
        (rpc) =>
          rpc.network === network
      );

      const results: RpcResponse[] =
        await Promise.all(
          providers.map(
            async (rpc) => {
              try {
                const res =
                  await fetch(
                    "/api/rpc?url=" +
                      encodeURIComponent(
                        rpc.url
                      )
                  );

                const data =
                  await res.json();

                return {
                  provider:
                    rpc.provider,
                  status:
                    data.status,
                  latency:
                    data.latency,
                };
              } catch {
                return {
                  provider:
                    rpc.provider,
                  status:
                    "OFFLINE",
                  latency: 9999,
                };
              }
            }
          )
        );

      const online =
        results.filter(
          (r) =>
            r.status === "ONLINE"
        );

      const avgLatency =
        online.length > 0
          ? Math.round(
              online.reduce(
                (sum, rpc) =>
                  sum +
                  rpc.latency,
                0
              ) / online.length
            )
          : 0;

      const best =
        [...online].sort(
          (a, b) =>
            a.latency -
            b.latency
        )[0];

      setStats({
        providers:
          providers.length,

        online:
          online.length,

        avgLatency,

        bestProvider:
          best?.provider ||
          "N/A",

        bestLatency:
          best?.latency || 0,
      });
    }

    load();

    const interval =
      setInterval(
        load,
        10000
      );

    return () =>
      clearInterval(
        interval
      );
  }, [network]);

  if (!stats) return null;

  const cards = [
    {
      label: "Providers",
      value: stats.providers,
    },
    {
      label: "Online",
      value: stats.online,
    },
    {
      label: "Avg Latency",
      value: `${stats.avgLatency}ms`,
    },
    {
      label: "Fastest RPC",
      value:
        stats.bestProvider,
      sub:
        stats.bestLatency > 0
          ? `${stats.bestLatency}ms`
          : "",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-xl
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400/25
          hover:bg-white/[0.07]
          "
        >
          <div
            className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            "
          />

          <div
            className="
            absolute
            left-0
            top-0
            h-24
            w-full
            bg-gradient-to-b
            from-white/[0.04]
            to-transparent
            "
          />

          <div className="relative z-10">
            <div
              className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-slate-500
              "
            >
              {card.label}
            </div>

            <div
              className="
              mt-4
              text-5xl
              font-black
              text-white
              "
            >
              {card.value}
            </div>

            {"sub" in card &&
              card.sub && (
                <div
                  className="
                  mt-2
                  text-sm
                  text-cyan-400
                  "
                >
                  {card.sub}
                </div>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}