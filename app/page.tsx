import Navbar from "@/components/layout/navbar";
import RpcCard from "@/components/rpc/rpc-card";
import { rpcs } from "@/data/rpcs";

export default function Home() {
  const mainnet = rpcs.filter(
    (rpc) => rpc.network === "mainnet"
  );

  const testnet = rpcs.filter(
    (rpc) => rpc.network === "testnet"
  );

  return (
    <main className="min-h-screen">

      <div className="mx-auto max-w-7xl px-6">

        <Navbar />

        <section className="py-16">

          <h1 className="text-6xl font-black">
            RPC Analytics
          </h1>

          <h1 className="text-6xl font-black bg-gradient-to-r from-violet-500 via-blue-500 to-green-400 bg-clip-text text-transparent">
            on Monad
          </h1>

          <p className="mt-6 max-w-xl text-slate-400">
            Monitor, benchmark and compare Monad RPC providers.
          </p>

          <input
            className="mt-10 w-full rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 outline-none focus:border-violet-500"
            placeholder="Search RPC provider..."
          />

        </section>

        <section>

          <h2 className="mb-6 text-2xl font-bold">
            Mainnet Providers
          </h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {mainnet.map((rpc) => (
              <RpcCard
                key={rpc.name}
                rpc={rpc}
              />
            ))}

          </div>

        </section>

        <section className="mt-16 pb-24">

          <h2 className="mb-6 text-2xl font-bold">
            Testnet Providers
          </h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {testnet.map((rpc) => (
              <RpcCard
                key={rpc.name}
                rpc={rpc}
              />
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
