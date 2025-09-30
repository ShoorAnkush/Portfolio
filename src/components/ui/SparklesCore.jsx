// src/components/ui/SparklesCore.jsx
import React, { useId, useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const SparklesCore = ({
  children,
  id,
  className = "",
  background,
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 30,
  style = {},
}) => {
  const generatedId = useId();
  const particlesId = id || generatedId;
  const [engineReady, setEngineReady] = useState(false);
  const wrapperRef = useRef(null);

  // init tsparticles engine (slim build)
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  // tsparticles options
  const options = {
    fullScreen: { enable: false },
    background: { color: { value: background || "transparent" } },
    fpsLimit: 60,
    particles: {
      number: { value: particleDensity },
      color: { value: particleColor },
      opacity: {
        value: { min: 0.2, max: 0.95 },
        animation: {
          enable: true,
          speed: speed,
          minimumValue: 0.2,
          sync: false,
        },
      },
      size: { value: { min: minSize, max: maxSize } },
      move: {
        enable: true,
        speed: { min: 0.05, max: 0.6 },
        direction: "none",
        outModes: { default: "out" },
      },
      shape: { type: "circle" },
    },
    detectRetina: true,
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-block ${className}`}
      style={{ position: "relative", padding: "1rem", ...style }}
    >
      {/* particles behind card */}
      {engineReady && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Particles
            id={particlesId}
            options={options}
            className="w-full h-full"
          />
        </div>
      )}

      {/* card content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default SparklesCore;
