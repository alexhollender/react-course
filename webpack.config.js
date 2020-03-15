// webpack.config.js file
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        // this tells webpack to run babel on all .js files
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
       test: /\.s?css$/,
       use: [
           MiniCssExtractPlugin.loader,
           {
               loader: 'css-loader',
               options: {
                   sourceMap: true
               }
           },
           {
               loader: 'sass-loader',
               options: {
                   sourceMap: true
               }
           }
       ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    // this helps with debugging bundle.js
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}
