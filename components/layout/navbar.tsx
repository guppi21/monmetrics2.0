"use client";

import { useNetwork } from "@/context/network-context";

export default function Navbar() {
  const { network, setNetwork } = useNetwork();

  return (
    <div className="mb-6 flex items-center justify-end">

      <div className="flex items-center gap-3">

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          Live
        </div>

        <div className="flex rounded-2xl bg-white/[0.04] p-1 backdrop-blur-xl">

          <button
            onClick={() => setNetwork("mainnet")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold transition ${
              network === "mainnet"
                ? "bg-violet-500 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            MAINNET
          </button>

          <button
            onClick={() => setNetwork("testnet")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold transition ${
              network === "testnet"
                ? "bg-cyan-500 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            TESTNET
          </button>

        </div>

      </div>

    </div>
  );
}