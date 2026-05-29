import { RpcProvider } from "@/types/rpc";

export const rpcs: RpcProvider[] = [
  {
    name: "Official Mainnet",
    provider: "Monad",
    network: "mainnet",
    url: "https://rpc.monad.xyz",
  },
  {
    name: "dRPC Mainnet",
    provider: "dRPC",
    network: "mainnet",
    url: "https://monad-mainnet.drpc.org",
  },
  {
    name: "Tenderly Mainnet",
    provider: "Tenderly",
    network: "mainnet",
    url: "https://monad.gateway.tenderly.co",
  },
  {
    name: "Thirdweb Mainnet",
    provider: "Thirdweb",
    network: "mainnet",
    url: "https://143.rpc.thirdweb.com",
  },

  {
    name: "Official Testnet",
    provider: "Monad",
    network: "testnet",
    url: "https://testnet-rpc.monad.xyz",
  },
  {
    name: "Ankr Testnet",
    provider: "Ankr",
    network: "testnet",
    url: "https://rpc.ankr.com/monad_testnet",
  },
  {
    name: "dRPC Testnet",
    provider: "dRPC",
    network: "testnet",
    url: "https://monad-testnet.drpc.org",
  },
];
