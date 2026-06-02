"use client";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

import { rpcs } from "@/data/rpcs";

export default function StatusPage() {
  return (
    <main className="flex min-h-screen bg-[#050311] text-white">

      <Sidebar />

      <section className="flex-1 px-6 py-6">

        <Navbar />

        {/* HEADER CARD */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

          <div className="border-b border-white/10 p-6">

            <h1 className="text-3xl font-black">
              Network Status
            </h1>

            <p className="mt-2 text-slate-400">
              Current health of monitored RPC providers
            </p>

          </div>

          {/* LIST */}
          <div className="divide-y divide-white/10">

            {rpcs.map((rpc) => (
              <div
                key={rpc.url}
                className="
                flex items-center justify-between

                px-6 py-5

                transition-all

                hover:bg-white/[0.04]
                "
              >

                {/* LEFT */}
                <div>
                  <p className="font-semibold text-white">
                    {rpc.name}
                  </p>

                  <p className="text-sm text-slate-400">
                    {rpc.provider}
                  </p>
                </div>

                {/* RIGHT STATUS */}
                <div className="flex items-center gap-3">

                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-cyan-300 font-medium">
                    Operational
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}