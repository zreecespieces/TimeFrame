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
          'timeframe lets you calculate how long it would take to watch any number of movies nested inside of each other at certain keywords. For example, how long would it take for you to watch The Ant Movie, but every time they said the word ant, you paused the movie and played the entire Bee Movie, and then went back to The Ant Movie until the next time they said ant, and again and again until The Ant Movie was finished. Try this example or any combination of your own!'
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
