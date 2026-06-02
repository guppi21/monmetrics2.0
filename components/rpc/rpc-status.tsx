export default function RpcStatus() {
  const providers = [
    {
      name: "Official",
      latency: "82ms",
      status: "ONLINE",
    },
    {
      name: "dRPC",
      latency: "104ms",
      status: "ONLINE",
    },
    {
      name: "Ankr",
      latency: "95ms",
      status: "ONLINE",
    },
    {
      name: "Tenderly",
      latency: "118ms",
      status: "ONLINE",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

      <h3 className="mb-5 text-xl font-bold">
        Provider Status
      </h3>

      <div className="space-y-4">

        {providers.map((provider) => (
          <div
            key={provider.name}
            className="flex items-center justify-between border-b border-slate-800 pb-3"
          >
            <span>{provider.name}</span>

            <span className="text-cyan-400">
              {provider.latency}
            </span>

            <span className="text-green-400">
              {provider.status}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
