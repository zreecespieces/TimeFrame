import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sentence extends Component {
  render(){
    const allMovies = [];
    const allKeywords = [];

    return (
      <div className="col-xs-4" id="sentence">Watching
        {!this.props.formValues ?
            ' '
        :
            <div>{Object.keys(this.props.formValues.values).map((e) => {
              if (e.includes("movie")) {
                allMovies.push(e);
              } else {
                allKeywords.push(e);
              }
            })}{`The movies are: ${allMovies}, and the keywords are: ${allKeywords}`}</div>}
        blah but every time they say blah it's replaced with blah would take:
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.MovieKeywordForm
  }
}

export default connect(mapStateToProps)(Sentence);
