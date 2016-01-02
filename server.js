var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));

app.get('/', function(req, res){
  res.sendFile('index');
});

app.listen(7890);
console.log('Listening on port 7890...');
