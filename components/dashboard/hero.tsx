"use client";

import NetworkSwitch from "@/components/network-switch";

export default function Hero() {
  return (
    <section
      className="
      relative

      flex
      min-h-screen

      flex-col
      items-center
      justify-center

      overflow-hidden

      text-center
      "
    >
      {/* MAIN SPOTLIGHT */}

      <div
        className="
        absolute

        left-1/2
        top-[-500px]

        h-[2200px]
        w-[180px]

        -translate-x-1/2
        rotate-[18deg]

        bg-gradient-to-b
        from-cyan-200/40
        via-cyan-300/12
        to-transparent

        blur-[70px]

        pointer-events-none
        "
      />

      {/* SECONDARY SPOTLIGHT */}

      <div
        className="
        absolute

        left-[47%]
        top-[-400px]

        h-[1800px]
        w-[100px]

        rotate-[-12deg]

        bg-gradient-to-b
        from-white/20
        via-white/5
        to-transparent

        blur-[60px]

        pointer-events-none
        "
      />

      {/* LABEL */}

      <div
        className="
        relative
        z-10

        mb-6

        text-sm
        font-semibold

        uppercase

        tracking-[0.45em]

        text-cyan-300
        "
      >
        LIVE RPC INTELLIGENCE
      </div>

      {/* TITLE */}

      <h1
        className="
        relative
        z-10

        text-7xl
        font-black

        leading-none

        sm:text-8xl
        lg:text-[140px]
        "
      >
        <span
          className="
          bg-gradient-to-r
          from-violet-300
          via-cyan-300
          to-blue-300

          bg-clip-text
          text-transparent
          "
        >
          MON
        </span>

        <span className="text-white">
          METRICS
        </span>
      </h1>

      {/* SUBTITLE */}

      <p
        className="
        relative
        z-10

        mt-6

        max-w-2xl

        text-xl

        text-slate-300

        lg:text-2xl
        "
      >
        Track Every Monad RPC
      </p>

      {/* NETWORK SWITCH */}

      <div className="relative z-10 mt-10">
        <NetworkSwitch />
      </div>

      {/* SCROLL INDICATOR */}

      <div
        className="
        absolute
        bottom-12

        flex
        flex-col
        items-center

        gap-3
        "
      >
        <div
          className="
          text-xs

          uppercase

          tracking-[0.4em]

          text-slate-500
          "
        >
          SCROLL
        </div>

        <div
          className="
          h-12
          w-[2px]

          rounded-full

          bg-gradient-to-b
          from-white
          to-transparent

          animate-pulse
          "
        />
      </div>
    </section>
  );
}