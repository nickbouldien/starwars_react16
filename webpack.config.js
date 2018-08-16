const path = require('path');
const webpack = require('webpack');

const config = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // https://webpack.js.org/configuration/devtool/#development
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'  // https://webpack.js.org/guides/public-path/
  },
  devServer: {
    hot: true,
    contentBase: './public',
    publicPath: 'http://localhost:3000/',
    historyApiFallback: true,
    port: 3000
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
        exclude: /node_modules/,
        loader: 'babel-loader', // https://github.com/babel/babel-loader
        query: {
          presets: ['es2015'],
          "plugins": [
            "react-hot-loader/babel",
            "babel-plugin-syntax-dynamic-import",
            "babel-plugin-dynamic-import-webpack",
            "babel-plugin-transform-decorators-legacy",
            "babel-plugin-transform-class-properties"
          ]
        },
      },
      {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
     {
       test: /\.(jpe?g|png|gif|ttf|svg)$/i,
       loader: "url-loader?name=/public/images/[name].[ext]"
     }
    ]
  }
};

if (process.env.NODE_ENV !== 'production') {
  console.log('In development mode!');
} else {
  console.info('Running in production');
}

module.exports = config;
