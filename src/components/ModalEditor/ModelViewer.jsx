import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";
import { BallTriangle } from "react-loader-spinner";

const ModelLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

const ModelViewer = ({ modelPath, scale = 0.2, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={0.5} />
      <pointLight position={[10, 10, 10]} />
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
