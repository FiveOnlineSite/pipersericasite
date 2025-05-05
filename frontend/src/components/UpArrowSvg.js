import React, { useEffect } from "react";
import { useSvgAnimation } from "../hook/useSvgAnimation";
import "../../src/arrows.css";

const UpArrowSvg = ({ animateTrigger }) => {
  useSvgAnimation(".arrow-svg", animateTrigger);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="100%"
        height="100%"
        version="1.1"
        className="arrow-svg active"
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
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <polyline
            class="fil0 str0 arrow-elem-1"
            points="1065,343.56 916.87,343.56 916.87,59.47 929.25,59.47 890.36,6.44 851.47,59.47 863.84,59.47 863.84,331.44 822.66,331.44 822.66,122.53 835.59,122.53 796.7,69.5 757.81,122.4 769.63,122.4 769.63,331.44 728.44,331.44 728.44,185.15 742.93,185.15 701.92,132.12 663.03,185.15 675.41,185.15 675.41,331.44 634.4,331.44 634.4,247.72 645.68,247.72 606.79,194.69 567.9,247.91 581.19,247.91 581.19,331.44 540,331.44 540,310.66 552.38,310.66 513.49,257.63 474.6,310.66 486.97,310.66 486.97,343.56 15,343.56 "
          ></polyline>
        </g>
      </svg>
    </div>
  );
};

export default UpArrowSvg;
