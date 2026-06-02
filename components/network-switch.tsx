"use client";

import { useNetwork } from "@/context/network-context";

export default function NetworkSwitch() {
  const { network, setNetwork } =
    useNetwork();

  return (
    <div
      className="
      relative
      flex
      overflow-hidden
      rounded-full
      border
      border-white/10
      bg-white/[0.05]
      backdrop-blur-2xl
      "
    >
      <div
        className={`
        absolute
        top-1
        bottom-1
        w-[120px]
        rounded-full
        bg-gradient-to-r
        from-violet-500
        to-cyan-500
        transition-all
        duration-300
        ${
          network === "mainnet"
            ? "left-1"
            : "left-[121px]"
        }
      `}
      />

      <button
        onClick={() =>
          setNetwork("mainnet")
        }
        className="
        relative
        z-10
        w-[120px]
        px-5
        py-2.5
        text-sm
        font-semibold
        "
      >
        MAINNET
      </button>

      <button
        onClick={() =>
          setNetwork("testnet")
        }
        className="
        relative
        z-10
        w-[120px]
        px-5
        py-2.5
        text-sm
        font-semibold
        "
      >
        TESTNET
      </button>
    </div>
  );
}