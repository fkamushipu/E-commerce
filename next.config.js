/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}


const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Disable file-system routing
    config.devServer = {
      historyApiFallback: true,
    };

    // Add aliases for component imports
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib');

    // Exclude SVG files from file-loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Return modified configuration
    return config;
  },
};


