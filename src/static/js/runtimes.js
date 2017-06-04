var async = require('async');
var request = require('request');
var counts = require('./counts');

var title1;
var title2;
var title3;
var title4;
var title5;
var title6;
var title7;
var title8;
var title9;

function times(req, res, int) {
  var runtime1 = function(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie1 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title1 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  var runtime2 = function(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie2 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title2 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime3(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie3 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title3 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime4(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie4 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title4 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime5(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie5 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title4 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime6(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie6 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title4 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime7(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie7 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title4 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime8(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie8 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title4 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  function runtime9(callback) {
    request.get('http://www.omdbapi.com/\?t\=' + req.body.movie9 + '&apikey=eb9fc4d2', function (err, response, body) {
      var result = JSON.parse(body).Runtime.replace(/\D/g,'');
      title4 = JSON.parse(body).Title
      callback(err, result)
    });
  }

  switch (int) {
    case 2:
      async.parallel([runtime1, runtime2], function (err, results) {
        timeArr = results.reverse();
        counts.wordCounts(req, res, timeArr, int, title1);
      });
      break;

    case 3:
      async.parallel([runtime1, runtime2, runtime3], function (err, results) {
        timeArr = results.reverse();
        counts.wordCounts(req, res, timeArr, int, title1, title2);
      });
      break;

    case 4:
      async.parallel([runtime1, runtime2, runtime3, runtime4], function (err, results) {
        timeArr = results.reverse();
        counts.wordCounts(req, res, timeArr, int, title1, title2, title3);
      });
      break;

    case 5:
      async.parallel([runtime1, runtime2, runtime3, runtime4, runtime5], function (err, results) {
        timeArr = results.reverse();
        counts.wordCounts(req, res, timeArr, int, title1, title2, title3, title4);
      });
      break;

    case 6:
      async.parallel([runtime1, runtime2, runtime3, runtime4, runtime5, runtime6], function (err, results) {
        timeArr = results.reverse();
        counts.wordCounts(req, res, timeArr, int, title1, title2, title3, title4, title5);
      });
      break;

    case 7:
      async.parallel([runtime1, runtime2, runtime3, runtime4, runtime5, runtime6, runtime7], function (err, results) {
        timeArr = results.reverse();
        counts.wordCounts(req, res, timeArr, int, title1, title2, title3, title4, title6);
      });
      break;

    case 8:
      async.parallel([runtime1, runtime2, runtime3, runtime4, runtime5, runtime6, runtime7, runtime8], function (err, results) {
        timeArr = results.reverse();
        counts.wordCounts(req, res, timeArr, int, title1, title2, title3, title4, title6, title7);
      });
      break;

    case 9:
      async.parallel([runtime1, runtime2, runtime3, runtime4, runtime5, runtime6, runtime7, runtime8, runtime9], function (err, results) {
        timeArr = results.reverse();
        counts.wordCounts(req, res, timeArr, int, title1, title2, title3, title4, title6, title7, title8);
      });
      break;

    default:
      break;

  }
}

exports.times = times;
