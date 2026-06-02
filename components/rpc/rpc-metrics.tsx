"use client";

import { useEffect, useState } from "react";

import { rpcs } from "@/data/rpcs";
import { useNetwork } from "@/context/network-context";

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/[0.02]
      p-4
      "
    >
      <div
        className="
        text-xs
        uppercase
        tracking-[0.15em]
        text-slate-500
        "
      >
        {label}
      </div>

      <div
        className="
        mt-3
        text-2xl
        font-black
        text-white
        "
      >
        {value}
      </div>
    </div>
  );
}

export default function RpcMetrics() {
  const { network } = useNetwork();

  const filteredRpcs =
    rpcs.filter(
      (rpc) =>
        rpc.network === network
    );

  const [selected, setSelected] =
    useState(
      filteredRpcs[0]?.url || ""
    );

  const [data, setData] =
    useState<any>(null);

  useEffect(() => {
    if (
      filteredRpcs.length > 0
    ) {
      setSelected(
        filteredRpcs[0].url
      );
    }
  }, [network]);

  useEffect(() => {
    if (!selected) return;

    fetch(
      "/api/rpc?url=" +
        encodeURIComponent(
          selected
        )
    )
      .then((res) =>
        res.json()
      )
      .then(setData);
  }, [selected]);

  const provider =
    filteredRpcs.find(
      (rpc) =>
        rpc.url === selected
    );

  if (!data) return null;

  return (
    <div
      className="
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.02]
      backdrop-blur-md
      p-6
      "
    >
      <div className="mb-6">

        <div className="flex items-center gap-4">

          <img
            src={`https://www.google.com/s2/favicons?domain=${provider?.website}&sz=128`}
            alt={provider?.provider}
            className="
            h-12
            w-12
            rounded-xl
            "
          />

          <div>

            <h2
              className="
              text-3xl
              font-black
              "
            >
              {provider?.provider}
            </h2>

            <p
              className="
              text-sm
              text-slate-500
              "
            >
              Live Provider Profile
            </p>

          </div>

        </div>

      </div>

      <select
        value={selected}
        onChange={(e) =>
          setSelected(
            e.target.value
          )
        }
        className="
        mb-6
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        px-4
        py-3
        text-white
        "
      >
        {filteredRpcs.map(
          (rpc) => (
            <option
              key={rpc.url}
              value={rpc.url}
            >
              {rpc.name}
            </option>
          )
        )}
      </select>

      <div className="grid grid-cols-2 gap-4">

        <MetricCard
          label="Status"
          value={data.status}
        />

        <MetricCard
          label="Latency"
          value={`${data.latency}ms`}
        />

        <MetricCard
          label="Block Height"
          value={Number(
            data.blockHeight
          ).toLocaleString()}
        />

        <MetricCard
          label="Chain ID"
          value={data.chainId}
        />

      </div>

      <a
        href={provider?.website}
        target="_blank"
        rel="noopener noreferrer"
        className="
        mt-5
        inline-flex
        rounded-xl
        border
        border-white/10
        px-4
        py-3
        text-sm
        text-slate-300
        transition
        hover:border-cyan-400/30
        hover:text-white
        "
      >
        Open Provider →
      </a>

    </div>
  );
}