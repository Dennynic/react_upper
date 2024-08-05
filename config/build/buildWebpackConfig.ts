import webpack from "webpack";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
  const {paths, mode, isDev} = options;  
  console.log(" buildLoaders(options)",  buildLoaders(options));
  return {
        mode,
        entry: paths.entry,
        output: {
          path: paths.build,
          filename: "[name].[contenthash].js",
          clean: true,
        },
        resolve: buildResolvers(options),
        module: {
          rules: buildLoaders(options),
        },

        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options): undefined
      };
}