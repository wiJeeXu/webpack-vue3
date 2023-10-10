import path from 'path'
import { VueLoaderPlugin } from 'vue-loader'
import CopyPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
  mode: 'development',
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
      patterns: [{ from: 'public' }],
    }),
    new CleanWebpackPlugin(),
  ],
}
