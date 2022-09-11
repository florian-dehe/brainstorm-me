import * as path from 'path'

import CopyPlugin from "copy-webpack-plugin"
import WebExtPlugin from 'web-ext-plugin'

const DIST_FOLDER = path.resolve('dist')

const config = {
  mode: 'production',
  entry: {
    popup: './src/popup.jsx',
    background_script: './src/background_script.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_FOLDER
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' }}]
            ],
            plugins: [
              ["@babel/plugin-transform-react-jsx", { runtime: "automatic", importSource: "preact" }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        "manifest.json",
        "src/popup.html",
        "node_modules/bulma/css/bulma.css",
        { from: "src/_locales", to: "_locales" },
        { from: "src/icons", to: "icons"},
      ]
    }),
    new WebExtPlugin({
      sourceDir: DIST_FOLDER,
      browserConsole: true,
    })
  ]
};

export default config;
