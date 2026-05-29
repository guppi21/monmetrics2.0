import Link from "next/link";

const providers = [
  "official",
  "ankr",
  "drpc",
  "tenderly",
];

export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">

      <h1 className="mb-8 text-5xl font-black">
        RPC Providers
      </h1>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {providers.map((provider) => (
          <Link
            key={provider}
            href={`/providers/${provider}`}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-violet-500"
          >
            {provider.toUpperCase()}
          </Link>
        ))}

      </div>

    </main>
  );
}
