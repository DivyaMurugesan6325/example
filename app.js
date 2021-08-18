'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
//var validator = require('express-validator');
//const { check, validationResult } = require('express-validator');



//var artworksController = require('./db/controllers/artworks');
var studentController = require('./controllers/student');
var classController = require('./controllers/classes');
var secController  = require('./controllers/section');
//var locationsController = require('./db/controllers/locations');

var app = express();

app.use(bodyParser.json());

//var models = require("./db/models");
var models = require("./models");


app.get('/', function(req, res, next){
	res.send('Home Route - nothing to see here yet ');
});
app.get('/api/v1/students',studentController.fetchAll);
app.get('/class',classController.fetchAll);
app.get('/sec',secController.fetchsec);
/*app.get('/api/v1/artworks', artworksController.fetchAll);
app.get('/api/v1/artworks/:id', artworksController.fetchOne);
app.post('/api/v1/artworks/', artworksController.create);
app.get('/api/v1/artists', artistsController.fetchAll);
app.get('/api/v1/artists/:id', artistsController.fetchOne);
app.post('/api/v1/artists/', artistsController.create);
app.get('/api/v1/locations', locationsController.fetchAll);
app.get('/api/v1/locations/:id', locationsController.fetchOne);
app.post('/api/v1/locations/', locationsController.create);*/





app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var errorResponse = {};
  errorResponse.status = err.status;
  errorResponse.message = err.message;
  res.json(errorResponse);
});


app.listen(process.env.PORT || 7000, function () {
  console.log('Express app listening on port 3000');
})




