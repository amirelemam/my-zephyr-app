import type { ModuleFederationPluginOptions } from '@rspack/core';

const isDev = process.env.NODE_ENV === 'development';

export const mfConfig: ModuleFederationPluginOptions = {
  name: 'turbo_home',
  filename: 'remoteEntry.js',
  exposes: {
    './RemoteEntry': './src/RemoteEntry.tsx',
  },
  remotes: {
    turbo_host: isDev
      ? 'turbo_host@http://localhost:3000/remoteEntry.js'
      : 'turbo_host@https://turbo-host.zephyr.run/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router'],
};
