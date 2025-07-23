'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MarchingCubes } from '@react-three/drei';

function BlobsAnimation({
  resolution = 50,
  speed = 0.3,
  numBalls = 10,
  mouse,
}) {
  const ref = useRef();
  // Store current positions for smooth animation
  const positions = useRef(
    Array(2)
      .fill()
      .map(() => Array(numBalls).fill([0.5, 0.5, 0.5]))
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.reset();
      for (let line = 0; line < 2; line++) {
        for (let i = 0; i < numBalls; i++) {
          // Target X shape position
          const alpha = i / (numBalls - 1);
          let x, y;
          if (line === 0) {
            x = 0.25 + 0.5 * alpha;
            y = 0.25 + 0.5 * alpha;
          } else {
            x = 0.75 - 0.5 * alpha;
            y = 0.25 + 0.5 * alpha;
          }
          const phase = (i / numBalls) * Math.PI * 2 + line * Math.PI;
          const fx = x + 0.02 * Math.sin(t * 1.2 + phase);
          const fy = y + 0.02 * Math.cos(t * 1.1 + phase * 1.3);
          const fz = 0.5 + 0.015 * Math.sin(t * 1.3 + phase * 1.7);

          // Repel from mouse (if present)
          let px = fx,
            py = fy,
            pz = fz;
          if (mouse.current) {
            const [mx, my] = mouse.current;
            // Mouse is in [0,1] range for both x and y
            const dx = fx - mx;
            const dy = fy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repelRadius = 0.18;
            if (dist < repelRadius) {
              // Repel with smooth falloff
              const strength = 0.18 * (1 - dist / repelRadius);
              px += (dx / (dist + 0.001)) * strength;
              py += (dy / (dist + 0.001)) * strength;
            }
          }

          // Smoothly interpolate to new position
          const prev = positions.current[line][i];
          const lerp = (a, b, t) => a + (b - a) * 0.18;
          const nx = lerp(prev[0], px, 0.18);
          const ny = lerp(prev[1], py, 0.18);
          const nz = lerp(prev[2], pz, 0.18);
          positions.current[line][i] = [nx, ny, nz];

          ref.current.addBall(nx, ny, nz, 0.11, 1);
        }
      }
    }
  });

  return (
    <MarchingCubes
      ref={ref}
      resolution={resolution}
      enableUvs={false}
      enableColors={false}
    >
      <meshStandardMaterial color={'#fff'} wireframe={true} />
    </MarchingCubes>
  );
}

export default function Blobs() {
  // Track mouse in normalized [0,1] coordinates relative to canvas
  const mouse = useRef(null);

  function handlePointerMove(e) {
    const rect = e.target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    // Flip y so 0 is bottom, 1 is top
    const y = 1 - (e.clientY - rect.top) / rect.height;
    mouse.current = [x, y];
  }
  function handlePointerOut() {
    mouse.current = null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1.8], fov: 50 }}
        style={{ width: '100vw', height: '100vh', display: 'block' }}
        onPointerMove={handlePointerMove}
        onPointerOut={handlePointerOut}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <BlobsAnimation mouse={mouse} />
      </Canvas>
    </div>
  );
}
