import React from "react";
import ModelViewer from "../../components/ModalEditor/ModelViewer";
import ColorWheel from "../../components/ColorWheel/ColorWheel";

import { FaBatteryQuarter, FaRegArrowAltCircleRight } from "react-icons/fa";
import { BsBroadcast } from "react-icons/bs";

export const ModelEditorPage = () => {
  return (
    <div
      style={{
        // border: "2px solid red",

        width: "100%",
      }}
    >
      <h3>Alert and confirmation</h3>

      <h5>Person Name, Section Name. User Id and Micro controller id</h5>

      <div
        style={{
          // border: "2px solid blue",

          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // border: "2px solid black",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <BsBroadcast style={{ marginBottom: "300px" }} />
        </div>

        <div
          style={{
            height: "50vh",
            // border: "2px solid green",

            display: "flex",
            justifyContent: "center",
          }}
        >
          <ModelViewer
            position={[0, 0, 0]}
            scale={0.2}
            modelPath={"/3dModels/Breathing Idle.glb"}
          />
        </div>

        <div
          style={{
            // border: "2px solid black",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <FaBatteryQuarter />

          <FaRegArrowAltCircleRight style={{ marginBottom: "200px" }} />
        </div>
      </div>

      <ColorWheel />
    </div>
  );
};
