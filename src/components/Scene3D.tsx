
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const FloatingCube = () => {
  return (
    <Float
      speed={1.4}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <motion.mesh
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#3B82F6"
          transparent
          opacity={0.8}
          wireframe
        />
      </motion.mesh>
    </Float>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <motion.mesh
        position={position}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color="#8B5CF6"
          transparent
          opacity={0.6}
        />
      </motion.mesh>
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
