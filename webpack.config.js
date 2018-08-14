const path = require('path');
const config = {
  mode: 'production',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src/js'),
  entry: {
    main: './main.js'
  },
  output: {
    publicPath: 'js/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
module.exports = config;
