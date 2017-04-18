var request = require('request');
var async = require('async');
var sanitizeHtml = require('sanitize-html');
var calc = require('./calc');

function wordCounts(req, res, timeArr, title1, title2, title3) {
  function count1(callback) {
    var movie = title1.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.firstKeyword, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }
    });
  }

  function count2(callback) {
    var movie = title2.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.secondKeyword, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }
    });
  }

  function count3(callback) {
    var movie = title3.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.thirdKeyword, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }

    });
  }

  async.parallel([count1, count2, count3], function (err, results) {
    countsArr = results.reverse();
    calc.calcTime(timeArr, countsArr);
  });

}

exports.wordCounts = wordCounts;
