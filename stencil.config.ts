import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://stenciljs.com/docs/config

export const config: Config = {
  autoprefixCss: true,
  namespace: 'mycomp',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
    },
    {
      type: 'dist-hydrate-script',
    },
  ],
  plugins: [
    postcss({
      plugins: [tailwindcss(), autoprefixer()],
    }),
  ],
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true,
  },
  sourceMap: true,
};
