import React from "react";
import Confetti from "react-confetti-boom";

export function ConfettiComponentBottom() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "0",
        width: "100%",
      }}
    >
      <Confetti
        mode="boom"
        particleCount={300}
        shapeSize={20}
        deg={270} // Launch particles upwards
        effectCount={Infinity}
        effectInterval={3000}
        spreadDeg={80}
        x={0.5}
        y={1}
        launchSpeed={3}
        colors={["#00FFFF", "#FF6600", "#00FF00", "#FFFF00"]}
      />
    </div>
  );
}

export function ConfettiComponentTop() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "0",
        width: "100%",
      }}
    >
      <Confetti
        mode="fall"
        particleCount={100}
        shapeSize={12}
        colors={["#FF0000", "#FF6600", "#00FF00", "#FF00FF"]}
      />
    </div>
  );
}




