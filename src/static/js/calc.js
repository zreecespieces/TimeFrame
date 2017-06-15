var jsonfile = require('jsonfile');
var converter = require('./converter');

function calcTime(timeArr, countsArr) {

  var movieNotFound;

  countsArr.forEach(function (count) {
    if (count === 'not found') {
      movieNotFound = true;
      console.log('Not found');
    }
  });

  if (!movieNotFound) {
    var layerRuntimes = timeArr;
    var layerKeywordCount = countsArr;

    var totalRuntime = (layerRuntimes[0] * layerKeywordCount[0]) + layerRuntimes[1];

    for (var count = 1; count < timeArr.length - 1; count++) {
    	  totalRuntime = (totalRuntime * layerKeywordCount[count]) + layerRuntimes[count + 1];
      }
     var convertedTime = converter(totalRuntime, 'min')
     console.log(convertedTime);
     var file = __dirname + '/time.json';
     jsonfile.writeFile(file, convertedTime, function (err) {
       if (err !== null) {
         console.error(err);
       }
     });

  }

}

exports.calcTime = calcTime;
