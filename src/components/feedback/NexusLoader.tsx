"use client";

import { useEffect, useState } from "react";

export default function NexusLoader({ size = 100, color = "#432392" }: { size?: number; color?: string }) {
  // We use a simple mounted state to trigger the animation on load
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Center coordinate
  const cx = 50;
  const cy = 50;
  // Inner circle radius
  const cr = 14; 
  
  // Rays configuration
  // The distance from center to start of the line
  const innerR = 26;
  // The distance from center to end of the line
  const outerR = 42;

  // Function to calculate x,y points given an angle in degrees
  const getPoint = (angle: number, radius: number) => {
    const rad = (angle - 90) * (Math.PI / 180); // -90 so 0 is Top
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  };

  // Angles for the rays based on the image:
  // Top: 0
  // Top-Left: 315 (-45)
  // Left: 270 (-90)
  // Bottom-Left: 225
  // Bottom: 180
  // Right: 90
  // (Notice 45 and 135 are missing)
  const rayAngles = [0, 315, 270, 225, 180, 90];

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="overflow-visible"
        style={{
           filter: "drop-shadow(0px 0px 8px rgba(67, 35, 146, 0.4))"
        }}
      >
        <style>
          {`
            .nexus-loader-element {
              stroke-dasharray: 100;
              stroke-dashoffset: 100;
            }
            .nexus-loader-draw {
              animation: drawLine 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
            }
            @keyframes drawLine {
              0% { stroke-dashoffset: 100; opacity: 0; }
              20% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 1; }
            }
            
            .nexus-circle {
              stroke-dasharray: 200;
              stroke-dashoffset: 200;
              animation: drawCircle 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
            }
            @keyframes drawCircle {
              0% { stroke-dashoffset: 200; fill: transparent; }
              50% { stroke-dashoffset: 0; fill: transparent; }
              100% { stroke-dashoffset: 0; fill: ${color}; }
            }
          `}
        </style>

        {/* Central Circle */}
        <circle
          cx={cx}
          cy={cy}
          r={cr}
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          className={`nexus-circle fill-transparent ${mounted ? '' : 'opacity-0'}`}
        />

        {/* Rays */}
        {rayAngles.map((angle, index) => {
          const start = getPoint(angle, innerR);
          const end = getPoint(angle, outerR);
          return (
            <line
              key={angle}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              className="nexus-loader-element nexus-loader-draw"
              style={{
                // Staggered animation delay to create a sweeping drawing effect
                animationDelay: `${index * 0.15}s`
              }}
            />
          );
        })}
      </svg>
      {/* Optional Pulsing Text beneath */}
      <span 
        className="font-bold tracking-widest uppercase text-sm animate-pulse"
        style={{ color }}
      >
        Carregando...
      </span>
    </div>
  );
}
