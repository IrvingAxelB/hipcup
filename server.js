// Does not use because of webpack-dev-server

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));

app.get('/', function(req, res){
  res.sendFile('index');
});

app.listen(8080);
console.log('Listening on port 8080...');
