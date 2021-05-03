// This component wouldn't be possible without the help of
// Lea Verou and her article from Smashing Mag.
// https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/

import * as React from "react";
import PropTypes from "prop-types";
const classNames = require("classnames");
import "./loaderDeterminate.css";

const allowedIndicatorSizes = ["small", "medium", "large"];

interface progressIndicatorProps {
  size: string;
  progress: number;
}

const FigmaLoaderDeterminate = (props: progressIndicatorProps) => {
  const cssClasses = classNames({
    "figma_loader--variant-determinate": true
  });
  const svgSize = {
    small: 16,
    medium: 24,
    large: 32
  };
  const total = (2 * Math.PI * svgSize[props.size]) / 2;
  return (
    <span className={cssClasses}>
      <svg
        viewBox={`0 0 ${svgSize[props.size]} ${svgSize[props.size]}`}
        style={{
          width: svgSize[props.size],
          height: svgSize[props.size],
          border: "0.2rem solid black",
          borderRadius: "50%",
          transform: "rotate(-90deg)"
        }}
      >
        <circle
          r={svgSize[props.size] / 2}
          cx={svgSize[props.size] / 2}
          cy={svgSize[props.size] / 2}
          style={{
            fill: "transparent",
            stroke: "black",
            "stroke-width": svgSize[props.size],
            "stroke-dasharray": `${(props.progress * total) / 100} ${total}`,
            transition: "stroke-dasharray 500ms ease"
          }}
        />
      </svg>
    </span>
  );
};

FigmaLoaderDeterminate.propTypes = {
  size: PropTypes.oneOf([allowedIndicatorSizes]),
  progress: PropTypes.number.isRequired
};

FigmaLoaderDeterminate.defaultProps = {
  size: "small",
  progress: 0
};

export default FigmaLoaderDeterminate;
