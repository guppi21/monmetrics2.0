"use client";

import { useEffect, useState } from "react";

export default function LastUpdated() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(
      new Date().toLocaleTimeString()
    );

    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString()
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
      <p className="text-slate-400">
        Last Updated
      </p>

      <h3 className="mt-2 text-xl font-bold">
        {time}
      </h3>
    </div>
  );
}
