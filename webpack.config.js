const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, './client/index.html'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /.(js|jsx)$/, //telling it to bundle all .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        } 
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, '/client'),
    },
    proxy: {
      '/api/search': 'http://localhost:3000',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html'
    })
  ],
}
