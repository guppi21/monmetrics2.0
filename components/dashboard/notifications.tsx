export default function Notifications() {
  const alerts = [
    "Official RPC Online",
    "Ankr latency increased",
    "dRPC recovered",
    "Tenderly health check passed",
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h3 className="mb-5 text-xl font-bold">
        Notifications
      </h3>

      <div className="space-y-3">

        {alerts.map((alert) => (
          <div
            key={alert}
            className="rounded-xl bg-slate-950 p-4"
          >
            {alert}
          </div>
        ))}

      </div>

    </div>
  );
}
