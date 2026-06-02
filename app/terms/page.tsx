export default function Terms() {
  return (
    <div className="min-h-screen text-white p-10 bg-[#050311]">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>

      <p className="text-slate-400 leading-7">
        By using MonMetrics, you agree that the platform is provided for informational
        purposes only. RPC latency values and network data are not financial advice.
      </p>

      <p className="text-slate-400 mt-4 leading-7">
        We are not responsible for downtime, third-party RPC failures, or incorrect
        metrics caused by external providers.
      </p>

      <p className="text-slate-500 mt-10 text-sm">
        © MonMetrics 2026
      </p>
    </div>
  );
}