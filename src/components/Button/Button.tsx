import * as React from "react";
const classNames = require("classnames");
const styles = require("./button.css");

interface ButtonProps {
  children: any;
  theme: any;
  rest?: any;
}

const FigmaButton = (props: ButtonProps) => {
  const cssClasses = classNames({
    figma_button: true,
    "figma_button--theme-primary": props.theme.primary,
    "figma_button--theme-secondary": props.theme.secondary
  });
  return (
    <FigmaButton theme={props.theme} className={cssClasses} {...props.rest}>
      {props.children}
    </FigmaButton>
  );
};

export default FigmaButton;
