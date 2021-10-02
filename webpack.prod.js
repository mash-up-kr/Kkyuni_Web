import { merge } from 'webpack-merge';

import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import  { CleanWebpackPlugin } from 'clean-webpack-plugin';

import baseConfig, { TEMPLATE_PATH } from './webpack.base.js';

export default merge(baseConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(TEMPLATE_PATH, 'index.html'),
      minify: true,
    }),
    new CleanWebpackPlugin(),
  ],
});
