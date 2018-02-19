import React, { Component } from 'react';
import { connect } from 'react-redux';
import humanizeDuration from 'humanize-duration';

class Result extends Component {
  constructor(props) {
    super(props);

    this.findResult = this.findResult.bind(this);
  }

  findResult(runtimes, keywords) {
    const layerRuntimes = runtimes;
    const layerKeywordCount = keywords;

    var totalRuntime = (layerRuntimes[0] * layerKeywordCount[0]) + layerRuntimes[1];

    for (var count = 1; count < runtimes.length - 1; count++) {
        totalRuntime = (totalRuntime * layerKeywordCount[count]) + layerRuntimes[count + 1];
      }
    return humanizeDuration(totalRuntime * 60000);
  }

  render(){
    return (
      <div id="result">
        {this.findResult(this.props.runtimes, this.props.keywords)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    keywords: state.movies.keywords,
    runtimes: state.movies.runtimes
  }
}

export default connect(mapStateToProps)(Result);
