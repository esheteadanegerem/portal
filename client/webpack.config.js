const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // Define loaders and rules for handling different file types
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Example: Using Babel for JavaScript transpilation
        },
      },
    ],
  },
  stats: {
    warningsFilter: (warning) => {
      // You can customize this filter logic based on your needs
      return false; // This will ignore all warnings
    },
  },
  // Other configuration options...
};
