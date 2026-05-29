export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-black">
        RPC Providers
      </h1>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          Official Monad
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          Ankr
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          dRPC
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          Tenderly
        </div>
      </div>
    </main>
  );
}
