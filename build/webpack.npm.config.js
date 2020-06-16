const path = require('path')
const Webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    style: './src/plugins/style.js',
    doui: './src/plugins/index.js', /* 同 package.json main 中定义一致 */
  },
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    library: 'doui',
    libraryTarget: 'umd'
  },
  plugins: [ new VueLoaderPlugin() ],
  module: {
    rules: [
      { test: /\.css$/, 
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { 
        test: /\.scss$/, 
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.vue$/, loader: 'vue-loader', options: { loaders: {} } },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /.(png|jpeg|jpg|gif|svg)$/, loader: 'file-loeader', options: { name: '[name].[ext]?[hash]' } },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader', options: { limit: 10000 } }

    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, '..', 'lib'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([
    new ExtractTextWebpackPlugin('doui.css'),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: { warning: false }
    }),
    new Webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}