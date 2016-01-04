var express = require('express');
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
var Q = require('q');
var app = express();

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

var jsonParser = bodyParser.json();

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, './client/index.html'));
});

app.get('/google', jsonParser, function(req, res, next){

var apiData = function(){
  var deferred = Q.defer();

  request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee&location=34.0193967,-118.49669&radius=5000&key=AIzaSyBa9XzxdfkIpRRk6ahCZB6-f94G_MJ0qL4', function(err, res, body){
     if(err){
       console.log("error");
       deferred.reject("error within google api get request");
     }
     if(!err && res.statusCode === 200){
       deferred.resolve(JSON.parse(body))
     }
     else {
       deferred.reject("node error");
     }
   });

   console.log("deferred promise", deferred.promise);
   return deferred.promise;
};

  apiData().then(function(data){
    res.send(data);
  });
});

app.use(express.static(path.join(__dirname, './client')));

app.listen(8080);
console.log('Listening on port 8080...');
