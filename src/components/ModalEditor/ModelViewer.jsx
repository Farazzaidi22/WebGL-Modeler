import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 0.2, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls
          enableZoom // Enable zooming
          zoomSpeed={0.5} // Adjust the zoom speed (optional)
          minDistance={0.1} // Set the minimum zoom distance (optional)
          maxDistance={100} // Set the maximum zoom distance (optional)
        />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
