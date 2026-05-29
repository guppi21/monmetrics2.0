"use client";

import { useEffect, useState } from "react";
import { rpcs } from "@/data/rpcs";

export default function RpcMetrics() {
  const [selected, setSelected] = useState(
    rpcs[0].url
  );

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(
      "/api/rpc?url=" +
        encodeURIComponent(selected)
    )
      .then((res) => res.json())
      .then(setData);
  }, [selected]);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
      <h3 className="mb-5 text-xl font-bold">
        RPC Analytics
      </h3>

      <select
        value={selected}
        onChange={(e) =>
          setSelected(e.target.value)
        }
        className="mb-5 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
      >
        {rpcs.map((rpc) => (
          <option
            key={rpc.url}
            value={rpc.url}
          >
            {rpc.name}
          </option>
        ))}
      </select>

      {!data ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
}
