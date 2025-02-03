const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const fs = require('fs')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  const isDevelopment = argv.mode === 'development'

  const pages = fs
    .readdirSync(path.resolve(__dirname, 'src/app/pages'))
    .filter(fileName => fileName.endsWith('.pug'))

  const htmlPlugins = pages.map(
    page =>
      new HtmlWebpackPlugin({
        template: `./src/app/pages/${page}`,
        filename: `${page.replace('.pug', '.html')}`
      })
  )

  return {
    entry: './src/app/assets/scripts/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: isProduction ? './' : '/'
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: 'pug-loader'
        },
        {
          test: /\.scss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.styl$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'stylus-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name][ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...htmlPlugins,
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/public/images',
            to: 'assets/images'
          },
          {
            from: 'src/public/fonts',
            to: 'assets/fonts'
          }
        ]
      })
    ],
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: true,
      port: 9000,
      open: true,
      hot: true,
      watchFiles: ['src/**/*']
    },
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'src/public/images'),
        fonts: path.resolve(__dirname, 'src/public/fonts')
      }
    },
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
    }
  }
}
