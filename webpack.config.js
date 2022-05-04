const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: path.join(__dirname, 'client/src/index.jsx'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
