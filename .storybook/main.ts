import { fileURLToPath } from 'node:url';
import path from 'node:path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// Convert ESM URL to directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ESM-safe resolution for browser polyfills
const ttyFallback = path.resolve(__dirname, '../node_modules/tty-browserify');
const osFallback = path.resolve(__dirname, '../node_modules/os-browserify/browser');


/** @type {import("@storybook/react-webpack5").StorybookConfig} */
const config = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'react-native-reanimated',
          'nativewind',
          'react-native-css-interop',
        ],
        babelPresets: ['nativewind/babel'],
        babelPresetReactOptions: { jsxImportSource: 'nativewind' },
        babelPlugins: [
          'react-native-reanimated/plugin',
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
              importSource: 'nativewind',
            },
          ],
        ],
      },
    },
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  webpackFinal: async (config, { configType }) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [tailwindcss, autoprefixer],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve = {
      ...(config.resolve || {}),
      fallback: {
        ...(config.resolve?.fallback || {}),
        tty: ttyFallback,
        os: osFallback,
      },
    };

    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
