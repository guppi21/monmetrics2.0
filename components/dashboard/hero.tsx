"use client";

import NetworkSwitch from "@/components/network-switch";

export default function Hero() {
  return (
    <section
      className="
      relative
      flex
      min-h-[85vh]
      lg:min-h-screen
      flex-col
      items-center
      justify-center
      overflow-hidden
      text-center
      px-4
      "
    >
      {/* MAIN SPOTLIGHT */}
      <div
        className="
        absolute
        left-1/2
        top-[-300px]

        h-[1200px]
        w-[80px]

        lg:h-[2200px]
        lg:w-[180px]

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
        top-[-250px]

        h-[900px]
        w-[50px]

        lg:h-[1800px]
        lg:w-[100px]

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

        mb-4

        text-[10px]
        sm:text-xs

        font-semibold
        uppercase

        tracking-[0.25em]
        sm:tracking-[0.45em]

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

        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-[140px]

        font-black
        leading-none
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

        mt-4

        max-w-md
        px-4

        text-base
        sm:text-lg
        lg:text-2xl

        text-slate-300
        "
      >
        Track Every Monad RPC
      </p>

      {/* FEATURES */}
      <div
        className="
        relative
        z-10

        mt-6

        flex
        flex-wrap
        justify-center
        items-center

        gap-2

        max-w-5xl
        px-4

        text-xs
        sm:text-sm
        md:text-base

        text-slate-300
        "
      >
        <span>🏆 Provider Rankings</span>

        <span className="text-slate-500">•</span>

        <span>📊 Live Metrics</span>

        <span className="text-slate-500">•</span>

        <span>🌎 Global Map</span>

        <span className="text-slate-500">•</span>

        <span>📈 Latency Analytics</span>

        <span className="text-slate-500">•</span>

        <span>🚨 Discord & Telegram Alerts</span>
      </div>

      {/* NETWORK SWITCH */}
      <div className="relative z-10 mt-8 lg:mt-10">
        <NetworkSwitch />
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="
        absolute
        bottom-8
        lg:bottom-12

        flex
        flex-col
        items-center

        gap-3
        "
      >
        <div
          className="
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-slate-500
          "
        >
          SCROLL
        </div>

        <div
          className="
          h-10
          lg:h-12
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
