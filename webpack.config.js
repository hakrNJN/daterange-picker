const path = require('path');
const autoprefixer = require('autoprefixer');
// Set environment variables for production build
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';


module.exports = {
  entry: './src/components', // Entry point for the application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the build
    filename: 'index.js', // Output filename
    libraryTarget: 'commonjs2',// Export library as CommonJS
    publicPath: '/daterange-picker/'
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve certain extensions
    modules: [path.resolve('./src'), path.resolve('./node_modules')], // Directories to resolve modules
    alias: {
      // Aliases for easier imports
      utils: path.resolve(__dirname, './src/utils/index.js'),
      const: path.resolve(__dirname, './src/const/index.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/, // Apply this rule to .js and .jsx files
        include: path.resolve(__dirname, 'src'), // Include source directory
        exclude: /(node_modules|bower_components|dist)/, // Exclude these directories
        use: {
          loader: 'babel-loader' // Use Babel loader for JS files
        }
      },
      {
        test: /\.scss$/, // Apply this rule to .scss files
        include: path.resolve(__dirname, 'src'), // Include source directory
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader', // Resolves CSS imports
          'sass-loader' // Compiles Sass to CSS
        ]
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader', // Resolves CSS imports
          {
            loader: 'postcss-loader', // PostCSS loader with plugins
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  overrideBrowserslist: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom'
  },
};
