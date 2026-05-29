export default function Incidents() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

      <h3 className="mb-5 text-xl font-bold">
        Recent Incidents
      </h3>

      <div className="space-y-4">

        <div className="rounded-xl bg-slate-950 p-4">
          <p className="font-semibold">
            dRPC Latency Spike
          </p>

          <p className="text-sm text-slate-400">
            Resolved 2 hours ago
          </p>
        </div>

        <div className="rounded-xl bg-slate-950 p-4">
          <p className="font-semibold">
            Official RPC Restart
          </p>

          <p className="text-sm text-slate-400">
            Resolved yesterday
          </p>
        </div>

      </div>

    </div>
  );
}
