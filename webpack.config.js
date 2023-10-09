const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{ test: /\.vue$/, use: 'vue-loader' }],
  },
  externals: {
    vue: 'Vue',
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '' }],
    }),
  ],
}
