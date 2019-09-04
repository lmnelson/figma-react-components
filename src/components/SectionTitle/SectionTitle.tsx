import * as React from "react";
import PropTypes from "prop-types";
const classNames = require("classnames");
import "./sectionTitle.css";

const allowedTitleSizes = ["standard", "large"];

interface sectionTitleProps {
  children: string;
  size: string;
}

const FigmaSectionTitle = (props: sectionTitleProps) => {
  const cssClasses = classNames({
    "figma_section-title": true,
    "figma_section-title--size-standard": props.size === "standard",
    "figma_section-title--size-large": props.size === "large"
  });
  return <h1 className={cssClasses}>{props.children}</h1>;
};

FigmaSectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf([allowedTitleSizes])
};

FigmaSectionTitle.defaultProps = {
  size: "standard"
};

export default FigmaSectionTitle;
