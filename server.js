var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res){
  res.sendFile('index');
});

app.listen(8080);
console.log('Listening on port 8080...');
