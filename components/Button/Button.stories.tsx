import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { MyButton } from "./Button";

const meta = {
  title: "MyButton",
  component: MyButton,
  // for the web docs page
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'This is a custom button used across the app.',
      },
    },
    // for ondevice notes
    notes: 'This is a custom button used across the app.',
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: action("onPress"),
  },
};
