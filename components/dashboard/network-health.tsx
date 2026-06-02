export default function NetworkHealth() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

      <h3 className="mb-5 text-xl font-bold">
        Network Health
      </h3>

      <div className="space-y-5">

        <div>
          <div className="mb-2 flex justify-between">
            <span>RPC Availability</span>
            <span className="text-green-400">99.98%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <div className="h-2 w-[99%] rounded-full bg-green-500"></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span>Network Sync</span>
            <span className="text-cyan-400">100%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <div className="h-2 w-full rounded-full bg-cyan-500"></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span>Infrastructure Score</span>
            <span className="text-violet-400">96/100</span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <div className="h-2 w-[96%] rounded-full bg-violet-500"></div>
          </div>
        </div>

      </div>

    </div>
  );
}
