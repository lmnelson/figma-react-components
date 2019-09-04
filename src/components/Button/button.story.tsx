import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
import FigmaButton from "./Button";

const stories = storiesOf("Controls", module);
stories.addDecorator(withKnobs);

stories.add("Button", () => {
  const buttonText = text("Button Text", "Button");

  return (
    <FigmaButton
      isDisabled={boolean("Disabled", false)}
      variant={radios(
        "Variant",
        {
          Primary: "primary",
          "Primary Destructive": "primaryDestructive",
          Standard: "standard",
          "Standard Destructive": "standardDestructive"
        },
        "primary"
      )}
    >
      {buttonText}
    </FigmaButton>
  );
});
