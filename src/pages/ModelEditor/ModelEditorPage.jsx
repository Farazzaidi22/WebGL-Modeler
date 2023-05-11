import React from "react";
import ModelViewer from "../../components/ModalEditor/ModelViewer";
import ColorWheel from "../../components/ColorWheel/ColorWheel";

export const ModelEditorPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        // width: "100vw",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "50vh",
          width: "100vw",
          padding: "1%",
          //   border: "1px solid red",
        }}
      >
        <ModelViewer
          position={[0, 0, 0]}
          scale={0.2}
          modelPath={"/3dModels/Breathing Idle.glb"}
        />
      </div>

      <ColorWheel />
    </div>
  );
};
