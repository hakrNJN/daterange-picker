const path = require('path');

module.exports = {
  entry: './src/component/index.js', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'index.js', // Output file name
    library: 'DateRange-picker', // The name of the global variable the library will be assigned to when loaded via script tag
    libraryTarget: 'umd', // UMD format to support various module systems
    globalObject: 'this', // Avoid issues with `window` being undefined on Node
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile both .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader for JS files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(scss|css)$/, // Handle both SCSS and CSS files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Use style-loader, css-loader, and sass-loader
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Handle image files
        use: ['file-loader'], // Use file-loader
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'], // Resolve these extensions
  },
  mode: 'production', // Set mode to production
};
