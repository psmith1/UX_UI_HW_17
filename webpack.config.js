const path = require('path');
module.exports = {
  resolve: {
  alias: {
    images: path.resolve(__dirname, 'images')
  }
},
  mode: 'production',
  entry: ['./src/index.js', './src/style.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        publicPath: path.resolve(__dirname, 'images'),
                    },
                  },
                ],
            },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
  },
};
