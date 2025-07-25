import type { ModuleFederationPluginOptions } from '@rspack/core';

const isDev = process.env.NODE_ENV === 'development';

export const mfConfig: ModuleFederationPluginOptions = {
  name: 'turbo_host',
  filename: 'remoteEntry.js',
  remotes: {
    turbo_home: isDev
      ? 'turbo_home@http://localhost:3001/remoteEntry.js'
      : 'turbo_home@https://amir-elemam-3-turbo-home-my-zephyr-app-amirelemam-0cfa1b18b-ze.zephyrcloud.app/remoteEntry.js',
    turbo_settings: isDev
      ? 'turbo_settings@http://localhost:3002/remoteEntry.js'
      : 'turbo_settings@https://amir-elemam-4-turbo-settings-my-zephyr-app-amirel-239097cf9-ze.zephyrcloud.app/remoteEntry.js',
  },
  exposes: {
    './RemoteEntry': './src/App.tsx',
  },
  shared: ['react', 'react-dom', 'react-router'],
};
