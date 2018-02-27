module.exports = {
  entry: './client/main.jsx',
  output: {
    path: __dirname,
    filename: './client/public/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: []
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-source-map'
};


// {
// test: /\.jsx?$/,
// loader: 'babel!semantic-ui-react-less-loader',
// include: [/node_modules[\/\\]semantic-ui-react/]
// },
