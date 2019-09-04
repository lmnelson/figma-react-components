import * as React from "react";
import PropTypes from "prop-types";
const classNames = require("classnames");
import "./loaderIndeterminate.css";

const allowedIndicatorSizes = ["small", "medium", "large"];

interface progressIndicatorProps {
  size: string;
}

const FigmaLoaderIndeterminate = (props: progressIndicatorProps) => {
  const cssClasses = classNames({
    "figma_loader--variant-indeterminate": true,
    "figma_loader--size-small": props.size === "small",
    "figma_loader--size-medium": props.size === "medium",
    "figma_loader--size-large": props.size === "large"
  });
  return (
    <span className={cssClasses}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 8C15.5 9.48336 15.0601 10.9334 14.236 12.1668C13.4119 13.4001 12.2406 14.3614 10.8701 14.9291C9.49968 15.4968 7.99168 15.6453 6.53682 15.3559C5.08197 15.0665 3.74559 14.3522 2.6967 13.3033C1.64781 12.2544 0.9335 10.918 0.64411 9.46318C0.354721 8.00832 0.503246 6.50032 1.0709 5.12987C1.63856 3.75943 2.59985 2.58809 3.83322 1.76398C5.06659 0.939867 6.51664 0.5 8 0.5"
          stroke="black"
        />
      </svg>
    </span>
  );
};

FigmaLoaderIndeterminate.propTypes = {
  size: PropTypes.oneOf([allowedIndicatorSizes])
};

FigmaLoaderIndeterminate.defaultProps = {
  size: "small"
};

export default FigmaLoaderIndeterminate;
