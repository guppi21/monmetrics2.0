export interface RpcHealth {
  status: "ONLINE" | "OFFLINE";
  uptime: number;
  latency: number;
  updatedAt: string;
}
