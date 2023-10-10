import path from 'path'
import { VueLoaderPlugin } from 'vue-loader'
import CopyPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

function resolve(target: string) {
  return path.resolve(__dirname, target)
}

export default {
  mode: 'development',
  entry: resolve('src/main.ts'),
  output: {
    path: resolve('dist'),
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    vue: 'Vue',
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: [resolve('public/index.html')],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: '自定义标题',
      template: resolve('public/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
}
