import { defineConfig } from '@rsbuild/core';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

// https://rsbuild.dev/plugins/list/plugin-react
import { pluginReact } from '@rsbuild/plugin-react';

// https://rsbuild.dev/plugins/list/plugin-svgr
import { pluginSvgr } from '@rsbuild/plugin-svgr';

// https://github.com/rspack-contrib/rsbuild-plugin-styled-components
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

export default defineConfig({
  plugins: [pluginReact({
    reactRefreshOptions: {
      exclude: [/\.css\.ts$/],
    },
  }), 
  pluginSvgr(), pluginStyledComponents({displayName:true})],
  tools: {
    rspack: {
      plugins: [new VanillaExtractPlugin()],
    },
  }
});
