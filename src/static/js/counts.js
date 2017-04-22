var request = require('request');
var async = require('async');
var sanitizeHtml = require('sanitize-html');
var calc = require('./calc');

function wordCounts(req, res, timeArr, int, title1, title2, title3, title4, title6, title7, title8) {
  function count1(callback) {
    var movie = title1.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.keyword1, 'g');
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

      var toMatch = new RegExp(req.body.keyword2, 'g');
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

      var toMatch = new RegExp(req.body.keyword3, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }

    });
  }

  function count4(callback) {
    var movie = title4.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.keyword4, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }
    });
  }

  function count5(callback) {
    var movie = title5.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.keyword5, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }
    });
  }

  function count6(callback) {
    var movie = title6.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.keyword6, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }
    });
  }

  function count7(callback) {
    var movie = title7.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.keyword7, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }
    });
  }

  function count8(callback) {
    var movie = title8.replace(/\b\w/g, function(i){ return i.toUpperCase() }).split(' ').join('-');

    request.get('http://www.imsdb.com/scripts/' + movie + '.html', function (err, response, body) {

      script = sanitizeHtml(body, {
        allowedTags: []
      })

      var toMatch = new RegExp(req.body.keyword8, 'g');
      var result = (script.match(toMatch) || []).length;
      if (result != 0) {
        callback(err, result);
      } else {
        result = "not found";
        callback(err, result);
      }
    });
  }

  switch (int) {
    case 2:
      async.parallel([count1], function (err, results) {
        countsArr = results.reverse();
        calc.calcTime(timeArr, countsArr);
      });
      break;

    case 3:
      async.parallel([count1, count2], function (err, results) {
        countsArr = results.reverse();
        calc.calcTime(timeArr, countsArr);
      });
      break;

    case 4:
      async.parallel([count1, count2, count3], function (err, results) {
        countsArr = results.reverse();
        calc.calcTime(timeArr, countsArr);
      });
      break;

    case 5:
      async.parallel([count1, count2, count3, count4], function (err, results) {
        countsArr = results.reverse();
        calc.calcTime(timeArr, countsArr);
      });
      break;

    case 6:
      async.parallel([count1, count2, count3, count4, count5], function (err, results) {
        countsArr = results.reverse();
        calc.calcTime(timeArr, countsArr);
      });
      break;

    case 7:
      async.parallel([count1, count2, count3, count4, count5, count6], function (err, results) {
        countsArr = results.reverse();
        calc.calcTime(timeArr, countsArr);
      });
      break;
    case 8:
      async.parallel([count1, count2, count3, count4, count5, count6, count7], function (err, results) {
        countsArr = results.reverse();
        calc.calcTime(timeArr, countsArr);
      });
      break;

    case 9:
      async.parallel([count1, count2, count3, count4, count5, count6, count7, count8], function (err, results) {
        countsArr = results.reverse();
        calc.calcTime(timeArr, countsArr);
      });
      break;

    default:

  }

}

exports.wordCounts = wordCounts;
