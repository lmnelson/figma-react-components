import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import FigmaLabel from "./Label";

const stories = storiesOf("Controls", module);
stories.addDecorator(withKnobs);

stories.add("Label", () => {
  const labelText = text("Label Text", "Label");

  return <FigmaLabel>{labelText}</FigmaLabel>;
});
