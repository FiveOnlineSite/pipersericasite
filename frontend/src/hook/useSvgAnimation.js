// hooks/useSvgAnimation.js
import { useEffect } from "react";

export const useSvgAnimation = (selector, trigger) => {
  useEffect(() => {
    const svg = document.querySelector(selector);
    if (svg) {
      svg.classList.remove("active");
      void svg.offsetWidth; // Force reflow to restart animation
      svg.classList.add("active");
    }
  }, [trigger]);
};
