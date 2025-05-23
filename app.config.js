export default ({ config }) => ({
  ...config,
  name: "exponativewindtemplatestorybook",
  slug: "expo-template-blank-typescript",
  version: "1.0.0",
  newArchEnabled: true,
  expo: {
    "userInterfaceStyle": "automatic"
  },
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
});
