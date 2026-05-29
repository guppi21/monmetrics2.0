export interface RpcMetrics {
  status: "ONLINE" | "OFFLINE";
  latency: number;
  blockHeight: number;
  chainId: number;
}
