import Sidebar from "@/components/layout/sidebar";

import Hero from "@/components/dashboard/hero";
import NetworkOverview from "@/components/dashboard/network-overview";

import RpcCompare from "@/components/rpc/rpc-compare";
import RpcMetrics from "@/components/rpc/rpc-metrics";

import NetworkLatencyChart from "@/components/charts/network-latency-chart";

export default function Home() {
  return (
    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#0B1020]
      text-white
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
          absolute
          left-[-250px]
          top-[-150px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-500/20
          blur-[220px]
          "
        />

        <div
          className="
          absolute
          right-[-200px]
          top-[100px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-500/15
          blur-[220px]
          "
        />

        <div
          className="
          absolute
          bottom-[-250px]
          left-[35%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-fuchsia-500/10
          blur-[220px]
          "
        />

      </div>

      <Sidebar />

      <div
        className="
        relative
        z-10
        mx-auto
        max-w-[1800px]
        px-8
        pt-20
        pb-10
        "
      >
        <Hero />

        <div className="mt-6">
          <NetworkOverview />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">

          <RpcCompare />

          <RpcMetrics />

        </div>

        <div className="mt-6">

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(131,110,249,0.08)]
            p-5
            "
          >
            <NetworkLatencyChart />
          </div>

        </div>

      </div>

    </main>
  );
}