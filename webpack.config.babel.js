import path from 'path';
import webpack from 'webpack';

const srcPath = path.resolve(__dirname, 'src');

export default {
  output: {
    library: 'GridTemplateParser',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [srcPath],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    ...(process.env.NODE_ENV === 'production' && [
      new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    ]),
  ],
};
