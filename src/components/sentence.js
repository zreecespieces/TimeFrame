import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sentence extends Component {
  render(){
    const allMovies = [];
    const allKeywords = [];

    return (
      <div className="col-xs-4" id="sentence">
        {!this.props.formValues ?
            ' '
        :
            <div>
              {Object.keys(this.props.formValues.values).map((e) => {
                if (e.includes("movie")) {
                  allMovies.push(e);
                } else {
                  allKeywords.push(e);
                }
            })}
          </div>}
        {!this.props.formValues ?
          ' '
        :
          <div>Watching
            {allMovies.map((e, i) => {
              var lastWord;

              if (i < allMovies.length - 1) {
                lastWord = <span key={i} >{", but every time they say "}<span>{"'" + this.props.formValues.values[allKeywords[i]] + "'"}</span>{" it's replaced with "}</span>;
              }

              return <span key={i} ><span>{` ${this.props.formValues.values[e]}`}</span>{lastWord}</span>;
            })}
            {" would take:" }
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
