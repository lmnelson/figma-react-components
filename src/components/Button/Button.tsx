import * as React from "react";
import PropTypes from "prop-types";
const classNames = require("classnames");
import "./button.css";

const allowedButtonVariants = [
  "primary",
  "primaryDestructive",
  "standard",
  "standardDestructive"
];

type ButtonProps = {
  children?: any;
  variant: string;
  isDisabled: boolean;
  rest?: any;
};

const FigmaButton = (props: ButtonProps) => {
  const cssClasses = classNames({
    figma_button: true,
    "figma_button--variant-primary": props.variant === "primary",
    "figma_button--variant-standard": props.variant === "standard",
    "figma_button--variant-standardDestructive":
      props.variant === "standardDestructive",
    "figma_button--variant-primaryDestructive":
      props.variant === "primaryDestructive"
  });
  return (
    <button disabled={props.isDisabled} className={cssClasses} {...props.rest}>
      {props.children}
    </button>
  );
};

FigmaButton.propTypes = {
  variant: PropTypes.oneOf([allowedButtonVariants]).isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.any.isRequired
};

export default FigmaButton;
