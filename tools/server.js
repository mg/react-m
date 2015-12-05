var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');

var app = express();
var compiler = webpack(config);

// Read default config
var conf= require('./conf.js')

// Read user config and merge with default config
try {
    var user= require('./conf.user.js')
    Object.assign(conf, user)
} catch(e) {
}

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/static/'
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dev/index.html'));
});

app.listen(conf.port, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return;
  }

  console.log('Listening at http://localhost:' + conf.port);
})
