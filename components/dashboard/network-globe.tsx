"use client";

import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export default function RPCGlobe() {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls?.();

      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.6;
      }
    }
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-[24px] overflow-hidden border border-white/10 bg-black">

      {/* TITLE */}
      <div className="absolute top-3 left-4 z-10 text-[10px] tracking-[0.3em] text-cyan-300">
        GLOBAL RPC GLOBE
      </div>

      {/* GLOBE */}
      <Globe
        ref={globeRef}
        width={800}
        height={800}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#22d3ee"
        atmosphereAltitude={0.25}
        enablePointerInteraction={false}
      />
    </div>
  );
}