'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  MarchingCubes,
  MeshTransmissionMaterial,
  Environment,
} from '@react-three/drei';

function BlobsLayer({
  resolution = 64,
  speed = 0.3,
  numBalls = 15,
  mouse,
  color = '#ffffff',
  wireframe = true,
  repelOnHover = false,
  glass = false,
}) {
  const ref = useRef();
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

          let px = fx,
            py = fy,
            pz = fz;

          if (repelOnHover && mouse.current) {
            const [mx, my] = mouse.current;
            const dx = fx - mx;
            const dy = fy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repelRadius = 0.18;
            if (dist < repelRadius) {
              const strength = 0.18 * (1 - dist / repelRadius);
              px += (dx / (dist + 0.001)) * strength;
              py += (dy / (dist + 0.001)) * strength;
            }
          }

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
      {glass ? (
        <MeshTransmissionMaterial
          transmission={1}
          roughness={0}
          thickness={0.4}
          ior={1.45}
          chromaticAberration={0.015}
          backside={false}
        />
      ) : (
        <meshStandardMaterial color={color} wireframe={wireframe} />
      )}
    </MarchingCubes>
  );
}

export default function Blobs() {
  const mouse = useRef(null);

  function handlePointerMove(e) {
    const rect = e.target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1 - (e.clientY - rect.top) / rect.height;
    mouse.current = [x, y];
  }

  function handlePointerOut() {
    mouse.current = null;
  }

  return (
    <div
      style={{
        position: 'absolute',
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
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1.2} color={'#6be5ff'} />
        <pointLight position={[-2, -2, 2]} intensity={1.1} color={'#f957bc'} />
        <pointLight position={[0, 2, -2]} intensity={0.9} color={'#a66cff'} />
        <Environment preset='city' />
        {/* <BlobsLayer
          mouse={mouse}
          color={'#ffffff'}
          wireframe={true}
          repelOnHover={true}
        /> */}
        <BlobsLayer
          mouse={mouse}
          glass={true}
          wireframe={false}
          repelOnHover={true}
        />
      </Canvas>
    </div>
  );
}
