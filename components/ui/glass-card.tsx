"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10

      bg-white/[0.08]

      backdrop-blur-[30px]

      shadow-[0_0_60px_rgba(255,255,255,0.04)]

      transition-all
      duration-500

      hover:-translate-y-1
      hover:bg-white/[0.10]

      hover:shadow-[0_0_80px_rgba(131,110,249,0.18)]

      ${className}
    `}
    >
      {/* TOP GLASS SHINE */}

      <div
        className="
        absolute
        inset-x-0
        top-0
        h-px
        bg-white/40
      "
      />

      {/* UPPER REFLECTION */}

      <div
        className="
        absolute
        inset-x-0
        top-0

        h-20

        bg-gradient-to-b
        from-white/[0.12]
        to-transparent

        pointer-events-none
      "
      />

      {/* MOVING REFLECTION */}

      <div
        className="
        absolute
        -left-40
        top-0

        h-full
        w-32

        rotate-[25deg]

        bg-gradient-to-r
        from-transparent
        via-white/[0.08]
        to-transparent

        opacity-0

        transition-all
        duration-1000

        group-hover:left-[120%]
        group-hover:opacity-100
      "
      />

      {/* INNER GLOW */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-br
        from-violet-500/[0.04]
        via-transparent
        to-cyan-500/[0.04]

        pointer-events-none
      "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}