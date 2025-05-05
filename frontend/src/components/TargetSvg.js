import React, { useRef, useEffect, useState } from "react";
import { useSvgAnimation } from "../hook/useSvgAnimation";
import "../../src/target.css";

const TargetSvg = ({ animateTrigger }) => {
  useSvgAnimation(".target-svg", animateTrigger);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="100%"
        height="100%"
        version="1.1"
        className="target-svg active"
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
          <g id="_1440503328656">
            <line
              class="fil0 str0 target-elem-1"
              x1="551.42"
              y1="322.24"
              x2="15"
              y2="322.24"
            ></line>
            <path
              class="fil0 str0 target-elem-2"
              d="M743.18 322.24c40.53,-29.69 64.53,-78.53 64.53,-128.59 0,-88.57 -71.8,-160.37 -160.37,-160.37 -88.57,0 -160.37,71.8 -160.37,160.37 0,52.49 25.22,99.08 64.19,128.34"
            ></path>
            <line
              class="fil0 str0 target-elem-3"
              x1="1065"
              y1="322.24"
              x2="743.18"
              y2="322.24"
            ></line>
            <g>
              <circle
                class="fil0 str0 target-elem-4"
                cx="647.34"
                cy="193.65"
                r="108.65"
              ></circle>
              <circle
                class="fil0 str0 target-elem-5"
                cx="647.34"
                cy="193.65"
                r="63.6"
              ></circle>
            </g>
            <line
              class="fil0 str0 target-elem-6"
              x1="904.96"
              y1="44.92"
              x2="647.34"
              y2="193.65"
            ></line>
            <g>
              <polyline
                class="fil0 str0 target-elem-7"
                points="664.51,197.87 647.34,193.65 651.56,176.49 "
              ></polyline>
              <polyline
                class="fil0 str0 target-elem-8"
                points="905.52,58.72 888.36,54.5 892.58,37.34 "
              ></polyline>
              <polyline
                class="fil0 str0 target-elem-9"
                points="922.12,49.14 904.96,44.92 909.18,27.75 "
              ></polyline>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TargetSvg;
