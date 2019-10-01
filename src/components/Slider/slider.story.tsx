import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  radios,
  boolean,
  number
} from "@storybook/addon-knobs";
import FigmaSlider from "./Slider";

const stories = storiesOf("Controls", module);
stories.addDecorator(withKnobs);

stories.add("Slider", () => {
  const showCurrentValue = boolean("Show Current Value", false);
  const variant = radios(
    "Variant",
    { Inline: "inline", Stacked: "stacked" },
    "inline"
  );
  const min = number("Min", 0);
  const max = number("Max", 1000);
  const step = number("Step", 1);

  return (
    <FigmaSlider
      min={min}
      max={max}
      step={step}
      showCurrentValue={showCurrentValue}
      variant={variant}
    />
  );
});
