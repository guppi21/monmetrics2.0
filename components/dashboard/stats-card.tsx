interface Props {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">

      <p className="text-xs uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-black">
        {value}
      </h3>

    </div>
  );
}
