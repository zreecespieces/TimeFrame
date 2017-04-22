'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var runtimes = require('./static/js/runtimes');
var Layout = require('./components/Layout');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  var markup = ReactDOMServer.renderToString(< Layout />);
  res.render("index", { markup: markup });
});

app.post('/result', function(req, res) {
  runtimes.times(req, res, req.body.numberOfMovies);
})

app.listen(8080, function() {
  console.log('Server Started');
});
