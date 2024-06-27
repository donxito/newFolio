import React from 'react';
import Particles from 'react-particles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

const Fireworks = () => {
  const customInit = async (engine: any) => {
    await loadFireworksPreset(engine);
  };

  const options = {
    preset: 'fireworks',
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      move: {
        speed: {
          min: 1,
          max: 2,
        },
      },
    },
    emitters: {
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1,
      },
      rate: {
        quantity: 1,
        delay: 0.5,
      },
      size: {
        width: 100,
        height: 0,
      },
      position: {
        x: 50,
        y: 100,
      },
    },
  };

  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
      <Particles
        id="tsparticles"
        init={customInit}
        options={options}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};

export default Fireworks;