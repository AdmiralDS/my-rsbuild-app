import { defineConfig } from '@rsbuild/core';

// https://rsbuild.dev/plugins/list/plugin-react
import { pluginReact } from '@rsbuild/plugin-react';

// https://rsbuild.dev/plugins/list/plugin-svgr
import { pluginSvgr } from '@rsbuild/plugin-svgr';

// https://github.com/rspack-contrib/rsbuild-plugin-styled-components
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

export default defineConfig({
  plugins: [pluginReact(), pluginSvgr(), pluginStyledComponents({displayName:true})],
});
