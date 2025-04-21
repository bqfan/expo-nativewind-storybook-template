const path = require("node:path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

let config = getDefaultConfig(__dirname);

// Add NativeWind support
config = withNativeWind(config, { input: "./global.css" });

// Add Storybook support
config = withStorybook(config, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.rnstorybook"),
  onDisabledRemoveStorybook: true,
});

module.exports = config;
