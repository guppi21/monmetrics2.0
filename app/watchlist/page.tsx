export default function WatchlistPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-black">
        Watchlist
      </h1>

      <div className="space-y-4">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          ⭐ Official Monad
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          ⭐ Ankr
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          ⭐ dRPC
        </div>

      </div>
    </main>
  );
}
