"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import Sidebar from "@/components/layout/sidebar";
import Hero from "@/components/dashboard/hero";
import NetworkOverview from "@/components/dashboard/network-overview";
import RpcCompare from "@/components/rpc/rpc-compare";
import RpcMetrics from "@/components/rpc/rpc-metrics";
import NetworkLatencyChart from "@/components/charts/network-latency-chart";
import Avatar from "@/components/ui/avatar";

import { useNetwork } from "@/context/network-context";
import { checkRpcAlerts } from "@/lib/alert-engine";

const RPCWorldMap = dynamic(
  () => import("@/components/ui/rpc-world-map"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full rounded-2xl bg-white/5 animate-pulse" />
    ),
  }
);

export default function Home() {
  const { network } = useNetwork();

  useEffect(() => {
    checkRpcAlerts();

    const interval = setInterval(
      checkRpcAlerts,
      15000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-[#050311]" />

      {/* Glow Effects */}
      <div className="fixed left-1/2 top-[-400px] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[300px]" />

      <div className="fixed bottom-0 right-0 h-[900px] w-[900px] bg-cyan-500/10 blur-[250px]" />

      <Sidebar />

      <div className="relative z-10">
        <Hero />

        <div className="h-[8vh]" />

        <section className="mx-auto max-w-[1800px] px-6 lg:px-16 pb-12 space-y-8">
          {/* Network Overview */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <NetworkOverview />
          </motion.div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Rankings */}
            <motion.div
              className="h-[620px]"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="h-full overflow-hidden">
                <RpcCompare />
              </div>
            </motion.div>

            {/* Metrics + Map */}
            <motion.div
              className="h-[620px] flex flex-col gap-6"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              {/* Metrics */}
              <div
                className="
                flex-1
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                overflow-hidden
                "
              >
                <div className="h-full overflow-y-auto">
                  <RpcMetrics />
                </div>
              </div>

              {/* Map */}
              <div
                className="
                flex-1
                relative
                rounded-[28px]
                overflow-hidden
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                "
              >
                {/* Title */}
                <div className="absolute top-4 left-5 z-20">
                  <p className="text-[10px] tracking-[0.3em] text-cyan-300">
                    GLOBAL RPC NETWORK MAP
                  </p>
                </div>

                {/* Glow */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)]
                  "
                />

                {/* Grid */}
                <div
                  className="
                  absolute
                  inset-0
                  opacity-20
                  bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
                  bg-[size:50px_50px]
                  "
                />

                {/* Map */}
                <div className="absolute inset-0 pt-8">
                  <RPCWorldMap />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Network Chart */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div
              className="
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-6
              "
            >
              <NetworkLatencyChart />
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer
          className="
          border-t
          border-white/10
          px-6
          lg:px-16
          py-8
          mt-8
          "
        >
          <div
            className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
            "
          >
            <div className="flex items-center gap-4">
              <Avatar />

              <div>
                <div className="font-semibold text-white">
                  Made by Guppi
                </div>

                <div className="text-xs text-slate-500">
                  MonMetrics RPC Intelligence
                </div>
              </div>
            </div>

            <div className="flex gap-5 text-sm text-slate-400">
              <a href="https://x.com/GUPPI_ETH">X</a>
              <a href="https://discord.gg/vtKvFzQk">Discord</a>
              <a href="https://t.me/MonMetric_bot">Telegram</a>
              <a href="https://github.com/guppi21">GitHub</a>
            </div>

            <div className="flex gap-3 text-xs text-slate-500">
              <a href="/privacy">Privacy Policy</a>
              <span>•</span>
              <a href="/terms">Terms</a>
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] text-slate-600">
            © MonMetrics 2026. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}