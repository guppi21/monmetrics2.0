"use client";

import { useEffect, useState } from "react";

import { rpcs } from "@/data/rpcs";
import { useNetwork } from "@/context/network-context";

export interface RpcLiveData {
  name: string;
  provider: string;
  network: string;
  url: string;
  website: string;

  region: string;
  lat: number;
  lng: number;

  status: string;
  latency: number;
  blockHeight: number;
  chainId: number;
}

export default function useRpcData() {
  const { network } = useNetwork();

  const [results, setResults] =
    useState<RpcLiveData[]>([]);

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

          const metrics =
            await res.json();

          return {
            ...rpc,
            status: metrics.status,
            latency:
              metrics.latency,
            blockHeight:
              metrics.blockHeight,
            chainId:
              metrics.chainId,
          };
        } catch {
          return {
            ...rpc,
            status: "OFFLINE",
            latency: 9999,
            blockHeight: 0,
            chainId: 0,
          };
        }
      })
    );

    setResults(data);
  }

  useEffect(() => {
    refresh();

    const interval =
      setInterval(
        refresh,
        10000
      );

    return () =>
      clearInterval(interval);
  }, [network]);

  return results;
}