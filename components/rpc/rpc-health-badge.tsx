interface Props {
  status: string;
}

export default function RpcHealthBadge({
  status,
}: Props) {
  const color =
    status === "ONLINE"
      ? "bg-green-500"
      : "bg-red-500";

  return (
    <div className="flex items-center gap-2">
      <div
        className={`h-3 w-3 rounded-full ${color}`}
      />

      <span>{status}</span>
    </div>
  );
}
