import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coded simple json info for testing
  res.json([
    { "id": 1, "firstName": "Chris", "lastName": "Sancho", "email": "sanchochris@gmail.com" },
    { "id": 2, "firstName": "Charwin", "lastName": "Campbell", "email": "charwinanthony@gmail.com" },
    { "id": 3, "firstName": "Christian", "lastName": "Lyken", "email": "lykenChris@gmail.com" }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err) //eslint-disable-line no-console
  }
  else {
    open('http://localhost:'+ port);
  }
});
