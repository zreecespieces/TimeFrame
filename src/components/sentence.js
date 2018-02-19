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
            })}</div>}
        {"Movies:"}
        {!this.props.formValues ?
          ' '
        :
          <div>
            {allMovies.map((e, i) => {
              return this.props.formValues.values[e];
            })}
          </div>}
      <br />
        {`Keywords:`}
        {!this.props.formValues ?
          ' '
        :
          <div>
            {allKeywords.map((e, i) => {
              return this.props.formValues.values[e];
            })}
          </div>}
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
