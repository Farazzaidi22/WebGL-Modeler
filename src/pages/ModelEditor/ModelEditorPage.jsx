import React from "react";
import ModelViewer from "../../components/ModalEditor/ModelViewer";
import ColorWheel from "../../components/ColorWheel/ColorWheel";

import { FaBatteryQuarter, FaRegArrowAltCircleRight } from "react-icons/fa";
import { BsBroadcast } from "react-icons/bs";

export const ModelEditorPage = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center" /* Add this line */,
          position: "fixed" /* Add this line */,
          top: 0 /* Add this line */,
          left: 0 /* Add this line */,
          width: "100%" /* Add this line */,
          padding: "5px" /* Adjust the padding value as needed */,

          // border: "2px solid red",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center" /* Add this line */,
            width: "20%",
          }}
        >
          <img
            src="/logo/logo.jpg"
            alt="Logo"
            style={{
              width: "100%",
              height: "auto",
            }} /* Adjust the image size as needed */
          />
        </div>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center" /* Add this line */,
            width: "80%",
            margin: 0 /* Add this line to remove default margin */,
          }}
        >
          Alert and confirmation
        </h3>
      </div>

      <h5
        style={{
          padding: "2%",
          textAlign: "left",
          width: "50%",
          marginTop: "8%",
          // border: "1px solid red",
        }}
      >
        Person Name, Section Name. User Id and Micro controller id
      </h5>

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
          <BsBroadcast style={{ marginBottom: "300px" }} color="white" />
        </div>

        <div
          style={{
            // border: "2px solid green",

            height: "50vh",
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
          <FaBatteryQuarter color="white" />

          <FaRegArrowAltCircleRight
            style={{ marginBottom: "200px" }}
            color="white"
          />
        </div>
      </div>

      <ColorWheel />
    </div>
  );
};
