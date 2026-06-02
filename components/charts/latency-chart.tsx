import { latencyHistory } from "@/data/history";

export default function LatencyChart() {
  const maxLatency = Math.max(
    ...latencyHistory.map((p) => p.latency)
  );

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-5 text-xl font-bold">
        Latency History
      </h3>

      <div className="flex h-64 items-end gap-4">
        {latencyHistory.map((point) => (
          <div
            key={point.timestamp}
            className="flex flex-1 flex-col items-center"
          >
            <div
              className="w-full rounded-t bg-cyan-500"
              style={{
                height: `${
                  (point.latency / maxLatency) * 180
                }px`,
              }}
            />

            <span className="mt-2 text-xs text-slate-400">
              {point.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}