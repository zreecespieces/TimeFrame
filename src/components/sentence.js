import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sentence extends Component {
  render(){
    return (
      <div className="col-xs-4" id="sentence">Watching blah but every time they say blah it's replaced with blah would take: </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie0: state.form.MovieKeywordForm
  }
}

export default connect(mapStateToProps)(Sentence);
