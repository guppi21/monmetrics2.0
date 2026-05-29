import StatusTimeline from "@/components/dashboard/status-timeline";

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">

      <h1 className="mb-8 text-5xl font-black">
        System Status
      </h1>

      <div className="mb-8 space-y-4">

        <div className="rounded-3xl border border-green-500 bg-slate-900 p-6">
          🟢 Official RPC Online
        </div>

        <div className="rounded-3xl border border-green-500 bg-slate-900 p-6">
          🟢 Ankr Online
        </div>

        <div className="rounded-3xl border border-green-500 bg-slate-900 p-6">
          🟢 dRPC Online
        </div>

      </div>

      <StatusTimeline />

    </main>
  );
}
