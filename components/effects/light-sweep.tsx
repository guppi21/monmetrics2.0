"use client";

export default function LightSweep() {
  return (
    <>
      {/* LARGE METAL REFLECTION */}

      <div
        className="
        pointer-events-none
        fixed
        inset-0
        z-[999]
        overflow-hidden
      "
      >
        <div
          className="
          absolute
          top-[-40%]
          left-[-30%]

          h-[220%]
          w-[500px]

          rotate-[18deg]

          bg-gradient-to-r
          from-transparent
          via-white/12
          to-transparent

          blur-[50px]

          animate-[metalSweep_14s_ease-in-out_infinite]
        "
        />
      </div>

      <style jsx global>{`
        @keyframes metalSweep {
          0% {
            transform: translateX(-20vw)
              rotate(18deg);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          50% {
            transform: translateX(120vw)
              rotate(18deg);
            opacity: 1;
          }

          100% {
            transform: translateX(120vw)
              rotate(18deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}