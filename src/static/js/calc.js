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
     console.log(totalRuntime);
  }

}

exports.calcTime = calcTime;
