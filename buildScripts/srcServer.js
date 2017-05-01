import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

import router from '../routes';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(cors())
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));


app.use('/api', router);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err) //eslint-disable-line no-console
  }
  else {
    open('http://localhost:'+ port);
  }
});
