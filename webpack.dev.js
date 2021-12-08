import { merge } from 'webpack-merge';

import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import baseConfig, { TEMPLATE_PATH } from './webpack.base.js';

export default merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    port: '5050',
    host: '127.0.0.1',
    historyApiFallback: true,
    proxy: {
      '/api/': { 
        target: 'http://3.37.106.181:8080',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(TEMPLATE_PATH, 'index.html'),
      minify: {
        removeComments: true,
      },
    }),
  ],
});
