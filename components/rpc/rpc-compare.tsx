"use client";

import { useEffect, useState } from "react";

import { rpcs } from "@/data/rpcs";
import { useNetwork } from "@/context/network-context";

export default function RpcCompare() {
  const { network } = useNetwork();

  const [results, setResults] = useState<any[]>([]);

  async function refresh() {
    const filtered = rpcs.filter(
      (rpc) => rpc.network === network
    );

    const data = await Promise.all(
      filtered.map(async (rpc) => {
        try {
          const res = await fetch(
            "/api/rpc?url=" +
              encodeURIComponent(rpc.url)
          );

          return {
            ...rpc,
            ...(await res.json()),
          };
        } catch {
          return {
            ...rpc,
            status: "OFFLINE",
            latency: 9999,
          };
        }
      })
    );

    data.sort(
      (a, b) => a.latency - b.latency
    );

    setResults(data);
  }

  useEffect(() => {
    refresh();

    const interval = setInterval(
      refresh,
      10000
    );

    return () =>
      clearInterval(interval);
  }, [network]);

  return (
    <div
      className="
      h-full
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl

      p-4
      md:p-6

      flex
      flex-col
      "
    >
      <div className="mb-6 shrink-0">
        <h2
          className="
          text-2xl
          md:text-3xl
          font-black
          "
        >
          Provider Rankings
        </h2>

        <p
          className="
          mt-2
          text-sm
          md:text-base
          text-slate-400
          "
        >
          Live RPC performance leaderboard
        </p>
      </div>

      <div
        className="
        flex-1
        overflow-y-auto
        pr-1
        md:pr-2
        space-y-4
        "
      >
        {results.map((rpc, index) => (
          <a
            key={rpc.url}
            href={rpc.website}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            flex-col
            sm:flex-row

            gap-4

            sm:items-center
            sm:justify-between

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            p-4

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:bg-white/[0.06]
            "
          >
            {/* LEFT */}
            <div
              className="
              flex
              items-center
              gap-3
              min-w-0
              "
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${rpc.website}&sz=128`}
                alt={rpc.provider}
                className="
                h-10
                w-10

                md:h-12
                md:w-12

                rounded-xl
                shrink-0
                "
              />

              <div className="min-w-0">
                <div
                  className="
                  text-base
                  md:text-lg

                  font-bold
                  text-white

                  truncate
                  "
                >
                  {rpc.provider}
                </div>

                <div
                  className="
                  text-xs
                  md:text-sm

                  text-slate-400

                  truncate
                  "
                >
                  {rpc.name}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
              flex
              items-center

              justify-between
              sm:justify-end

              gap-3
              md:gap-6

              w-full
              sm:w-auto
              "
            >
              <div className="text-right">
                <div
                  className="
                  text-xl
                  md:text-2xl

                  font-black
                  "
                >
                  {rpc.latency}ms
                </div>

                <div
                  className="
                  text-xs
                  text-slate-500
                  "
                >
                  latency
                </div>
              </div>

              <div
                className={`
                rounded-full
                px-3
                py-1

                text-xs
                font-semibold

                ${
                  rpc.status ===
                  "ONLINE"
                    ? "bg-green-500/15 text-green-400"
                    : "bg-red-500/15 text-red-400"
                }
                `}
              >
                {rpc.status}
              </div>

              <div
                className="
                w-8

                text-center
                text-sm
                font-bold

                text-cyan-300
                "
              >
                #{index + 1}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
