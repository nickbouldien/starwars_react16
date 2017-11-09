const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./src/App.js'],
  // entry: path.resolve(__dirname, 'src', 'index.js'),
  // https://webpack.js.org/configuration/devtool/#development
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    // contentBase: './src',
    publicPath: 'http://localhost:9000/public/',
    historyApiFallback: true,
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
      colors: true,
      reasons: true,
      chunks: false
  },
  plugins: [ // https://webpack.js.org/plugins/
    // https://webpack.js.org/guides/hot-module-replacement/
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // include: path.resolve(__dirname, './src'),
        query: {
          presets: ['es2015']
        },
      },
      {
       test: /\.css$/,                                     //    /\.scss/
       use: ['style-loader', 'css-loader']                 // , 'sass-loader'
     },
      // {
      //   test: /\.jsx?$/,
      //   loader: 'babel-loader',
      //   include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')]
      // }
    ]
  }
};

  // if (process.env.NODE_ENV === 'development') {
  //   config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
  // }

  module.exports = config;
