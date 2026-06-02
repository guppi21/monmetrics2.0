export interface RpcProvider {
  name: string;
  provider: string;
  network: "mainnet" | "testnet";
  url: string;
  website: string;

  region: string;
  lat: number;
  lng: number;
}

export interface RpcMetrics {
  status: "ONLINE" | "OFFLINE";
  latency: number;
  blockHeight: number;
  chainId: number;
}

export interface RpcResult
  extends RpcProvider,
    RpcMetrics {}