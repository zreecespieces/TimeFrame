import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
  render(){
    return (
      <div className="col-xs-4">
        This is the runtimes array: {this.props.runtimes}
        <br />
        This is the keywords array: {this.props.keywords}
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
