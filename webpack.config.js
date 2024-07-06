// webpack.config.js
const path = require('path');
const autoprefixer = require('autoprefixer');

// Ensure proper environment variables
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

module.exports = {
  entry: './src/components', // Entry point for the application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the build
    filename: 'bundle.js', // Output filename
    library: 'flatui-date-picker',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this' // Ensure compatibility for both browser and Node.js environments
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Automatically resolve certain extensions
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
        test: /\.(js|jsx)$/, // Apply this rule to .js and .jsx files
        include: path.resolve(__dirname, 'src'), // Include source directory
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader for JS files
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(ts|tsx)$/, // Apply this rule to .ts and .tsx files
        include: path.resolve(__dirname, 'src'), // Include source directory
        exclude: /node_modules/, // Exclude node_modules
        use: 'ts-loader'
      },
      {
        test: /\.scss$/, // Apply this rule to .scss files
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
              postcssOptions: {
                plugins: [
                  'postcss-flexbugs-fixes',
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
          }
        ]
      }
    ]
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  }
};
