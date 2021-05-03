import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import FigmaSectionTitle from "./SectionTitle";

const stories = storiesOf("Controls", module);
stories.addDecorator(withKnobs);

stories.add("Section Title", () => {
  const sectionTitleText = text("Label Text", "Label");
  const sectionTitleSizes = radios(
    "Size",
    {
      Standard: "standard",
      Large: "large"
    },
    "standard"
  );

  return (
    <FigmaSectionTitle size={sectionTitleSizes}>
      {sectionTitleText}
    </FigmaSectionTitle>
  );
});
