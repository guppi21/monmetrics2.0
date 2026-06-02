"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

import useRpcData from "@/hooks/useRpcData";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function getColor(
  latency: number,
  status: string
) {
  if (status !== "ONLINE")
    return "#ef4444";

  if (latency < 100)
    return "#22c55e";

  if (latency < 250)
    return "#facc15";

  return "#ef4444";
}

export default function RPCWorldMap() {
  const results =
    useRpcData();

  return (
    <div className="relative h-full w-full">
      <TransformWrapper
        minScale={0.8}
        maxScale={5}
        wheel={{
          step: 0.15,
        }}
      >
        <TransformComponent
          wrapperClass="!w-full !h-full"
          contentClass="!w-full !h-full"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 220,
              center: [10, 15],
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Geographies geography={geoUrl}>
              {({
                geographies,
              }: {
                geographies: any[];
              }) =>
                geographies.map(
                  (geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#0b1220"
                      stroke="#1e293b"
                      strokeWidth={0.5}
                    />
                  )
                )
              }
            </Geographies>

            {results.map((rpc) => {
              const color =
                getColor(
                  rpc.latency,
                  rpc.status
                );

              return (
                <Marker
                  key={rpc.url}
                  coordinates={[
                    rpc.lng,
                    rpc.lat,
                  ]}
                >
                  <title>
                    {rpc.provider}
                    {"\n"}
                    Status: {rpc.status}
                    {"\n"}
                    Latency: {rpc.latency}ms
                    {"\n"}
                    Region: {rpc.region}
                  </title>

                  <circle
                    r={14}
                    fill={color}
                    opacity={0.15}
                  />

                  <circle
                    r={6}
                    fill={color}
                    style={{
                      filter: `drop-shadow(0 0 10px ${color})`,
                    }}
                  />

                  <text
                    y={-12}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="8"
                  >
                    {rpc.provider}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}