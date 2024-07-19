import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoadder = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    namedExport: false,
                    exportLocalsConvention: 'as-is',
                    auto: (resPath: string) => Boolean(resPath.includes('.scss')),
                    localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                },
            }
        },
        'sass-loader',
    ]
}



  return [typescriptLoadder, cssLoader];
}
