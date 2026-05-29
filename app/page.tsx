import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

import StatsCard from "@/components/dashboard/stats-card";
import ActivityFeed from "@/components/dashboard/activity-feed";
import Incidents from "@/components/dashboard/incidents";

import RpcStatus from "@/components/rpc/rpc-status";
import NetworkHealth from "@/components/dashboard/network-health";

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

        <div className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Providers"
            value="12"
          />

          <StatsCard
            title="Online"
            value="11"
          />

          <StatsCard
            title="Avg Latency"
            value="82ms"
          />

          <StatsCard
            title="Incidents"
            value="1"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <RpcStatus />

          <ActivityFeed />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Incidents />

          <NetworkHealth />
        </div>
      </section>
    </main>
  );
}
