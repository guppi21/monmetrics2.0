import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

import ActivityFeed from "@/components/dashboard/activity-feed";
import Incidents from "@/components/dashboard/incidents";
import LiveStats from "@/components/dashboard/live-stats";

import RpcMetrics from "@/components/rpc/rpc-metrics";
import RpcCompare from "@/components/rpc/rpc-compare";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <section className="flex-1 p-8">
        <Navbar />

        <div className="mb-10">
          <h1 className="text-5xl font-black">
            Infrastructure Overview
          </h1>

          <p className="mt-3 text-slate-400">
            RPC Analytics on Monad
          </p>
        </div>

        <div className="mb-8">
          <LiveStats />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <RpcMetrics />
          <RpcCompare />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ActivityFeed />
          <Incidents />
        </div>
      </section>
    </main>
  );
}
