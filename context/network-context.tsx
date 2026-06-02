"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type NetworkType =
  | "mainnet"
  | "testnet";

interface NetworkContextType {
  network: NetworkType;

  setNetwork: (
    network: NetworkType
  ) => void;

  primaryColor: string;

  accentClass: string;

  glowClass: string;
}

const NetworkContext =
  createContext<
    NetworkContextType | undefined
  >(undefined);

export function NetworkProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [network, setNetwork] =
    useState<NetworkType>(
      "mainnet"
    );

  const primaryColor =
    network === "mainnet"
      ? "#836EF9"
      : "#22D3EE";

  const accentClass =
    network === "mainnet"
      ? "text-violet-400"
      : "text-cyan-400";

  const glowClass =
    network === "mainnet"
      ? "bg-violet-500/10"
      : "bg-cyan-500/10";

  return (
    <NetworkContext.Provider
      value={{
        network,
        setNetwork,
        primaryColor,
        accentClass,
        glowClass,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  const context =
    useContext(NetworkContext);

  if (!context) {
    throw new Error(
      "useNetwork must be used inside NetworkProvider"
    );
  }

  return context;
}