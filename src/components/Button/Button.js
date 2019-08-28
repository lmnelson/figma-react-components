import * as React from "react";
const classNames = require("classnames");
const styles = require("./button.css");
const FigmaButton = (props) => {
    const cssClasses = classNames({
        figma_button: true,
        "figma_button--theme-primary": props.theme.primary,
        "figma_button--theme-secondary": props.theme.secondary
    });
    return (React.createElement(FigmaButton, Object.assign({ theme: props.theme, className: cssClasses }, props.rest), props.children));
};
export default FigmaButton;
