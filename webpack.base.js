import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = path.resolve();

const PROJECT_ROOT = path.resolve(__dirname, './');
const DIST_PATH = path.resolve(PROJECT_ROOT, 'dist');
const SRC_PATH = path.resolve(PROJECT_ROOT, 'src');

export const TEMPLATE_PATH = path.resolve(PROJECT_ROOT, 'public');

export default {
  entry: path.resolve(SRC_PATH, 'index.tsx'),
  devServer: {
    proxy: {
      '/api/': { 
        target: 'https://api.gyunny.site',
        changeOrigin: true,
      },
    },
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve('src'),

        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
        }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@src': SRC_PATH,
    },
    modules: ['node_modules'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.join(__dirname, 'public'),
          from: '**/*',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ]
};
