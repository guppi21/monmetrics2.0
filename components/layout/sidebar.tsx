import {
  LayoutDashboard,
  Server,
  BarChart3,
  Activity,
} from "lucide-react";

export default function Sidebar() {
  const items = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Providers", icon: Server },
    { name: "Compare", icon: BarChart3 },
    { name: "Status", icon: Activity },
  ];

  return (
    <aside className="w-64 min-h-screen border-r border-slate-800 bg-slate-950 p-6">

      <h2 className="mb-10 text-3xl font-black bg-gradient-to-r from-violet-500 via-blue-500 to-green-400 bg-clip-text text-transparent">
        MonMetrics
      </h2>

      <div className="space-y-3">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900"
            >
              <Icon size={18} />
              {item.name}
            </button>
          );
        })}

      </div>

    </aside>
  );
}
