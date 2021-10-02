const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../.');
const SRC_PATH = path.resolve(PROJECT_ROOT, 'src');

module.exports = async ({ config }) => {
  config.module.rules.push(   {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
    }],
  });

  
  config.resolve.alias = {
    '@src': SRC_PATH,
  };

  return config;
};
