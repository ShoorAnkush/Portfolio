// src/components/ui/SparklesBackground.jsx
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const SparklesBackground = ({
  particleColor = "#ffffff",
  particleDensity = 40,
  minSize = 1,
  maxSize = 3,
  speed = 4,
}) => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  if (!engineReady) return null;

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Particles
        id="sparkles-bg"
        className="w-full h-full"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: particleDensity },
            color: { value: particleColor },
            opacity: {
              value: { min: 0.2, max: 0.95 },
              animation: { enable: true, speed, minimumValue: 0.2 },
            },
            size: { value: { min: minSize, max: maxSize } },
            move: {
              enable: true,
              speed: { min: 0.05, max: 0.6 },
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default SparklesBackground;
