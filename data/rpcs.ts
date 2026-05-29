import { RpcProvider } from "@/types/rpc";

export const rpcs: RpcProvider[] = [
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
