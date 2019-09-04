import { addParameters } from "@storybook/react";
import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import figmaTheme from "./figmaTheme";
import "storybook-chromatic";

addDecorator(withInfo);
require("typeface-inter");
import "../src/components/global-styles.css";

// automatically import all files ending in *.stories.tsx
const req = require.context("../src/components", true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

// Option defaults.
addParameters({ options: { theme: figmaTheme } });

configure(loadStories, module);
