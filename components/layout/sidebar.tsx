"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Activity,
  Bell,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const [open, setOpen] =
    useState(false);

  const [hideButton, setHideButton] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideButton(
        window.scrollY > 120
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const items = [
    {
      name: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Status",
      href: "/status",
      icon: Activity,
    },
    {
      name: "Alerts",
      href: "/alerts",
      icon: Bell,
    },
  ];

  return (
    <>
      {/* MENU BUTTON */}

      <button
        onClick={() => setOpen(true)}
        className={`
        fixed
        left-4
        top-6

        z-50

        flex
        h-12
        w-12

        items-center
        justify-center

        rounded-2xl

        border
        border-white/10

        bg-white/[0.08]

        backdrop-blur-2xl

        shadow-[0_0_40px_rgba(255,255,255,0.06)]

        transition-all
        duration-500

        hover:scale-105
        hover:bg-white/[0.12]

        hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]

        ${
          hideButton
            ? "-translate-x-10 opacity-0 pointer-events-none"
            : "translate-x-0 opacity-100"
        }
      `}
      >
        <Menu size={22} />
      </button>

      {/* OVERLAY */}

      {open && (
        <div
          onClick={() =>
            setOpen(false)
          }
          className="
          fixed
          inset-0
          z-40

          bg-black/60

          backdrop-blur-md
          "
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`
        fixed
        left-0
        top-0

        z-50

        h-screen
        w-[300px]

        overflow-hidden

        border-r
        border-white/10

        bg-[#050311]/95

        backdrop-blur-[40px]

        transition-all
        duration-500

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
      >
        {/* CYAN GLOW */}

        <div
          className="
          absolute
          left-[-120px]
          top-[120px]

          h-[400px]
          w-[400px]

          rounded-full

          bg-cyan-500/15

          blur-[140px]
          "
        />

        {/* BLUE GLOW */}

        <div
          className="
          absolute
          right-[-120px]
          bottom-[120px]

          h-[300px]
          w-[300px]

          rounded-full

          bg-blue-500/10

          blur-[120px]
          "
        />

        {/* CLOSE */}

        <button
          onClick={() =>
            setOpen(false)
          }
          className="
          absolute
          right-5
          top-5

          rounded-xl

          p-2

          transition

          hover:bg-white/10
          "
        >
          <X size={18} />
        </button>

        {/* LOGO */}

        <div className="pt-16 text-center">

          <h1 className="text-4xl font-black">

            <span
              className="
              bg-gradient-to-r
              from-cyan-300
              via-blue-300
              to-cyan-200

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

          <p className="mt-3 text-sm text-slate-400">
            Monad RPC Intelligence
          </p>

        </div>

        {/* MENU */}

        <div
          className="
          absolute

          left-0
          right-0

          top-[55%]

          -translate-y-1/2

          px-5
          "
        >
          <div
            className="
            mb-5

            h-px

            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            "
          />

          <div className="space-y-4">

            {items.map((item) => {
              const Icon =
                item.icon;

              const active =
                pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className={`
                  group

                  flex
                  items-center

                  gap-5

                  rounded-[28px]

                  border

                  px-6
                  py-6

                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                      border-cyan-400/20

                      bg-gradient-to-r
                      from-cyan-500/20
                      to-blue-500/10

                      text-white

                      shadow-[0_0_50px_rgba(34,211,238,0.25)]
                      `
                      : `
                      border-white/10

                      bg-white/[0.03]

                      text-slate-300

                      hover:bg-white/[0.08]

                      hover:text-white

                      hover:translate-x-2

                      hover:border-cyan-400/20

                      hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                      `
                  }
                  `}
                >
                  <Icon
                    size={24}
                    className="
                    transition-transform

                    group-hover:scale-110
                    "
                  />

                  <span
                    className="
                    text-lg
                    font-semibold
                    "
                  >
                    {item.name}
                  </span>

                </Link>
              );
            })}

          </div>

          <div
            className="
            mt-5

            h-px

            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            "
          />
        </div>

        {/* STATUS */}

        <div
          className="
          absolute

          bottom-10

          w-full

          text-center
          "
        >
          <div
            className="
            inline-flex

            items-center

            gap-2

            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/10

            px-4
            py-2
            "
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-sm text-cyan-300">
              Systems Operational
            </span>

          </div>
        </div>

      </aside>
    </>
  );
}