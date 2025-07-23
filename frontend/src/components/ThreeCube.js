'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCube() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Responsive resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // X shape setup
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

    // Use CapsuleGeometry if available, otherwise use CylinderGeometry as fallback
    let barGeometry;
    if (THREE.CapsuleGeometry) {
      barGeometry = new THREE.CapsuleGeometry(0.15, 1.2, 16, 32); // radius, length, cap segments, radial segments
    } else {
      barGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 32);
    }

    // First bar (\) - more obtuse angle
    const bar1 = new THREE.Mesh(barGeometry, material);
    bar1.rotation.z = Math.PI / 4.5; // ~40 degrees, more open than 45

    // Second bar (/) - more obtuse angle
    const bar2 = new THREE.Mesh(barGeometry, material);
    bar2.rotation.z = -Math.PI / 4.5; // ~-40 degrees

    // Group the bars
    const xGroup = new THREE.Group();
    xGroup.add(bar1);
    xGroup.add(bar2);
    scene.add(xGroup);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(2, 2, 5);
    scene.add(light);
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    // Mouse interaction state
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      targetRotationY = (mouseX * Math.PI) / 2;
      targetRotationX = (-mouseY * Math.PI) / 2;
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    // Animation loop (no auto-rotation)
    let frameId;
    const animate = () => {
      xGroup.rotation.x += (targetRotationX - xGroup.rotation.x) * 0.1;
      xGroup.rotation.y += (targetRotationY - xGroup.rotation.y) * 0.1;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
      }}
    />
  );
}
