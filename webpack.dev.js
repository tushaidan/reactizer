import path from 'path';
import webpack from 'webpack';

import base from './webpack.base.js';
import env from './etc/config/env';

export default {
  ...base,
  entry: [
    'webpack-hot-middleware/client',
    ...base.entry
  ],
  loaders: [{
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      babelrc: false,
      presets: ['react', 'es2015-webpack', 'stage-1'],
      plugins: ['add-module-exports', 'transform-decorators-legacy'],
    },
  }],
  output: {
    path: path.join(__dirname, env.TMP),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': 'dev' // TODO to env, make it work
    // })
  ],
  devtool: 'inline-source-map'
};
