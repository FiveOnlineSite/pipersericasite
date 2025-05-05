import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/Rocket_2022.json";

const RocketAnimation = ({ isActive }) => {
  const lottieRef = useRef();

  useEffect(() => {
    if (isActive && lottieRef.current) {
      lottieRef.current.stop(); // optional reset
      lottieRef.current.play(); // play when tab becomes active
    }
  }, [isActive]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
      />
    </div>
  );
};

export default RocketAnimation;
