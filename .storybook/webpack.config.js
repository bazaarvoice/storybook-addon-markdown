const path = require('path');

const config = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'raw-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.json?$/,
        loaders: ['json-loader'],
        include: path.resolve(__dirname, '../'),
      }
    ],
  },
};

module.exports = config;
