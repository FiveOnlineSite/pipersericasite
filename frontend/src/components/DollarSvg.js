import React, { useEffect } from "react";
import "../../src/dollar.css";
import { useSvgAnimation } from "../hook/useSvgAnimation";

const DollarSvg = ({ animateTrigger }) => {
  useSvgAnimation(".dollar-svg", animateTrigger);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="100%"
        height="100%"
        version="1.1"
        className="dollar-svg active"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        viewBox="0 0 1080 350"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsXodm="http://www.corel.com/coreldraw/odm/2003"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0 str0 dollar-elem-1"
            d="M1065 339.89l-290.73 0c6.59,-3.72 12.58,-8.01 18.09,-13.2 20.68,-19.5 30.98,-42.62 30.98,-69.38 0,-17.05 -4.82,-32.47 -14.45,-46.26 -9.71,-13.86 -21.58,-23.86 -35.66,-30.02 -14.08,-6.22 -36.25,-12.45 -66.49,-18.67 -18.16,-3.78 -29.72,-8.08 -34.91,-12.98 -5.12,-4.89 -7.71,-10.89 -7.71,-18.01 0,-17.79 13.79,-26.68 41.36,-26.68 25.8,0 42.7,11.71 50.7,35.13l59.15 -19.71c-14.16,-39.49 -43.31,-62.17 -87.48,-68.1l0 -41.9 -47.03 0 0 41.83c-22.64,3.27 -41.32,11.8 -55.98,25.62 -19.2,18.08 -28.77,40.32 -28.77,66.64 0,26.09 8.01,45.88 24.09,59.37 16.09,13.56 43,24.16 80.8,31.95 20.24,4.22 33.95,8.67 40.99,13.41 7.12,4.82 10.67,11.49 10.67,20.24 0,8.52 -3.92,15.86 -11.71,22.01 -7.78,6.16 -19.64,9.2 -35.58,9.2 -32.98,0 -53.07,-13.79 -60.33,-41.37l-64.49 14.53c6.82,27.28 20.9,47.81 42.25,61.67 2.44,1.58 4.93,3.07 7.49,4.46l-615.25 0.22"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default DollarSvg;
