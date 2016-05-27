var fs = require('fs');
var exec = require('child_process').exec;

// files
var babelrc = '';
var gitignore = '';
var eslintrc = '';
var webpackConfig = '';

// logger
function logger(error, stdout, stderr) {
  if (error) {
    console.error(`error: ${error}`);
    return;
  }
}

exec("npm install webpack webpack-dev-server react react-dom lodash babel-eslint babel-core babel-preset-es2015 babel-preset-react eslint eslint-plugin-react", puts);
exec("npm init -f", logger);
exec("mkdir src", logger);
exec("mkdir test", logger);

fs.writeFile(".babelrc", babelrc, logger);
fs.writeFile(".gitignore", babelrc, logger);
fs.writeFile(".eslintrc", babelrc, logger);

