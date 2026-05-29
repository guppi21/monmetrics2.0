export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-black">
        Alert Center
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-4 text-2xl font-bold">
            Discord Alerts
          </h2>

          <input
            placeholder="Discord Webhook URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
          />

          <button className="mt-4 rounded-xl bg-violet-600 px-4 py-3">
            Save
          </button>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-4 text-2xl font-bold">
            Telegram Alerts
          </h2>

          <input
            placeholder="Telegram Chat ID"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
          />

          <button className="mt-4 rounded-xl bg-cyan-600 px-4 py-3">
            Save
          </button>

        </div>

      </div>
    </main>
  );
}
