import React from "react";
import { FaAnchor, FaPiedPiperAlt } from "react-icons/fa";

import { GiAlienStare, GiAnkh, GiAngelWings, GiLadybug } from "react-icons/gi";

import Wheel from "@uiw/react-color-wheel";

const ColorWheel = () => {
  const [hsva, setHsva] = React.useState({ h: 0, s: 0, v: 68, a: 1 });

  const iconPositions = [
    { top: "100%", transform: "translate(40%, -250%)" },
    { top: "90%", transform: "translate(-10%, -100%)" },
    { top: "90%" },
    { top: "85%", transform: "translate(0%, 0%)" },
    { top: "90%", transform: "rotate(40deg) translate(-30%, -90%)" },
    { top: "85%", transform: "translate(-20%, -250%)" },
  ];

  const renderIcons = () => {
    return (
      <div style={styles.iconContainer}>
        {iconPositions.map((position, index) => (
          <div
            key={index}
            style={{
              ...styles.icon,
              top: position.top,
              transform: position.transform,
            }}
          >
            {getIconByIndex(index)}
          </div>
        ))}
      </div>
    );
  };

  const getIconByIndex = (index) => {
    switch (index) {
      case 0:
        return <GiLadybug color="white" />;
      case 1:
        return <GiAlienStare color="white" />;
      case 2:
        return <FaAnchor color="white" />;
      case 3:
        return <GiAngelWings color="white" />;
      case 4:
        return <GiAnkh color="white" />;
      case 5:
        return <FaPiedPiperAlt color="white" />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.colorWheelContainer}>
      <Wheel
        color={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva });
        }}
        style={{ width: "160px", height: "160px", marginBottom: "10%" }}
      />
      {renderIcons()}
    </div>
  );
};

export default ColorWheel;

const styles = {
  colorWheelContainer: {
    position: "relative",
    display: "inline-block",
    padding: "3%",
  },
  iconContainer: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "28px",
    margin: "0 8px",
  },
};
