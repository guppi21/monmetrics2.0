export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-black">
        Settings
      </h1>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

        <p>Discord Alerts</p>

        <input
          placeholder="Discord Webhook"
          className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
        />

      </div>
    </main>
  );
}
