export interface RpcProvider {
  name: string;
  provider: string;
  network: "mainnet" | "testnet";
  url: string;
}
