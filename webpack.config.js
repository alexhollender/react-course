// webpack.config.js file
const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        // this tells webpack to run babel on all .js files
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        // this tells webpack to process all SCSS into CSS
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    // this helps with debugging bundle.js
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}
