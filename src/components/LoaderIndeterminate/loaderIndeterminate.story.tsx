import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, radios } from "@storybook/addon-knobs";
import LoaderIndeterminate from "./LoaderIndeterminate";

const stories = storiesOf("Controls", module);
stories.addDecorator(withKnobs);

stories.add("Loader Indeterminate", () => {
  const loaderSizes = radios(
    "Size",
    {
      small: "small",
      medium: "medium",
      Large: "large"
    },
    "medium"
  );

  return <LoaderIndeterminate size={loaderSizes} />;
});
