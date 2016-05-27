var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout); }

exec("npm install webpack webpack-dev-server react react-dom lodash babel-eslint babel-core babel-preset-es2015 babel-preset-react eslint eslint-plugin-react", puts);
exec("npm init -f", puts);
