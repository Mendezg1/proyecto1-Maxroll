const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader']
      },{
        test: /\.html$/,
        use: 'html-loader',
      },
      // Regla para cargar archivos EJS con ejs-loader
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-loader',
          options: {
            esModule: false,
          },
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.ejs',
      inject: true
    })
  ],
  devServer: {
    static:{
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
  },
};
