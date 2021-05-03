import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, radios, number } from "@storybook/addon-knobs";
import LoaderDeterminate from "./LoaderDeterminate";

const stories = storiesOf("Controls", module);
stories.addDecorator(withKnobs);

stories.add("Loader Determinate", () => {
  const loaderSizes = radios(
    "Size",
    {
      small: "small",
      medium: "medium",
      Large: "large"
    },
    "medium"
  );

  const progress = number("Progress", 25, {
    range: true,
    min: 0,
    max: 100,
    step: 1
  });

  return <LoaderDeterminate size={loaderSizes} progress={progress} />;
});
