var exec = require('child_process').exec;

var babelrc = '';
var gitignore = '';
var eslintrc = '';

function puts(error, stdout, stderr) {
  if (error) {
    console.error(`error: ${error}`);
    return;
  }
}

exec("npm install webpack webpack-dev-server react react-dom lodash babel-eslint babel-core babel-preset-es2015 babel-preset-react eslint eslint-plugin-react", puts);
exec("npm init -f", puts);
exec("mkdir src", puts);
exec("mkdir test", puts);

fs.writeFile(".babelrc", babelrc, puts);
fs.writeFile(".gitignore", babelrc, puts);
fs.writeFile(".eslintrc", babelrc, puts);

