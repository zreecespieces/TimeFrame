import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sentence extends Component {
  render(){
    const allMovies = [];
    const allKeywords = [];

    return (
      <div className="col-xs-12" id="sentence">
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
          <div>
            <span className="red-text">timeframe </span>lets you calculate how long it would take to watch any number of movies nested inside of each other at certain keywords. For example, how long would it take for you to watch <span className="red-text">Interstellar</span>, but every time they said the word <span className="red-text">space</span>, you paused the movie and watched <span className="red-text">Deadpool</span>, and then went back to <span className="red-text">Interstellar</span> until the next time they said <span className="red-text">space</span>, and again and again until <span className="red-text">Interstellar</span> was finished. Try this example or any combination of your own!
          </div>
        :
          <div>Watching
            {allMovies.map((e, i) => {
              var lastWord;

              if (i < allMovies.length - 1) {
                lastWord = <span key={i}>{", but every time they say "}<span className="red-text">{"'" + this.props.formValues.values[allKeywords[i]] + "'"}</span>{" it's replaced with "}</span>;
              }

              return <span key={i} ><span className="red-text">{` ${this.props.formValues.values[e]}`}</span>{lastWord}</span>;
            })}
            {" would take:" }
          </div>}
          <br />
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
