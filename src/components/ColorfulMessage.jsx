import React from "react";

const ColorfulMessage = (ｐrops) => {
  const { color, children } = ｐrops;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
