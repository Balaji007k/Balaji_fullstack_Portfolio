
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

// Extend JSX namespace for Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      boxGeometry: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float
      speed={1.4}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#3B82F6"
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color="#8B5CF6"
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

export const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingCube />
        <FloatingSphere position={[-2, 1, 0]} />
        <FloatingSphere position={[2, -1, 0]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
