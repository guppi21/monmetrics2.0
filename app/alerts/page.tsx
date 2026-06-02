"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Send } from "lucide-react";

export default function AlertsPage() {
  const [discordConnected, setDiscordConnected] = useState(false);
  const [telegramConnected, setTelegramConnected] = useState(false);

  useEffect(() => {
    setDiscordConnected(!!localStorage.getItem("discord_webhook"));
    setTelegramConnected(!!localStorage.getItem("telegram_chat"));
  }, []);

  function connectDiscord() {
    const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;

    if (!clientId) return;

    const redirectUri = encodeURIComponent(
      "http://localhost:3000/api/discord/callback"
    );

    const url =
      `https://discord.com/oauth2/authorize` +
      `?client_id=${clientId}` +
      `&response_type=code` +
      `&redirect_uri=${redirectUri}` +
      `&scope=identify%20guilds`;

    window.location.href = url;
  }

  function connectTelegram() {
    window.open("https://t.me/MonMetric_bot", "_blank");
    alert("Open bot and press START");
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#050311] text-white overflow-hidden px-6">

      {/* BACKGLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[400px] w-[400px] bg-indigo-500/20 blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] bg-cyan-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl space-y-12">

        {/* TITLE */}
        <div className="text-center">
          <h1 className="text-5xl font-black tracking-tight">
            Alert Control Center
          </h1>
          <p className="text-slate-400 mt-3">
            Real-time RPC monitoring system
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* DISCORD */}
          <div className="relative rounded-3xl p-10 bg-white/5 border border-indigo-500/20 backdrop-blur-xl shadow-[0_0_80px_rgba(99,102,241,0.18)]">

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/10">
                <MessageSquare className="text-indigo-400 w-6 h-6" />
              </div>

              <h2 className="text-2xl font-bold">Discord Alerts</h2>
            </div>

            <p className="text-sm text-slate-400">
              Status: {discordConnected ? "Connected" : "Not Connected"}
            </p>

            <button
              onClick={connectDiscord}
              className="mt-6 w-full py-4 rounded-xl bg-indigo-500/20 border border-indigo-400/30 hover:bg-indigo-500/30 transition"
            >
              Connect Discord
            </button>
          </div>

          {/* TELEGRAM */}
          <div className="relative rounded-3xl p-10 bg-white/5 border border-cyan-500/20 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.18)]">

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Send className="text-cyan-400 w-6 h-6" />
              </div>

              <h2 className="text-2xl font-bold">Telegram Alerts</h2>
            </div>

            <p className="text-sm text-slate-400">
              Status: {telegramConnected ? "Connected" : "Not Connected"}
            </p>

            <button
              onClick={connectTelegram}
              className="mt-6 w-full py-4 rounded-xl bg-cyan-500/20 border border-cyan-400/30 hover:bg-cyan-500/30 transition"
            >
              Connect Telegram Bot
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}