export default function Privacy() {
  return (
    <div className="min-h-screen text-white p-10 bg-[#050311]">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-slate-400 leading-7">
        MonMetrics respects your privacy. We do not sell, trade, or misuse user data.
        The application only collects minimal analytics required for RPC performance monitoring.
      </p>

      <p className="text-slate-400 mt-4 leading-7">
        Data such as latency metrics, network status, and public RPC endpoints are used
        solely for performance visualization and system improvement.
      </p>

      <p className="text-slate-500 mt-10 text-sm">
        © MonMetrics 2026
      </p>
    </div>
  );
}