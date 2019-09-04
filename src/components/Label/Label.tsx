import * as React from "react";
import PropTypes from "prop-types";
const classNames = require("classnames");
import "./label.css";

interface LabelProps {
  children: string;
}

const FigmaLabel = (props: LabelProps) => {
  const cssClasses = classNames({
    figma_label: true
  });
  return <label className={cssClasses}>{props.children}</label>;
};

FigmaLabel.propTypes = {
  children: PropTypes.string.isRequired
};

export default FigmaLabel;
