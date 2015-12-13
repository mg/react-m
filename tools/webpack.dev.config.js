var webpack = require('webpack');
var path = require('path')

var root = path.join(__dirname + '/../', 'dev');

module.exports = {
  entry: [
    `webpack-hot-middleware/client`,
    `${root}/index.jsx`,
  ],

  output: {
    path: root,
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['babel?optional[]=runtime'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: "json-loader" },
    ],
  },

  node: {
    __filename: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],

  devtool: 'eval-cheap-module-source-map',
}
