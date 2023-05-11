import React from "react";
import ColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";

const ColorWheel = () => {
  const [color, setColor] = React.useState({
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const onInput = (hue) => {
    setColor((prev) => {
      return {
        ...prev,
        hue,
      };
    });
  };

  return (
    <ColorPicker
      {...color}
      onInput={onInput}
      style={{ width: "180px", height: "180px", fontSize: "12px" }}
    />
  );
};

export default ColorWheel;
