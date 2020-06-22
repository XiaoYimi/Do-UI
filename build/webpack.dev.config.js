module.exports = {
  devServer: {
    host: '192.168.43.2', // 0.0.0.0 即可 localhost, IP 访问
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map'
}
