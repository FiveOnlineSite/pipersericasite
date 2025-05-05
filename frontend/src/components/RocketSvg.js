import React, { useEffect } from "react";
import { useSvgAnimation } from "../hook/useSvgAnimation";
import "../../src/rocket.css";

const RocketSvg = ({ animateTrigger }) => {
  useSvgAnimation(".rocket-svg", animateTrigger);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="100%"
        height="100%"
        version="1.1"
        className="rocket-svg active"
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
          <g id="_1440508436688">
            <line
              class="fil0 str0 rocket-elem-1"
              x1="644.91"
              y1="319.36"
              x2="15"
              y2="319.36"
            ></line>
            <line
              class="fil0 str0 rocket-elem-2"
              x1="1065"
              y1="319.36"
              x2="757.71"
              y2="319.36"
            ></line>
            <polygon
              class="fil0 str0 rocket-elem-3"
              points="674.02,176.25 732.16,176.25 732.16,191.23 674.02,191.23 "
            ></polygon>
            <path
              class="fil0 str0 rocket-elem-4"
              d="M702.99 -0.14c-43.23,45.61 -46.32,116.08 -28.97,176.39l58.14 0c16.3,-56.12 12.33,-131.07 -29.17,-176.39z"
            ></path>
            <path
              class="fil0 str0 rocket-elem-5"
              d="M674.02 191.23l-23.47 39.91 0 -61.08c1.36,-11.61 6.77,-20.64 16.21,-27.09"
            ></path>
            <path
              class="fil0 str0 rocket-elem-6"
              d="M732.16 191.23l23.46 39.91 0 -61.08c-1.36,-11.61 -6.77,-20.64 -16.21,-27.09"
            ></path>
            <path
              class="fil0 str0 rocket-elem-7"
              d="M723.07 29.31c-13.68,3.14 -27.36,3.3 -41.04,0"
            ></path>
            <path
              class="fil0 str0 rocket-elem-8"
              d="M678.21 37.22c17.15,3.49 33.28,3.32 48.53,0"
            ></path>
            <g>
              <circle
                class="fil0 str0 rocket-elem-9"
                cx="702.62"
                cy="80.07"
                r="19.07"
              ></circle>
              <circle
                class="fil0 str0 rocket-elem-10"
                cx="702.62"
                cy="80.07"
                r="12.69"
              ></circle>
            </g>
            <g>
              <line
                class="fil0 str0 rocket-elem-11"
                x1="702.62"
                y1="123.84"
                x2="702.62"
                y2="113.12"
              ></line>
              <line
                class="fil0 str0 rocket-elem-12"
                x1="702.62"
                y1="134.01"
                x2="702.62"
                y2="126.67"
              ></line>
              <line
                class="fil0 str0 rocket-elem-13"
                x1="702.62"
                y1="145.4"
                x2="702.62"
                y2="138.06"
              ></line>
              <line
                class="fil0 str0 rocket-elem-14"
                x1="702.62"
                y1="164.14"
                x2="702.62"
                y2="148.26"
              ></line>
            </g>
            <g>
              <line
                class="fil0 str0 rocket-elem-15"
                x1="689.71"
                y1="319.36"
                x2="689.71"
                y2="191.23"
              ></line>
              <line
                class="fil0 str0 rocket-elem-16"
                x1="716.81"
                y1="319.36"
                x2="716.81"
                y2="191.23"
              ></line>
              <line
                class="fil0 str0 rocket-elem-17"
                x1="698.44"
                y1="350.14"
                x2="698.44"
                y2="200.97"
              ></line>
              <line
                class="fil0 str0 rocket-elem-18"
                x1="706.8"
                y1="310.8"
                x2="706.8"
                y2="200.97"
              ></line>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default RocketSvg;
