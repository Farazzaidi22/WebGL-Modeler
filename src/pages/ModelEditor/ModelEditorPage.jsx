import ModelViewer from "../../components/ModalEditor/ModelViewer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";

export const ModelEditorPage = () => {
  return (
    // <Canvas
    //   camera={{ position: [2, 0, 12.25], fov: 15 }}
    //   style={{
    //     backgroundColor: "#111a21",
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    // >
    //   <ambientLight intensity={1.25} />
    //   <ambientLight intensity={0.1} />
    //   <directionalLight intensity={0.4} />
    //   <Suspense fallback={null}>
    //     <ModelViewer />
    //   </Suspense>
    //   <OrbitControls />
    // </Canvas>

    // <Canvas>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <mesh>
    //     <boxBufferGeometry args={[1, 1, 1]} />
    //     <meshStandardMaterial color="blue" />
    //   </mesh>
    // </Canvas>

    <div
      style={{
        height: "100vh",
        // width: "100vw",
      }}
    >
      <ModelViewer scale={0.2} modelPath={"/3dModels/Breathing Idle.glb"} />
    </div>
  );
};
