var fs = require('fs');
var exec = require('child_process').exec;

// files
var babelrc = '
{
  "presets": ["es2015", "react"]
}
';

var gitignore = '
node_modules
npm-debug.log
.DS_Store
dist
';

var eslintrc = '
{
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "rules": {
    "semi": [2, "always"],
    "quotes": 0,
    "no-console": 0,
    "strict": [2, "never"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2
  },
  "plugins": [
    "react"
  ]
}
';

var webpackConfig = "
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
";

// logger
function logger(error, stdout, stderr) {
  if (error) {
    console.error(`error: ${error}`);
    return;
  }
}

exec("npm install webpack webpack-dev-server react react-dom lodash babel-eslint babel-core babel-preset-es2015 babel-preset-react eslint eslint-plugin-react babel-loader", puts);
exec("npm init -f", logger);
exec("mkdir src", logger);
exec("mkdir test", logger);

fs.writeFile(".babelrc", babelrc, logger);
fs.writeFile(".gitignore", gitignore, logger);
fs.writeFile(".eslintrc", eslintrc, logger);
fs.writeFile("webpack.config.js", webpackConfig, logger );

