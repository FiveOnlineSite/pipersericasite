import React, { useRef, useEffect, useState } from "react";
import "../../../src/svg.css";

const SvgComponent = () => {
  useEffect(() => {
    // This will run after the component is mounted
    const svgElement = document.querySelector("svg");
    if (svgElement) {
      svgElement.classList.add("active");
    }
  }, []); // Empty dependency array to run only once after mount

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1080 350"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        // xmlns="http://www.w3.org/2000/svg"
        // xmlSpace="preserve"
        // width="100%"
        // height="100%"
        // version="1.1"
        // viewBox="0 0 1080 350"
        // style={{
        //   shapeRendering: "geometricPrecision",
        //   textRendering: "geometricPrecision",
        //   imageRendering: "optimizeQuality",
        //   fillRule: "evenodd",
        //   clipRule: "evenodd",
        // }}
        // xmlnsXlink="http://www.w3.org/1999/xlink"
        // xmlnsXodm="http://www.corel.com/coreldraw/odm/2003"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <g id="_1440683975952">
            <polyline
              className="fil0 str0 svg-elem-1"
              points="601,181.51 486.97,181.51 486.97,335.43 15,335.43 "
            ></polyline>
            <polyline
              className="fil0 str0 svg-elem-2"
              points="1065,335.43 916.87,335.43 916.87,181.51 "
            ></polyline>
            <polygon
              className="fil0 str0 svg-elem-3"
              points="470.79,170.35 601,170.35 601,181.51 480.85,181.51 "
            ></polygon>
            <line
              className="fil0 str0 svg-elem-4"
              x1="601"
              y1="134.53"
              x2="600.82"
              y2="335.23"
            ></line>
            <line
              className="fil0 str0 svg-elem-5"
              x1="802.57"
              y1="134.27"
              x2="802.4"
              y2="334.97"
            ></line>
            <polygon
              className="fil0 str0 svg-elem-6"
              points="932.88,170.35 802.68,170.35 802.68,181.51 922.82,181.51 "
            ></polygon>
            <polyline
              className="fil0 str0 svg-elem-7"
              points="573.9,335.43 573.9,207.85 511.69,207.85 511.69,335.43 "
            ></polyline>
            <path
              className="fil0 str0 svg-elem-8"
              d="M562.97 335.43l0 -92.71c-5.27,-31.96 -36.51,-30.32 -40.35,0l0 92.71"
            ></path>
            <polyline
              className="fil0 str0 svg-elem-9"
              points="827.96,335.43 827.96,207.85 890.17,207.85 890.17,335.43 "
            ></polyline>
            <path
              className="fil0 str0 svg-elem-10"
              d="M838.89 335.43l0 -92.71c3.85,-30.32 35.08,-31.96 40.35,0l0 92.71"
            ></path>
            <line
              className="fil0 str0 svg-elem-11"
              x1="486.97"
              y1="197.26"
              x2="600.94"
              y2="197.26"
            ></line>
            <line
              className="fil0 str0 svg-elem-12"
              x1="499.37"
              y1="181.51"
              x2="499.37"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-13"
              x1="512.5"
              y1="181.51"
              x2="512.5"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-14"
              x1="525.62"
              y1="181.51"
              x2="525.62"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-15"
              x1="538.75"
              y1="181.51"
              x2="538.75"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-16"
              x1="551.87"
              y1="181.51"
              x2="551.87"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-17"
              x1="565"
              y1="181.51"
              x2="565"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-18"
              x1="578.13"
              y1="181.51"
              x2="578.13"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-19"
              x1="591.25"
              y1="181.51"
              x2="591.25"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-20"
              x1="916.49"
              y1="197.26"
              x2="802.52"
              y2="197.26"
            ></line>
            <line
              className="fil0 str0 svg-elem-21"
              x1="904.09"
              y1="181.51"
              x2="904.09"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-22"
              x1="890.96"
              y1="181.51"
              x2="890.96"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-23"
              x1="877.84"
              y1="181.51"
              x2="877.84"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-24"
              x1="864.71"
              y1="181.51"
              x2="864.71"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-25"
              x1="851.59"
              y1="181.51"
              x2="851.59"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-26"
              x1="838.46"
              y1="181.51"
              x2="838.46"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-27"
              x1="825.33"
              y1="181.51"
              x2="825.33"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-28"
              x1="812.21"
              y1="181.51"
              x2="812.21"
              y2="196.86"
            ></line>
            <line
              className="fil0 str0 svg-elem-29"
              x1="644.99"
              y1="176.36"
              x2="644.81"
              y2="335.23"
            ></line>
            <line
              className="fil0 str0 svg-elem-30"
              x1="644.97"
              y1="194.38"
              x2="600.95"
              y2="194.38"
            ></line>
            <line
              className="fil0 str0 svg-elem-31"
              x1="644.94"
              y1="224.19"
              x2="600.92"
              y2="224.19"
            ></line>
            <line
              className="fil0 str0 svg-elem-32"
              x1="644.92"
              y1="254"
              x2="600.89"
              y2="254"
            ></line>
            <line
              className="fil0 str0 svg-elem-33"
              x1="644.89"
              y1="283.8"
              x2="600.87"
              y2="283.8"
            ></line>
            <line
              className="fil0 str0 svg-elem-34"
              x1="644.87"
              y1="313.61"
              x2="600.84"
              y2="313.61"
            ></line>
            <line
              className="fil0 str0 svg-elem-35"
              x1="758.37"
              y1="176.36"
              x2="758.55"
              y2="335.23"
            ></line>
            <line
              className="fil0 str0 svg-elem-36"
              x1="802.41"
              y1="194.38"
              x2="758.39"
              y2="194.38"
            ></line>
            <line
              className="fil0 str0 svg-elem-37"
              x1="802.44"
              y1="224.19"
              x2="758.42"
              y2="224.19"
            ></line>
            <line
              className="fil0 str0 svg-elem-38"
              x1="802.47"
              y1="254"
              x2="758.44"
              y2="254"
            ></line>
            <line
              className="fil0 str0 svg-elem-39"
              x1="802.49"
              y1="283.8"
              x2="758.47"
              y2="283.8"
            ></line>
            <line
              className="fil0 str0 svg-elem-40"
              x1="802.52"
              y1="313.61"
              x2="758.5"
              y2="313.61"
            ></line>
            <path
              className="fil0 str0 svg-elem-41"
              d="M745.77 335.43l0 -89.84c-7.89,-73.78 -79.11,-75.18 -88.18,0l0 89.84"
            ></path>
            <circle
              className="fil0 str0 svg-elem-42"
              cx="657.85"
              cy="191.22"
              r="3.94"
            ></circle>
            <circle
              className="fil0 str0 svg-elem-43"
              cx="745.65"
              cy="191.22"
              r="3.94"
            ></circle>
            <line
              className="fil0 str0 svg-elem-44"
              x1="601"
              y1="176.36"
              x2="802.68"
              y2="176.36"
            ></line>
            <line
              className="fil0 str0 svg-elem-45"
              x1="601"
              y1="170.25"
              x2="802.68"
              y2="170.25"
            ></line>
            <polyline
              className="fil0 str0 svg-elem-46"
              points="486.97,170.35 486.97,134.53 607.68,134.53 "
            ></polyline>
            <line
              className="fil0 str0 svg-elem-47"
              x1="633.41"
              y1="134.53"
              x2="770.32"
              y2="134.53"
            ></line>
            <polyline
              className="fil0 str0 svg-elem-48"
              points="916.87,170.35 916.87,134.53 796.04,134.53 "
            ></polyline>
            <line
              className="fil0 str0 svg-elem-49"
              x1="916.87"
              y1="145.05"
              x2="486.97"
              y2="145.05"
            ></line>
            <line
              className="fil0 str0 svg-elem-50"
              x1="649.63"
              y1="145.05"
              x2="649.63"
              y2="170.25"
            ></line>
            <line
              className="fil0 str0 svg-elem-51"
              x1="661.75"
              y1="145.05"
              x2="661.75"
              y2="170.25"
            ></line>
            <line
              className="fil0 str0 svg-elem-52"
              x1="681.15"
              y1="145.05"
              x2="681.15"
              y2="170.25"
            ></line>
            <line
              className="fil0 str0 svg-elem-53"
              x1="693.28"
              y1="145.05"
              x2="693.28"
              y2="170.25"
            ></line>
            <line
              className="fil0 str0 svg-elem-54"
              x1="712.92"
              y1="145.05"
              x2="712.92"
              y2="170.25"
            ></line>
            <line
              className="fil0 str0 svg-elem-55"
              x1="725.04"
              y1="145.05"
              x2="725.04"
              y2="170.25"
            ></line>
            <line
              className="fil0 str0 svg-elem-56"
              x1="744.45"
              y1="145.05"
              x2="744.45"
              y2="170.25"
            ></line>
            <line
              className="fil0 str0 svg-elem-57"
              x1="756.57"
              y1="145.05"
              x2="756.57"
              y2="170.25"
            ></line>
            <path
              className="fil0 str0 svg-elem-58"
              d="M607.68 145.05l25.73 0 0 -99.75c-2.06,-28.55 -23.51,-28.01 -25.73,0l0 99.75z"
            ></path>
            <line
              className="fil0 str0 svg-elem-59"
              x1="607.68"
              y1="45.3"
              x2="633.41"
              y2="45.3"
            ></line>
            <line
              className="fil0 str0 svg-elem-60"
              x1="620.59"
              y1="24.09"
              x2="620.59"
              y2="14.57"
            ></line>
            <line
              className="fil0 str0 svg-elem-61"
              x1="607.68"
              y1="85.76"
              x2="796.04"
              y2="85.76"
            ></line>
            <path
              className="fil0 str0 svg-elem-62"
              d="M614.81 85.76l11.46 0 0 -26.09c-0.61,-8.96 -10.94,-8.87 -11.46,0l0 26.09z"
            ></path>
            <path
              className="fil0 str0 svg-elem-63"
              d="M770.32 145.05l25.72 0 0 -99.75c-2.06,-28.55 -23.51,-28.01 -25.72,0l0 99.75z"
            ></path>
            <line
              className="fil0 str0 svg-elem-64"
              x1="770.32"
              y1="45.3"
              x2="796.04"
              y2="45.3"
            ></line>
            <line
              className="fil0 str0 svg-elem-65"
              x1="783.22"
              y1="24.09"
              x2="783.22"
              y2="14.57"
            ></line>
            <path
              className="fil0 str0 svg-elem-66"
              d="M777.45 85.76l11.45 0 0 -26.09c-0.6,-8.96 -10.94,-8.87 -11.45,0l0 26.09z"
            ></path>
            <line
              className="fil0 str0 svg-elem-67"
              x1="633.41"
              y1="67.99"
              x2="770.32"
              y2="67.99"
            ></line>
            <line
              className="fil0 str0 svg-elem-68"
              x1="644.82"
              y1="67.99"
              x2="644.82"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-69"
              x1="656.23"
              y1="67.99"
              x2="656.23"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-70"
              x1="667.63"
              y1="67.99"
              x2="667.63"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-71"
              x1="679.04"
              y1="67.99"
              x2="679.04"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-72"
              x1="690.45"
              y1="67.99"
              x2="690.45"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-73"
              x1="701.86"
              y1="67.99"
              x2="701.86"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-74"
              x1="713.27"
              y1="67.99"
              x2="713.27"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-75"
              x1="724.68"
              y1="67.99"
              x2="724.68"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-76"
              x1="736.09"
              y1="67.99"
              x2="736.09"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-77"
              x1="747.5"
              y1="67.99"
              x2="747.5"
              y2="85.76"
            ></line>
            <line
              className="fil0 str0 svg-elem-78"
              x1="758.91"
              y1="67.99"
              x2="758.91"
              y2="85.76"
            ></line>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SvgComponent;
