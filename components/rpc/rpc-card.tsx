import { RpcProvider } from "@/types/rpc";

interface Props {
  rpc: RpcProvider;
}

export default function RpcCard({
  rpc,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,.25)]">

      <div className="mb-3 flex items-center justify-between">

        <h3 className="font-bold">
          {rpc.name}
        </h3>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
          {rpc.network}
        </span>

      </div>

      <p className="text-sm text-slate-400">
        {rpc.provider}
      </p>

      <p className="mt-4 break-all text-xs text-slate-500">
        {rpc.url}
      </p>

    </div>
  );
}
