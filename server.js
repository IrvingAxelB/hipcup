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

app.post('/google', jsonParser, function(req, res, next){

  var apiGeolocationData = function(){
    var deferred = Q.defer();

    request.post({url:'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBa9XzxdfkIpRRk6ahCZB6-f94G_MJ0qL4'}, function(err, res, body){
      if(err){
        console.log("error");
        deferred.reject("error within googlegeolocation post request");
      }
      if(!err && res.statusCode === 200){
        deferred.resolve(JSON.parse(body))
      }
      else {
        deferred.reject("node error");
      }
    });

    return deferred.promise;
  };

  var apiStoreData = function(data){
    console.log("DATA IN API STORE DATA", data);

    var deferred = Q.defer();

    request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee&location=34.0193967,-118.49669&radius=5000&key=AIzaSyBa9XzxdfkIpRRk6ahCZB6-f94G_MJ0qL4', function(err, res, body){
       if(err){
         console.log("error");
         deferred.reject("error within googleplaces get request");
       }
       if(!err && res.statusCode === 200){
         deferred.resolve(JSON.parse(body))
       }
       else {
         deferred.reject("node error");
       }
     });

     return deferred.promise;
  };

  apiGeolocationData().then(function(data){
    console.log(data);
    return apiStoreData(data)
  }).then(function(data){
    res.send(data);
  });

  // .apiStoreData().then(function(data){
  //   res.send(data);
  // });
});

app.use(express.static(path.join(__dirname, './client')));

app.listen(8080);
console.log('Listening on port 8080...');
