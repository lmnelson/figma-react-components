import * as React from "react";
import PropTypes from "prop-types";
const classNames = require("classnames");
import FigmaLabel from "../Label/Label";
import "./slider.css";

type sliderProps = {
  variant?: string;
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  showCurrentValue?: boolean;
  labelPosition?: string;
};

class FigmaSlider extends React.Component {
  getCurrentValue = () => {};

  render(props: sliderProps) {
    const cssClasses = classNames({
      figma_slider: true,
      "figma_slider--variant-inline": props.variant === "inline",
      "figma_slider--variant-stacked": props.variant === "stacked"
    });

    return (
      <div className={cssClasses}>
        {props.min || props.min == 0 ? (
          <FigmaLabel>{props.min}</FigmaLabel>
        ) : null}
        {props.showCurrentValue ? (
          <FigmaLabel>{this.getCurrentValue()}</FigmaLabel>
        ) : null}
        <input
          type="range"
          name={props.name}
          min={props.min}
          max={props.max}
          step={props.step}
          value={this.state.currentValue}
          onChange={this.updateCurrentValue}
        />
        {props.max ? <FigmaLabel>{props.max}</FigmaLabel> : null}
      </div>
    );
  }
}

// FigmaSlider.propTypes = {
//   name: PropTypes.string,
//   min: PropTypes.number,
//   max: PropTypes.number,
//   step: PropTypes.number,
//   showCurrentValue: PropTypes.bool,
//   variant: PropTypes.string
// };

// FigmaSlider.defaultProps = {
//   variant: "inline"
// };

export default FigmaSlider;
