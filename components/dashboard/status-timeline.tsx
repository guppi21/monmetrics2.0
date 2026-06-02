export default function StatusTimeline() {
  const events = [
    "Official RPC online",
    "dRPC latency spike resolved",
    "Ankr synced successfully",
    "Tenderly health check passed",
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h3 className="mb-5 text-xl font-bold">
        Status Timeline
      </h3>

      <div className="space-y-4">

        {events.map((event) => (
          <div
            key={event}
            className="rounded-xl bg-slate-950 p-4"
          >
            {event}
          </div>
        ))}

      </div>

    </div>
  );
}
