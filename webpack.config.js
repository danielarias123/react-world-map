// Webpack is used only to compile example

module.exports = {
     entry: `${__dirname}/example/index.js`,
     output: {
         filename: 'bundle.js',
         path: `${__dirname}/example`,
     },
     module: {
         loaders: [
           {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loaders: ['react-hot-loader', 'babel-loader'],
           },
           {
            test: /\.s*css$/,
            loader: "style-loader!css-loader"
          }
         ]
     },
     devServer: {
        contentBase: './example',
        host: 'localhost'
      }
 }
