var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
}

exec("npm install webpack webpack-dev-server react react-dom lodash babel-eslint babel-core babel-preset-es2015 babel-preset-react eslint eslint-plugin-react", puts);
exec("npm init -f", puts);
