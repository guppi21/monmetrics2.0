export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <h1 className="text-4xl font-black bg-gradient-to-r from-violet-500 via-blue-500 to-green-400 bg-clip-text text-transparent">
        MonMetrics
      </h1>

      <p className="text-slate-400">
        RPC Analytics on Monad
      </p>
    </nav>
  );
}
