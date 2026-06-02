interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProviderPage({
  params,
}: Props) {
  const { slug } = await params;

  const provider = slug.toUpperCase();

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-black">
        {provider}
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            Status
          </p>

          <h2 className="mt-3 text-3xl font-black text-green-400">
            ONLINE
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            Latency
          </p>

          <h2 className="mt-3 text-3xl font-black">
            82ms
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            Uptime
          </p>

          <h2 className="mt-3 text-3xl font-black">
            99.98%
          </h2>
        </div>

      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="mb-5 text-xl font-bold">
          Provider Overview
        </h3>

        <p className="text-slate-400">
          Detailed analytics, incidents,
          uptime history and latency trends
          for this RPC provider.
        </p>
      </div>
    </main>
  );
}