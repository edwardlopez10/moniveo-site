"use client";

import { useState } from "react";
import { COUNTRIES, VIEWBOX } from "./centralAmericaPaths";

const ENTER_ORDER = [
  "guatemala",
  "belize",
  "honduras",
  "el_salvador",
  "nicaragua",
  "costa_rica",
  "panama"
] as const;

export default function CentralAmericaMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white"
      role="img"
      aria-label="Mapa de Centroamérica. El Salvador resaltado como sede de Moniveo."
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(70,55,90,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(70,55,90,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_88%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(24,24,27,0.04),transparent_45%)]" />
      </div>

      <svg
        viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
        className="absolute inset-0 h-full w-full animate-mapFloat motion-reduce:animate-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter
            id="map-home-glow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {COUNTRIES.map((country) => {
          const isHovered = hovered === country.id;
          const isHome = Boolean(country.home);
          const enterIndex = ENTER_ORDER.indexOf(
            country.id as (typeof ENTER_ORDER)[number]
          );
          const delayMs = Math.max(0, enterIndex) * 80 + 80;

          let fill = "rgba(244,244,245,0.92)";
          let stroke = "#d4d4d8";
          let strokeWidth = 1.15;

          if (isHome && !isHovered) {
            fill = "#27272a";
            stroke = "#18181b";
            strokeWidth = 1.4;
          } else if (isHovered) {
            fill = isHome ? "#3f3f46" : "#e4e4e7";
            stroke = isHome ? "#18181b" : "#a1a1aa";
            strokeWidth = 1.55;
          }

          const labelFill = isHovered ? "#18181b" : "#a1a1aa";

          return (
            <g
              key={country.id}
              className="origin-center animate-mapCountryIn motion-reduce:animate-none"
              style={{
                animationDelay: `${delayMs}ms`,
                transformBox: "fill-box",
                transformOrigin: "center"
              }}
              onMouseEnter={() => setHovered(country.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <path
                d={country.path}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
                filter={isHome ? "url(#map-home-glow)" : undefined}
                className={`cursor-pointer ${
                  isHome
                    ? "animate-mapHomeBreathe motion-reduce:animate-none"
                    : "animate-mapLandBreathe motion-reduce:animate-none"
                }`}
                style={{
                  transform: isHovered ? "scale(1.015)" : "scale(1)",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animationDelay: `${delayMs + 400}ms`,
                  transition:
                    "fill 200ms ease, stroke 200ms ease, transform 220ms ease"
                }}
              />

              {isHome ? (
                <g className="pointer-events-none">
                  {/* Radar ripples */}
                  {[0, 1, 2].map((i) => (
                    <circle
                      key={i}
                      cx={country.capitalDot[0]}
                      cy={country.capitalDot[1]}
                      r={14}
                      fill="none"
                      stroke="#18181b"
                      strokeWidth="1.2"
                      className="animate-mapRipple motion-reduce:animate-none"
                      style={{
                        transformOrigin: "center",
                        transformBox: "fill-box",
                        animationDelay: `${i * 0.9}s`
                      }}
                    />
                  ))}
                  {/* Blinking beacon */}
                  <circle
                    cx={country.capitalDot[0]}
                    cy={country.capitalDot[1]}
                    r={4.5}
                    fill="#18181b"
                    className="animate-mapBeacon motion-reduce:animate-none"
                    style={{
                      transformOrigin: "center",
                      transformBox: "fill-box"
                    }}
                  />
                  <circle
                    cx={country.capitalDot[0]}
                    cy={country.capitalDot[1]}
                    r={isHovered ? 2.6 : 2.2}
                    fill="#fafafa"
                    className="transition-[r] duration-200"
                  />
                </g>
              ) : (
                <circle
                  cx={country.capitalDot[0]}
                  cy={country.capitalDot[1]}
                  r={isHovered ? 2.2 : 1.7}
                  fill={isHovered ? "#18181b" : "#a1a1aa"}
                  className="pointer-events-none animate-mapNodeBlink motion-reduce:animate-none transition-[r,fill] duration-200"
                  style={{
                    animationDelay: `${(enterIndex % 5) * 0.45}s`
                  }}
                />
              )}

              {isHome ? null : (
                <text
                  x={country.label[0]}
                  y={country.label[1]}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isHovered ? 10 : 8.5}
                  fill={labelFill}
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontWeight={isHovered ? 600 : 500}
                  letterSpacing="0.05em"
                  opacity={isHovered ? 1 : 0.8}
                  className="pointer-events-none transition-[fill,font-size,opacity] duration-200"
                  style={{ textTransform: "uppercase" }}
                >
                  {country.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
