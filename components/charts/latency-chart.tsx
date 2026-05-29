export default function LatencyChart() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h3 className="mb-5 text-xl font-bold">
        Latency History
      </h3>

      <div className="flex h-56 items-end gap-3">

        <div className="h-20 w-full rounded bg-cyan-500"></div>

        <div className="h-32 w-full rounded bg-cyan-500"></div>

        <div className="h-24 w-full rounded bg-cyan-500"></div>

        <div className="h-40 w-full rounded bg-cyan-500"></div>

        <div className="h-28 w-full rounded bg-cyan-500"></div>

        <div className="h-48 w-full rounded bg-cyan-500"></div>

      </div>

    </div>
  );
}
