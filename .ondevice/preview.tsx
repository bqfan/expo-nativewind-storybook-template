// Import your global CSS file
import "../global.css"

import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [withBackgrounds],

  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#F7F9F2" },
        { name: "dark", value: "#333" },
        { name: "beige", value: "#F5ECE0" },
        { name: "blue", value: "#5F99AE" },
        { name: "teal", value: "#336D82" },
        { name: "purple", value: "#693382" },
      ],
    },
    initialGlobals: {
      // 👇 Set the initial background color
      backgrounds: { value: 'light' },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
