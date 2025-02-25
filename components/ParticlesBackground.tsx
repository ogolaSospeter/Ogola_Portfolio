"use client";

import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { particlesConfig } from "@/lib/particlesConfig";

const ParticlesBackground = () => {
  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={initParticles}
      options={particlesConfig}
    />
  );
};

export default ParticlesBackground;