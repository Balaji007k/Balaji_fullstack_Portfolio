
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Box, Torus } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const FloatingShape = ({ position, geometry, color, scale = 1 }: { 
  position: [number, number, number];
  geometry: 'sphere' | 'box' | 'torus';
  color: string;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const GeometryComponent = useMemo(() => {
    switch (geometry) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.5 * scale, 32, 32]} position={position}>
          <meshStandardMaterial color={color} transparent opacity={0.6} wireframe />
        </Sphere>;
      case 'box':
        return <Box ref={meshRef} args={[0.8 * scale, 0.8 * scale, 0.8 * scale]} position={position}>
          <meshStandardMaterial color={color} transparent opacity={0.4} wireframe />
        </Box>;
      case 'torus':
        return <Torus ref={meshRef} args={[0.6 * scale, 0.2 * scale, 16, 100]} position={position}>
          <meshStandardMaterial color={color} transparent opacity={0.5} wireframe />
        </Torus>;
      default:
        return null;
    }
  }, [geometry, color, scale, position]);

  return (
    <Float
      speed={1 + Math.random()}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      {GeometryComponent}
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3b82f6"
        size={0.05}
        transparent
        opacity={0.6}
      />
    </points>
  );
};

export const Hero3DBackground = () => {
  const shapes = useMemo(() => [
    { position: [-4, 2, -2] as [number, number, number], geometry: 'sphere' as const, color: '#3b82f6', scale: 1.2 },
    { position: [3, -1, -1] as [number, number, number], geometry: 'box' as const, color: '#8b5cf6', scale: 0.8 },
    { position: [-2, -2, -3] as [number, number, number], geometry: 'torus' as const, color: '#06b6d4', scale: 1 },
    { position: [4, 3, -4] as [number, number, number], geometry: 'sphere' as const, color: '#10b981', scale: 0.6 },
    { position: [-3, 1, -5] as [number, number, number], geometry: 'box' as const, color: '#f59e0b', scale: 1.1 },
    { position: [2, -3, -2] as [number, number, number], geometry: 'torus' as const, color: '#ef4444', scale: 0.9 },
  ], []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
        
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position}
            geometry={shape.geometry}
            color={shape.color}
            scale={shape.scale}
          />
        ))}
        
        <ParticleField />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.1}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
