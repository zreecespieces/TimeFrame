var async = require('async');
var request = require('request');
var counts = require('./counts');

var title1;
var title2;
var title3;
var title4;

function times(req, res) {
  var runtime1 = function(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.firstMovie, function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title1 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  var runtime2 = function(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.secondMovie, function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title2 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime3(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.thirdMovie, function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title3 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime4(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.fourthMovie, function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title4 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  async.parallel([runtime1, runtime2, runtime3, runtime4], function (err, results) {
    timeArr = results.reverse();
    counts.wordCounts(req, res, timeArr, title1, title2, title3);
  });
}

exports.times = times;
