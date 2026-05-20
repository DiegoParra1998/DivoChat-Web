'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, PerspectiveCamera, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function DivoMesh() {
  const meshRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth floating and slight rotation based on mouse
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    
    const mouseX = (state.mouse.x * Math.PI) / 10;
    const mouseY = (state.mouse.y * Math.PI) / 10;
    
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mouseY, 0.1);
  });

  return (
    <group ref={meshRef}>
      {/* Main Body - Rounded Box */}
      <RoundedBox
        ref={bodyRef}
        args={[2, 1.4, 0.8]} // Width, Height, Depth
        radius={0.6} // Border radius
        smoothness={10} // Subdivisions
      >
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.1} 
          metalness={0.05}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </RoundedBox>

      {/* Bubble Tail */}
      <mesh position={[0.6, -0.6, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.3, 0.6, 4]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} />
      </mesh>

      {/* Eyes */}
      <group position={[-0.4, 0, 0.35]}>
        {/* Left Eye */}
        <mesh position={[-0.4, 0, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshBasicMaterial color="#1a1a1a" />
        </mesh>
        {/* Right Eye */}
        <mesh position={[0.4, 0, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshBasicMaterial color="#1a1a1a" />
        </mesh>
      </group>
    </group>
  );
}

export default function Divo3D() {
  return (
    <div className="w-full h-full min-h-[300px] relative cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Environment preset="city" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DivoMesh />
        </Float>
      </Canvas>
    </div>
  );
}
