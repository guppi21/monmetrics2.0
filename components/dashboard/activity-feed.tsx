export default function ActivityFeed() {
  const logs = [
    "Official RPC responded in 82ms",
    "Ankr RPC synced successfully",
    "dRPC block updated",
    "Tenderly health check passed",
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

      <h3 className="mb-5 text-xl font-bold">
        Activity Feed
      </h3>

      <div className="space-y-3">

        {logs.map((log) => (
          <div
            key={log}
            className="rounded-xl bg-slate-950 p-3 text-sm text-green-400"
          >
            {log}
          </div>
        ))}

      </div>

    </div>
  );
}
